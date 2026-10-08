(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- The borehole: each project opens from its surface down to its proof ---------- */
  document.querySelectorAll('[data-borehole]').forEach((index) => {
    const rows = [...index.querySelectorAll(':scope > .p')].filter((row) => row.querySelector('.p__btn') && row.querySelector('.dig'));
    if (!rows.length) return;
    const all = index.parentElement.querySelector('[data-digall]');
    const allLabel = all?.querySelector('.digall__label');

    // the strata fall into place one under another; the only moving moment on the page
    const dig = (panel) => {
      if (reduceMotion.matches || !panel.animate) return;
      panel.querySelectorAll(':scope > .stratum').forEach((stratum, i) => {
        stratum.animate(
          [{ clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-12px)' }, { clipPath: 'inset(0 0 0% 0)', transform: 'none' }],
          { duration: 480, delay: i * 90, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }
        );
      });
    };

    const set = (row, open, animate = true) => {
      const panel = row.querySelector('.dig');
      row.querySelector('.p__btn').setAttribute('aria-expanded', String(open));
      row.classList.toggle('is-open', open);
      if (open) {
        panel.removeAttribute('hidden');
        if (animate) dig(panel);
      } else {
        // closed layers stay findable: find-in-page opens them through beforematch
        panel.setAttribute('hidden', 'until-found');
      }
    };

    const sync = () => {
      if (!all) return;
      const allOpen = rows.every((row) => row.classList.contains('is-open'));
      all.classList.toggle('is-all', allOpen);
      allLabel.textContent = allOpen ? 'Back to the surface' : `Dig all ${rows.length === 5 ? 'five' : rows.length}`;
    };

    rows.forEach((row) => {
      const button = row.querySelector('.p__btn');
      const panel = row.querySelector('.dig');
      set(row, row.classList.contains('is-open'), false);
      button.addEventListener('click', () => {
        set(row, !row.classList.contains('is-open'));
        sync();
      });
      panel.addEventListener('beforematch', () => {
        set(row, true, false);
        sync();
      });
      const up = row.querySelector('[data-up]');
      if (up) {
        up.hidden = false;
        up.addEventListener('click', () => {
          set(row, false, false);
          sync();
          row.scrollIntoView({ block: 'start', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
          button.focus({ preventScroll: true });
        });
      }
    });

    if (all) {
      all.hidden = false;
      all.addEventListener('click', () => {
        const open = !all.classList.contains('is-all');
        rows.forEach((row) => {
          if (row.classList.contains('is-open') !== open) set(row, open, open);
        });
        sync();
      });
    }

    // a link to #admirals (from How I work, a case page or a shared URL) digs that project
    const fromHash = () => {
      let id = '';
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const row = id && rows.find((r) => r.id === id);
      if (!row) return;
      if (!row.classList.contains('is-open')) {
        set(row, true, false);
        sync();
      }
      row.scrollIntoView({ block: 'start' });
    };
    window.addEventListener('hashchange', fromHash);
    if (window.location.hash) fromHash();
    sync();
  });

  /* ---------- Copy email: works even where mailto has no mail app behind it ---------- */
  document.querySelectorAll('[data-copy]').forEach((button) => {
    if (!navigator.clipboard && !document.queryCommandSupported?.('copy')) return;
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
})();
