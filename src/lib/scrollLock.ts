/**
 * Stop the page scrolling behind the menu or the opening screen, without touching
 * the scrollbar: hiding it would make the page wider and the layout jump. Instead,
 * wheel, touch and keyboard scrolling are blocked, except inside an element marked
 * with data-scroll-allow that has room to scroll (such as a long menu on a phone).
 */
let locks = 0;

const KEYS = new Set([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"]);

function insideScrollable(target: EventTarget | null) {
  const el = target instanceof Element ? target.closest<HTMLElement>("[data-scroll-allow]") : null;
  return !!el && el.scrollHeight > el.clientHeight;
}

function onWheelOrTouch(e: Event) {
  if (!insideScrollable(e.target)) e.preventDefault();
}

function onKey(e: KeyboardEvent) {
  if (!KEYS.has(e.key)) return;
  const t = e.target;
  if (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  if (!insideScrollable(t)) e.preventDefault();
}

export function lockScroll() {
  locks += 1;
  if (locks > 1) return;
  window.addEventListener("wheel", onWheelOrTouch, { passive: false });
  window.addEventListener("touchmove", onWheelOrTouch, { passive: false });
  window.addEventListener("keydown", onKey);
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks > 0) return;
  window.removeEventListener("wheel", onWheelOrTouch);
  window.removeEventListener("touchmove", onWheelOrTouch);
  window.removeEventListener("keydown", onKey);
}
