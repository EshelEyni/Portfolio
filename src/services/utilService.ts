export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function scrollToElementById(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  const target = e.target as HTMLAnchorElement;
  const href = target.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const id = href.substring(1);
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}
