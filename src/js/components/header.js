import "../../styles/header.scss";
import headingOne from "../elements/headingOne.js";
import paragraph from "../elements/paragraph.js";

function header(parentId, heading, text) {
  const componentHtml = `
        <header id="pageHeader" class="pageHeader">
            ${headingOne(heading)}
            ${paragraph(text)}
        </header>
    `;
  document
    .getElementById(parentId)
    .insertAdjacentHTML("beforeend", componentHtml);
}

export default header;
