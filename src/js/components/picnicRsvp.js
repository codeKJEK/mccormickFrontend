import axios from "axios";
import inputSelectElement from "../../elements/inputSelect.js";
import inputElement from "../../elements/input.js";
import "../../../styles/rsvp.scss";

function generateHtml() {
  const inputFields = `
        ${inputSelectElement("guestNumber", "How Many Other Guests")}
    `;
  return inputFields;
}

function picnicComponent(formId) {
  const newHtml = `
        <form id="${formId}">
            ${generateHtml()}
            <fieldset id="fieldset1">
                <legend>Guest 1</legend>
                ${inputElement("g1First", "First Name")}
                ${inputElement("g1Last", "Last Name")}
            </fieldset>
            <fieldset id="fieldset2">
                <legend>Guest 2</legend>
                ${inputElement("g2First", "First Name")}
                ${inputElement("g2Last", "Last Name")}
            </fieldset>
            <fieldset id="fieldset3">
                <legend>Guest 3</legend>
                ${inputElement("g3First", "First Name")}
                ${inputElement("g3Last", "Last Name")}
            </fieldset>
            <fieldset id="fieldset4">
                <legend>Guest 4</legend>
                ${inputElement("g4First", "First Name")}
                ${inputElement("g4Last", "Last Name")}
            </fieldset>
            <fieldset id="fieldset5">
                <legend>Guest 5</legend>
                ${inputElement("g5First", "First Name")}
                ${inputElement("g5Last", "Last Name")}
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `;
  document.getElementById("componentOne").innerHTML = newHtml;
}

export default picnicComponent;
