export default function decorate(block) {
  const rows = [...block.children];

  const message = rows[0]?.textContent.trim();
  const link = rows[1]?.querySelector('a');

  block.innerHTML = `
    <div class="announcement-banner-content">
      <span>${message}</span>
      ${link ? `<a href="${link.href}">${link.textContent}</a>` : ''}
    </div>
  `;
}

