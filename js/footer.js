export function updateFooterYear() {
  const footers = document.querySelectorAll(".site-footer");
  footers.forEach((footer) => {
    const html = footer.innerHTML;
    const updated = html.replace(/©\s+\d{4}/, `© ${new Date().getFullYear()}`);
    footer.innerHTML = updated;
  });
}
