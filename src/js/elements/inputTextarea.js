import "../../styles/input.scss";

function inputTextarea(id, text) {
  const elementHtml = `
  <label for="${id}">${text}:</label>
  <textarea id="${id}" name="${id}" rows="4" placeholder="Example: Jack McCormick, Jill McCormick, John McCormick."></textarea>
    `;
  return elementHtml;
}

export default inputTextarea;
