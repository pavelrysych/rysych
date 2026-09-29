(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Dot-matrix renderer: a real 5×7 dot grid, one circle per lit dot ---------- */
  const GLYPHS = {
    '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
    '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
    '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
    '3': ['11111', '00010', '00100', '00010', '00001', '10001', '01110'],
    '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
    '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
    '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
    '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
    '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
    '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
    A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
    B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
    C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
    D: ['11100', '10010', '10001', '10001', '10001', '10010', '11100'],
    E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
    F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
    G: ['01110', '10001', '10000', '10111', '10001', '10001', '01111'],
    H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
    I: ['01110', '00100', '00100', '00100', '00100', '00100', '01110'],
    J: ['00111', '00010', '00010', '00010', '00010', '10010', '01100'],
    K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
    L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
    M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
    N: ['10001', '10001', '11001', '10101', '10011', '10001', '10001'],
    O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
    P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
    Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
    R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
    S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
    T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
    U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
    V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
    W: ['10001', '10001', '10001', '10101', '10101', '10101', '01010'],
    X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
    Y: ['10001', '10001', '10001', '01010', '00100', '00100', '00100'],
    Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
    '-': ['00000', '00000', '00000', '11111', '00000', '00000', '00000'],
    '−': ['00000', '00000', '00000', '11111', '00000', '00000', '00000'],
    '×': ['00000', '10001', '01010', '00100', '01010', '10001', '00000'],
    '%': ['11000', '11001', '00010', '00100', '01000', '10011', '00011'],
    '$': ['00100', '01111', '10100', '01110', '00101', '11110', '00100'],
    '+': ['00000', '00100', '00100', '11111', '00100', '00100', '00000'],
    '/': ['00001', '00010', '00010', '00100', '01000', '01000', '10000'],
    '.': ['00', '00', '00', '00', '00', '11', '11'],
    ':': ['0', '0', '1', '0', '1', '0', '0'],
    ' ': ['000', '000', '000', '000', '000', '000', '000'],
  };
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const drawDotMatrix = (el) => {
    const text = el.textContent.trim().toUpperCase();
    const chars = [...text].filter((ch) => GLYPHS[ch]);
    if (!chars.length) return;

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    let x = 0;
    let count = 0;
    chars.forEach((ch, index) => {
      const rows = GLYPHS[ch];
      rows.forEach((row, y) => {
        [...row].forEach((bit, cx) => {
          if (bit !== '1') return;
          const dot = document.createElementNS(SVG_NS, 'circle');
          dot.setAttribute('cx', x + cx + 0.5);
          dot.setAttribute('cy', y + 0.5);
          dot.setAttribute('r', 0.4);
          dot.style.setProperty('--d', `${Math.round(Math.random() * 520)}ms`);
          svg.appendChild(dot);
          count += 1;
        });
      });
      x += rows[0].length + (index < chars.length - 1 ? 1 : 0);
    });
    svg.setAttribute('viewBox', `0 0 ${x} 7`);

    const label = document.createElement('span');
    label.className = 'dm__text';
    label.textContent = el.textContent;
    el.textContent = '';
    el.append(label, svg);
    el.classList.add('is-drawn');
    return count;
  };

  const matrices = [...document.querySelectorAll('[data-dm]')];
  matrices.forEach(drawDotMatrix);

  // Light each display dot by dot the first time it enters view; visible by default without JS or motion.
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    const lightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-arming');
        entry.target.classList.add('is-lit');
        lightObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    matrices.forEach((el) => {
      if (el.closest('[hidden]')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) el.classList.add('is-arming');
      lightObserver.observe(el);
    });
  }

  /* ---------- Hero depth: glass planes drift apart and the portrait racks out of focus ---------- */
  const hero = document.querySelector('.hero');
  if (hero) {
    let ticking = false;
    const updateDepth = () => {
      ticking = false;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      hero.style.setProperty('--depth', progress.toFixed(3));
      hero.style.setProperty('--rack', progress.toFixed(3));
    };
    const onScroll = () => {
      if (reduceMotion.matches || ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateDepth);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateDepth();
  }

  /* ---------- Board: a row lights its span on the timeline and racks its key art into focus ---------- */
  const board = document.querySelector('[data-board]');
  if (board) {
    const span = board.querySelector('[data-span]');
    const arts = [...document.querySelectorAll('.work__art img')];
    const START = 2017;
    const RANGE = 10;
    const idle = arts.find((img) => img.dataset.art === 'admirals');
    const showArt = (key) => {
      arts.forEach((img) => {
        img.classList.toggle('is-active', img.dataset.art === key);
        img.classList.toggle('is-idle', !key && img === idle);
      });
    };
    showArt(null);

    const activate = (row) => {
      showArt(row.dataset.row);
      const from = Number.parseFloat(row.dataset.from);
      const to = Number.parseFloat(row.dataset.to);
      if (Number.isFinite(from) && Number.isFinite(to)) {
        span.style.setProperty('--from', ((from - START) / RANGE).toFixed(4));
        span.style.setProperty('--len', ((to - from) / RANGE).toFixed(4));
        span.classList.add('is-on');
      } else {
        span.classList.remove('is-on');
      }
    };
    // At rest the board shows what is boarding now: Admirals' span lit, its art as the idle plane.
    const nowRow = board.querySelector('.board-row[data-row="admirals"]');
    const reset = () => {
      if (nowRow) activate(nowRow);
      arts.forEach((img) => {
        img.classList.remove('is-active');
        img.classList.toggle('is-idle', img === idle);
      });
    };
    reset();

    board.querySelectorAll('.board-row').forEach((row) => {
      row.addEventListener('pointerenter', () => activate(row));
      row.addEventListener('focus', () => activate(row));
    });
    board.addEventListener('pointerleave', reset);
    board.addEventListener('focusout', (event) => {
      if (!board.contains(event.relatedTarget)) reset();
    });
  }

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
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel?.querySelectorAll('[data-dm].is-drawn').forEach((el) => {
        if (reduceMotion.matches) return;
        el.classList.remove('is-lit', 'is-arming');
        void el.offsetWidth;
        el.classList.add('is-lit');
      });
      if (focus) tab.focus();
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
