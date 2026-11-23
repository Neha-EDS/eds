export default function decorate(block) {

  // 1. Get the first row
  const row = block.children[0];

  // 2. Get all four columns
  const cells = [...row.children];

  // 3. Read the authored content
  const heading = cells[0].textContent.trim();
  const description = cells[1].textContent.trim();
  const link = cells[2].querySelector('a');
  const image = cells[3].querySelector('img');

  // 4. Create the Hero HTML
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
