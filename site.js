document.querySelectorAll('.mobile-nav').forEach((menu) => {
  // the trigger says what it will do next
  const trigger = menu.querySelector('summary');
  menu.addEventListener('toggle', () => { if (trigger) trigger.textContent = menu.open ? 'Close' : 'Menu'; });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.open = false;
    });
  });

  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
});

// A tap anywhere outside the open menu closes it.
document.addEventListener('pointerdown', (event) => {
  document.querySelectorAll('.mobile-nav[open]').forEach((menu) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
});

// iOS only applies :active styles when a touch listener exists.
document.addEventListener('touchstart', () => {}, { passive: true });

// Phones: the header gains a frosted band once the page moves, so text never runs under the pills.
// It stays put: hiding it on scroll fought in-app browsers (Telegram) whose own bars collapse while scrolling.
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  let queued = false;
  const syncHeader = () => {
    queued = false;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(syncHeader);
  }, { passive: true });
  syncHeader();
}

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-click-to-play]').forEach((player) => {
  const video = player.querySelector('video');
  const playButton = player.querySelector('.case-player__play');
  if (!video || !playButton) return;

  let hasStarted = false;
  playButton.hidden = false;
  // one play control before the first play; native controls take over once it runs
  video.controls = false;
  video.addEventListener('click', () => {
    if (!hasStarted) playButton.click();
  });
  video.addEventListener('playing', () => {
    hasStarted = true;
    video.controls = true;
    playButton.hidden = true;
    playButton.disabled = false;
  });
  playButton.addEventListener('click', async () => {
    playButton.disabled = true;
    try {
      await video.play();
    } catch {
      playButton.disabled = false;
    }
  });
  video.addEventListener('error', () => {
    video.controls = true;
    playButton.disabled = false;
    playButton.hidden = hasStarted;
  });
});

// Posters of films far down the page load only as the film comes near, so they don't compete with the first screen.
document.querySelectorAll('video[data-poster]').forEach((video) => {
  const reveal = () => {
    video.poster = video.dataset.poster;
    video.removeAttribute('data-poster');
  };
  if (!('IntersectionObserver' in window)) {
    reveal();
    return;
  }
  new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    reveal();
  }, { rootMargin: '800px 0px' }).observe(video);
});

