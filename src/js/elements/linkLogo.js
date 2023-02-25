import "../../styles/link.scss";

function linkLogo(destination, text) {
  const elementHtml = `
    <a href="${destination}" class="brandLogo">${text}</a>
    `;
  return elementHtml;
}

export default linkLogo;
