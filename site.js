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
