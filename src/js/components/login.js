import axios from "axios";
import inputElement from "../elements/inputText.js";
import inputEmailElement from "../elements/inputEmail.js";

function generateHtml() {
  const inputFields = `
        ${inputElement("firstName", "First Name")}
        ${inputElement("lastName", "Last Name")}
        ${inputEmailElement("email", "Email")}
    `;
  return inputFields;
}

export default loginComponent;
