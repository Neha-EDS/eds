export default function decorate(block) {
  const row = block.children[0];
  const cells = [...row.children];

  const heading = cells[0].textContent.trim();
  const description = cells[1].textContent.trim();
  const link = cells[2].querySelector('a');
  const image = cells[3].querySelector('img');

  block.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <h1>${heading}</h1>
        <p>${description}</p>
        ${link ? `<a href="${link.href}">${link.textContent}</a>` : ''}
      </div>
      <div class="hero-image">
        ${image ? `<img src="${image.src}" alt="${image.alt}">` : ''}
      </div>
    </div>
  `;
}
