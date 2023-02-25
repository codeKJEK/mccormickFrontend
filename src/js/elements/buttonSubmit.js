import "../../styles/button.scss";

function buttonSubmitElement(id, text) {
  const elementHtml = `
    <button type="submit" id="${id}" class="button">${text}</button>
    `;
  return elementHtml;
}

export default buttonSubmitElement;
