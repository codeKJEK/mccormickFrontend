import "../../styles/input.scss";

function inputRadioElement(id, text) {
  const elementHtml = `
            <label for="${id}">${text}</label>
            <div class="radioDivider">
                <input type="radio" value="true" name="${id}">Yes</input>
                <input type="radio" value="false" name="${id}" checked>No</input>
            </div>
            
    `;
  return elementHtml;
}

export default inputRadioElement;
