import "../../styles/input.scss";

function inputEmailElement(id, text) {
  const elementHtml = `
    <label for="${id}">${text}:</label>
    <input type="email" id="${id}">
    `;
  return elementHtml;
}

export default inputEmailElement;