document.querySelectorAll('video[data-case-autoplay]').forEach((video) => {
  const lazy = video.hasAttribute('data-case-lazy');
  let nearViewport = !lazy;
  const syncPlayback = () => {
    const shouldPlay = !motionPreference.matches && nearViewport && !document.hidden;
    video.autoplay = shouldPlay;
    if (!shouldPlay) {
      video.pause();
      return;
    }
    const deferredSources = video.querySelectorAll('source[data-src]');
    if (deferredSources.length) {
      deferredSources.forEach((source) => {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
      });
      video.load();
    }
    video.play().catch((error) => {
      // iOS Low Power Mode refuses autoplay: hand the viewer the controls instead of a dead poster
      // (card previews marked data-quiet stay on their poster: the whole card is a link)
      if (error && error.name === 'NotAllowedError' && !video.hasAttribute('data-quiet')) video.controls = true;
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      nearViewport = entry.isIntersecting;
      syncPlayback();
    }, { rootMargin: '200px 0px' });
    observer.observe(video);
  } else {
    nearViewport = true;
  }
  syncPlayback();
  motionPreference.addEventListener('change', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
});

document.querySelectorAll('video[data-portrait-scrub]').forEach((video) => {
  const surface = video.closest('.hero__image');
  const hero = video.closest('.hero');
  if (!surface || !hero) return;

  const mobilePortrait = window.matchMedia('(max-width: 900px)');
  let portraitViewportWidth = null;
  let portraitResizeTimer = null;
  const syncPortraitHeight = () => {
    const width = window.innerWidth;
    if (width === portraitViewportWidth) return;
    portraitViewportWidth = width;
    surface.style.removeProperty('--portrait-mobile-height');
    if (mobilePortrait.matches) {
      const headerHeight = document.querySelector('.site-header--home')?.getBoundingClientRect().height || 0;
      const visualViewport = window.visualViewport;
      const viewportHeight = visualViewport?.scale === 1
        ? Math.min(window.innerHeight, visualViewport.height)
        : window.innerHeight;
      // Measure the viewport, never the media: its intrinsic size must not become the height lock.
      surface.style.setProperty('--portrait-mobile-height', `${Math.max(240, viewportHeight - headerHeight)}px`);
    }
  };
  syncPortraitHeight();
  window.addEventListener('resize', () => {
    if (window.innerWidth === portraitViewportWidth && portraitResizeTimer === null) return;
    window.clearTimeout(portraitResizeTimer);
    // Let both dimensions settle after rotation, without reacting to browser chrome alone.
    portraitResizeTimer = window.setTimeout(() => {
      portraitResizeTimer = null;
      syncPortraitHeight();
    }, 150);
  });

  let progress = 0;
  let activePointer = null;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let pointerScrubbing = false;
  let hasInput = false;
  const lastFrameDuration = 1 / 30;

  video.autoplay = false;
  video.pause();

  // The 3.4 MB scrub film loads only when it can be used: on first touch, hover or focus,
  // or once the page is idle on a mouse-and-keyboard screen.
  const warmFilm = () => {
    if (video.dataset.warmed) return;
    video.dataset.warmed = 'true';
    video.preload = 'auto';
    video.load();
  };
  hero.addEventListener('pointerenter', warmFilm, { once: true });
  surface.addEventListener('pointerdown', warmFilm, { once: true });
  surface.addEventListener('focus', warmFilm, { once: true });
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const whenIdle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1500));
    if (document.readyState === 'complete') whenIdle(warmFilm);
    else window.addEventListener('load', () => whenIdle(warmFilm), { once: true });
  }

  const isVisible = () => {
    const rect = hero.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };

  const seekToInput = () => {
    if (!hasInput || motionPreference.matches || !isVisible()) return;
    if (video.readyState < 2 || !Number.isFinite(video.duration) || video.duration <= 0 || video.seeking) return;

    const lastTime = Math.max(0, video.duration - lastFrameDuration);
    const requestedStart = Number.parseFloat(video.dataset.scrubStart);
    const requestedEnd = Number.parseFloat(video.dataset.scrubEnd);
    const start = Number.isFinite(requestedStart) ? Math.min(lastTime, Math.max(0, requestedStart)) : 0;
    const end = Number.isFinite(requestedEnd) ? Math.min(lastTime, Math.max(start, requestedEnd)) : lastTime;
    const target = start + progress * (end - start);
    if (Math.abs(video.currentTime - target) < lastFrameDuration / 2) return;
    video.currentTime = target;
  };

  const setProgress = (nextProgress) => {
    if (motionPreference.matches || !isVisible()) return;
    progress = Math.min(1, Math.max(0, nextProgress));
    hasInput = true;
    seekToInput();
  };

  const followPointer = (event, element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width > 0) setProgress((event.clientX - rect.left) / rect.width);
  };

  hero.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'mouse') followPointer(event, hero);
  });

  surface.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' || !event.isPrimary || motionPreference.matches || activePointer !== null) return;
    activePointer = event.pointerId;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    pointerScrubbing = false;
  });

  surface.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointer) return;
    if (!pointerScrubbing) {
      const horizontalDistance = Math.abs(event.clientX - pointerStartX);
      const verticalDistance = Math.abs(event.clientY - pointerStartY);
      if (verticalDistance >= 8 && verticalDistance >= horizontalDistance) {
        endDrag(event);
        return;
      }
      if (horizontalDistance < 8 || horizontalDistance <= verticalDistance) return;
      pointerScrubbing = true;
      surface.setPointerCapture(event.pointerId);
    }
    followPointer(event, surface);
  });

  const endDrag = (event) => {
    if (event.pointerId !== activePointer) return;
    activePointer = null;
    pointerScrubbing = false;
    if (surface.hasPointerCapture(event.pointerId)) surface.releasePointerCapture(event.pointerId);
  };
  surface.addEventListener('pointerup', endDrag);
  surface.addEventListener('pointercancel', endDrag);
  surface.addEventListener('lostpointercapture', endDrag);

  surface.addEventListener('keydown', (event) => {
    if (motionPreference.matches) return;
    const actions = {
      ArrowLeft: () => progress - 0.05,
      ArrowRight: () => progress + 0.05,
      Home: () => 0,
      End: () => 1,
    };
    if (!Object.hasOwn(actions, event.key)) return;
    event.preventDefault();
    setProgress(actions[event.key]());
  });

  // Readiness and seek completion apply the most recent pointer position only.
  ['loadedmetadata', 'loadeddata', 'canplay', 'seeked'].forEach((eventName) => {
    video.addEventListener(eventName, seekToInput);
  });

  motionPreference.addEventListener('change', () => {
    video.pause();
    hasInput = false;
    if (activePointer !== null && surface.hasPointerCapture(activePointer)) surface.releasePointerCapture(activePointer);
    activePointer = null;
    pointerScrubbing = false;
  });

  surface.dataset.portraitReady = 'true';
});
