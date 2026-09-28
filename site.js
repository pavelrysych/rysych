document.querySelectorAll('.mobile-nav').forEach((menu) => {
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

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('video[data-case-autoplay]').forEach((video) => {
  const syncPlayback = (reduceMotion) => {
    video.autoplay = !reduceMotion;
    if (reduceMotion) video.pause();
    else video.play().catch(() => {});
  };

  syncPlayback(motionPreference.matches);

  motionPreference.addEventListener('change', (event) => {
    syncPlayback(event.matches);
  });
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
      // Browser chrome changes height while scrolling; only a new width reframes the portrait.
      surface.style.setProperty('--portrait-mobile-height', `${surface.getBoundingClientRect().height}px`);
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
