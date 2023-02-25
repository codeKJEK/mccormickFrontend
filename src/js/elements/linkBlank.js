import "../../styles/element/link.scss";

function linkBlankElement(destination, text) {
  const elementHtml = `
    <a href="${destination}" target="_blank" class="link">${text}</a>
    `;
  return elementHtml;
}

export default linkBlankElement;
