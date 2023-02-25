import "../../styles/footer.scss";
import headingThree from "../elements/headingThree.js";
import paragraph from "../elements/paragraph.js";
import link from "../elements/link.js";

function footer(parentId, heading, pText, destination, linkText) {
  const componentHtml = `
        <div class="container">
            ${headingThree(heading)}
            ${paragraph(pText)}
            ${link(destination, linkText)}
        </div>
    `;
  document
    .getElementById(parentId)
    .insertAdjacentHTML("beforeend", componentHtml);
}

export default footer;
