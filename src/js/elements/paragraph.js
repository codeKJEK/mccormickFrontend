import "../../styles/paragraph.scss";

function paragraph(text) {
  const elementHtml = `
    <p>${text}</p>
    `;
  return elementHtml;
}

export default paragraph;
