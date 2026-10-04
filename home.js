(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Copy email: works even where mailto has no mail app behind it ---------- */
  document.querySelectorAll('[data-copy]').forEach((button) => {
    if (!navigator.clipboard) return;
    const status = button.parentElement.querySelector('[data-copy-status]');
    let reset = null;
    button.hidden = false;
    button.addEventListener('click', async () => {
      let copied = true;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
      } catch {
        // Fallback for browsers that refuse the async clipboard here.
        const field = document.createElement('textarea');
        field.value = button.dataset.copy;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.append(field);
        field.select();
        try { copied = document.execCommand('copy'); } catch { copied = false; }
        field.remove();
        button.focus();
      }
      button.classList.toggle('is-copied', copied);
      if (status) status.textContent = copied ? 'Email address copied' : `Copy failed. The address is ${button.dataset.copy}`;
      window.clearTimeout(reset);
      reset = window.setTimeout(() => {
        button.classList.remove('is-copied');
        if (status) status.textContent = '';
      }, 2000);
    });
  });

  /* ---------- Quotes on phones: one at a time; turns on its own, pauses while read, swipes on touch ---------- */
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = [...carousel.querySelectorAll('.quote')];
    const dotsWrap = carousel.querySelector('[data-carousel-dots]');
    const controls = carousel.querySelector('.quote-carousel__controls');
    if (!track || slides.length < 2 || !dotsWrap || !controls) return;
    let index = 0;
    let timer = null;
    let held = false;
    let chosen = false;
    let inView = !('IntersectionObserver' in window);
    const phone = window.matchMedia('(max-width: 760px)');

    const dots = slides.map((slide, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'quote-carousel__dot';
      const who = slide.querySelector('figcaption')?.firstChild?.textContent.trim() || '';
      b.setAttribute('aria-label', `Quote ${i + 1} of ${slides.length}${who ? `, ${who}` : ''}`);
      b.addEventListener('click', () => { pick(i); });
      dotsWrap.append(b);
      return b;
    });

    const show = (next) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.classList.toggle('is-active', i === index);
        s.setAttribute('aria-hidden', String(i !== index));
      });
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
    };
    const schedule = () => {
      window.clearTimeout(timer);
      if (!phone.matches || held || chosen || !inView || reduceMotion.matches || document.hidden) return;
      timer = window.setTimeout(() => { show(index + 1); schedule(); }, 7000);
    };
    // a person's choice stops the rotation and is announced
    const pick = (i) => {
      chosen = true;
      window.clearTimeout(timer);
      track.setAttribute('aria-live', 'polite');
      show(i);
    };

    // wide screens keep all three quotes side by side and fully readable by assistive tech
    const sync = () => {
      window.clearTimeout(timer);
      carousel.classList.toggle('is-live', phone.matches);
      controls.hidden = !phone.matches;
      if (phone.matches) {
        show(index);
        schedule();
      } else {
        slides.forEach((s) => { s.classList.remove('is-active'); s.removeAttribute('aria-hidden'); });
      }
    };
    phone.addEventListener('change', sync);
    sync();
    carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => pick(index - 1));
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => pick(index + 1));
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); pick(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); pick(index + 1); }
    });

    // horizontal swipe on touch; vertical scrolling stays with the page
    let startX = null;
    let startY = 0;
    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' || !phone.matches) return;
      startX = e.clientX;
      startY = e.clientY;
    });
    track.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) pick(index + (dx < 0 ? 1 : -1));
    });
    track.addEventListener('pointercancel', () => { startX = null; });

    carousel.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { held = true; window.clearTimeout(timer); } });
    carousel.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { held = false; schedule(); } });
    carousel.addEventListener('focusin', () => { held = true; window.clearTimeout(timer); });
    carousel.addEventListener('focusout', (e) => { if (!carousel.contains(e.relatedTarget)) { held = false; schedule(); } });
    if (!inView) {
      new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) schedule(); else window.clearTimeout(timer);
      }, { threshold: 0.4 }).observe(carousel);
    }
    document.addEventListener('visibilitychange', schedule);
    reduceMotion.addEventListener('change', schedule);
    schedule();
  });

  /* ---------- AI console tabs ---------- */
  document.querySelectorAll('[data-tabs]').forEach((console) => {
    const tabs = [...console.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach((other) => {
        const selected = other === tab;
        other.setAttribute('aria-selected', String(selected));
        other.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(other.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (focus) tab.focus({ preventScroll: true });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', (event) => {
        const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
        if (!(event.key in moves)) return;
        event.preventDefault();
        select(tabs[(moves[event.key] + tabs.length) % tabs.length], true);
      });
    });
  });
})();
