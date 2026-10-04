// Apparition des sections au scroll.
// La classe "js" conditionne l'état initial en CSS : sans JavaScript,
// tout le contenu reste visible.
document.documentElement.classList.add("js");

const sections = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  sections.forEach((section) => section.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
}
