import "../../styles/link.scss";

function linkElement(destination, text) {
  const elementHtml = `
    <a href="${destination}">${text}</a>
    `;
  return elementHtml;
}

export default linkElement;
