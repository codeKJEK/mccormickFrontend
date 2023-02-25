import "../../styles/legend.scss";

function legend(text) {
  const elementHtml = `
        <legend>${text}</legend>
    `;
  return elementHtml;
}

export default legend;
