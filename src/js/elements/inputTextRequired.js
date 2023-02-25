import "../../styles/input.scss";

function inputElement(id, text) {
  const elementHtml = `
  <label for="${id}">${text}:</label>
  <input type="text" id="${id}" name="${id}" required>
    `;
  return elementHtml;
}

export default inputElement;
