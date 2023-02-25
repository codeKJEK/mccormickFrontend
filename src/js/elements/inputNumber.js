import "../../styles/input.scss";

function inputElement(id, text) {
  const elementHtml = `
  <label for="${id}">${text}:</label>
  <input type="number" id="${id}" name="${id}">
    `;
  return elementHtml;
}

export default inputElement;
