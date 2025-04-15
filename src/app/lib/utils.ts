export function scrollTo(id: string, offset?: number) {
  const element = document.getElementById(id);
  const scrollOffset = offset || 120;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element!.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - scrollOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
