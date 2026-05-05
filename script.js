const navLinks = [...document.querySelectorAll(".nav a")];
const modal = document.querySelector("#contact-modal");
const openContactButtons = [...document.querySelectorAll("[data-open-contact]")];
const closeContactButtons = [...document.querySelectorAll("[data-close-contact]")];
const firstModalField = document.querySelector("#sender-email");
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveLink(visible.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.08, 0.2, 0.4],
    },
  );

  observedSections.forEach((section) => observer.observe(section));
}

const openContactModal = () => {
  if (!modal) return;

  modal.hidden = false;
  document.body.classList.add("body-modal-open");
  firstModalField?.focus();
};

const closeContactModal = () => {
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("body-modal-open");
  openContactButtons[0]?.focus();
};

openContactButtons.forEach((button) => {
  button.addEventListener("click", openContactModal);
});

closeContactButtons.forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeContactModal();
  }
});
