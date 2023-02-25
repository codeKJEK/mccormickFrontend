import "../../styles/element/button.scss";

function buttonElement(id, text) {
  const elementHtml = `
    <button id="${id}" class="button">${text}</button>
    `;
  return elementHtml;
}

export default buttonElement;
