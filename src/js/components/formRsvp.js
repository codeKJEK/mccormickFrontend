import axios from "axios";
import inputTextRequired from "../elements/inputTextRequired.js";
import inputTextarea from "../elements/inputTextarea.js";
import inputNumber from "../elements/inputNumber.js";
import inputEmail from "../elements/inputEmail.js";
import inputRadio from "../elements/inputRadio.js";
import buttonSubmit from "../elements/buttonSubmit.js";
import paragraph from "../elements/paragraph.js";
import legend from "../elements/legend.js";
import "../../styles/formRsvp.scss";

function formRsvp(id, parentId) {
  const componentHtml = `
    <form id="${id}" class="${id}Form">
      <fieldset class="userFieldset" id="userFieldset">
        ${legend("Contact Information")}
        ${paragraph(
          `Please enter your contact information below. <br>Fields marked with <span class="red">*</span> are required. `
        )}
        <div class="inputDivider flex">
        <div>
        ${inputTextRequired(
          "firstName",
          `First Name<span class="red">*</span>`
        )}
        </div>
        <div>
        ${inputTextRequired("lastName", `Last Name<span class="red">*</span>`)}
        </div>
        </div>
        ${paragraph(
          "If you would like to receive updates on the event please enter your email address below"
        )}
        <div class="inputDivider">
        ${inputEmail("email", "Email")}
        </div>
      </fieldset>
      <fieldset class="picnicFieldset">
      ${legend("Picnic RSVP")}
        ${paragraph(
          "Will you be attending the picnic on Saturday June 24, 2023 9:00 AM at Johnson Springview Park"
        )}
        <div class="inputDivider">
        ${inputRadio("picnic", "RSVP To Picnic")}
        ${inputNumber("picnicNumber", "Number Attending Picnic")}
        </div>
        </fieldset>
        <fieldset class="BowlingFieldset">
        ${legend("Bowling RSVP")}
        ${paragraph(
          "Are you interested in going bowling Friday June 23, 2023. We will not reserve the lanes until we have a head count! Please respond no later than 3/10/23."
        )}
        <div class="inputDivider">
        ${inputRadio("bowling", "RSVP To Bowling")}
        ${inputNumber("bowlingNumber", "Number Attending Bowling")}
        </div>
        </fieldset>
        <fieldset class="hotelFieldset">
        ${legend("Request A Hotel")}
        ${paragraph(
          "Hotel is in planning stages so we need a count to know how many rooms to hold. More information on hotels will be coming soon."
        )}
        <div class="inputDivider">
        ${inputRadio("hotel", "Request A Hotel")}
        ${inputNumber("hotelNumber", "Number Requesting Hotel")}
        </div>
        </fieldset>
        <fieldset class="commentFieldset">
        ${legend("Comments Section")}
        ${paragraph(
          "<b>Optional:</b> Please include a list of family members that will be accompanying you to the events along with any other comments."
        )}
        
        ${inputTextarea("comment", "Comments")}
        
      </fieldset>
      <div class="submitContainer">
      ${buttonSubmit(`${id}Submit`, "Submit RSVP")}
      </div>
      
      </form> 
      <div id="successMsg">
    <p>Thank You! Your RSVP has been submitted successfully.</p>
    </div>
    
    `;
  document
    .getElementById(parentId)
    .insertAdjacentHTML("beforeend", componentHtml);
  initializePage();

  const memberId = localStorage.getItem("memberId");
  const rsvpStatus = localStorage.getItem("rsvp");
  const formComponent = document.getElementById(id);
  if (rsvpStatus == "true") {
    console.log(rsvpStatus);
    formComponent.style.display = "none";
    document.getElementById("successMsg").style.display = "block";
  }
  if (memberId != null && memberId != "" && memberId.length > 20) {
    document.getElementById("userFieldset").style.display = "none";
    document.getElementById("userFieldset").innerHTML = "";
    console.log("true");
  }
  formComponent.addEventListener("submit", (event) => {
    event.preventDefault();
    let data;
    let url;
    if (memberId != null && memberId != "" && memberId.length > 20) {
      data = {
        picnic: processRadio("picnic"),
        picnicNum: document.getElementById("picnicNumber").value,
        bowling: processRadio("bowling"),
        bowlingNum: document.getElementById("bowlingNumber").value,
        hotel: processRadio("hotel"),
        hotelNum: document.getElementById("hotelNumber").value,
        comment: document.getElementById("comment").value,
      };
      url = `https://mccormickbackend.herokuapp.com/members/${memberId}`;
    } else {
      url = "https://mccormickbackend.herokuapp.com/members";
      data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        picnic: processRadio("picnic"),
        picnicNum: document.getElementById("picnicNumber").value,
        bowling: processRadio("bowling"),
        bowlingNum: document.getElementById("bowlingNumber").value,
        hotel: processRadio("hotel"),
        hotelNum: document.getElementById("hotelNumber").value,
        comment: document.getElementById("comment").value,
      };
    }

    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    if (memberId != null && memberId != "" && memberId.length > 20) {
      axios.patch(url, data, config).then((res) => {
        document.getElementById("successMsg").style.display = "block";
        localStorage.setItem("rsvp", true);
      });
    } else {
      axios.post(url, data, config).then((res) => {
        document.getElementById("successMsg").style.display = "block";
        localStorage.setItem("rsvp", true);
        localStorage.setItem("memberId", res.data._id);
      });
    }
  });

  function processRadio(elementName) {
    const radioElements = document.getElementsByName(elementName);
    let radioValue = "";
    radioElements.forEach((element) => {
      if (element.checked) {
        radioValue = element.value;
      }
    });
    return radioValue;
  }

  function initializePage() {
    if (memberId != null && memberId != "" && memberId.length > 20) {
      document.getElementById("userFieldset").style.display = "none";
      url = `https://mccormickbackend.herokuapp.com/members/${memberId}`;
    }
  }
}

export default formRsvp;
