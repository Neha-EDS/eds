export default function decorate(block) {
  // 1. Read content from the authored block
  const rows = [...block.children];

  const message = rows[0]?.textContent.trim();
  const link = rows[1]?.querySelector('a');

  // 2. Create banner HTML
  block.innerHTML = `
    <div class="announcement-banner-content">
      <span>${message}</span>
      ${link ? `<a href="${link.href}">${link.textContent}</a>` : ''}
      <button class="close-banner" aria-label="Close announcement">
        &times;
      </button>
    </div>
  `;

  // 3. Select the close button
  const closeButton = block.querySelector('.close-banner');

  // 4. Remove banner when clicked
  closeButton.addEventListener('click', () => {
    block.remove();
  });
}
