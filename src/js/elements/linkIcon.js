import "../../styles/link.scss";

function linkIconElement(destination, text, icon) {
  const elementHtml = `
    <a href="${destination}" class="linkIcon">
        ${icon}
        ${text}
    </a>
    `;
  return elementHtml;
}

export default linkIconElement;
