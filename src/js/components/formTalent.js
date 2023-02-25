import axios from "axios";
import "../../styles/formTalent.scss";
import legend from "../elements/legend.js";
import paragraph from "../elements/paragraph.js";
import inputTextRequired from "../elements/inputTextRequired.js";
import inputEmail from "../elements/inputEmail.js";
import inputRadio from "../elements/inputRadio.js";
import inputTextarea from "../elements/inputTextarea.js";
import buttonSubmit from "../elements/buttonSubmit.js";

function formTalent(parentId) {
  const componentHtml = `
    <form id="talentForm" class="talentForm">
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
            <fieldset class="userFieldset" id="userFieldset">
                ${legend("Kids Got Talent")}

                ${inputRadio("talent", "Sign Kids Up?")}
                
                ${inputTextarea("talentComment", "Child or Act Name")}

                </fieldset>
                <div class="submitContainer">
                ${buttonSubmit("itemSubmit", "Submit Item")}
                </div>
            </form>
        </section>
        <div id="successMsg">
    <p>Thank You! Your Kids Got Talent has been submitted successfully.</p>
    </div>
    `;
  document
    .getElementById(parentId)
    .insertAdjacentHTML("beforeend", componentHtml);

  const memberId = localStorage.getItem("memberId");
  const talentStatus = localStorage.getItem("talent");
  const formComponent = document.getElementById("talentForm");
  if (talentStatus == "true") {
    console.log(talentStatus);
    formComponent.style.display = "none";
    document.getElementById("successMsg").style.display = "block";
  }
  if (memberId != null && memberId != "" && memberId.length > 20) {
    document.getElementById("userFieldset").style.display = "none";
    document.getElementById("userFieldset").innerHTML = "";
  }
  formComponent.addEventListener("submit", (event) => {
    event.preventDefault();
    let data;
    let url;
    if (memberId != null && memberId != "" && memberId.length > 20) {
      data = {
        talent: processRadio("talent"),
        talentComment: document.getElementById("talentComment").value,
      };
      url = `https://mccormickbackend.herokuapp.com/members/${memberId}`;
    } else {
      url = "https://mccormickbackend.herokuapp.com/members";
      data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        talent: processRadio("talent"),
        talentComment: document.getElementById("talentComment").value,
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
        localStorage.setItem("talent", true);

        console.log(res.data);
      });
    } else {
      axios.post(url, data, config).then((res) => {
        document.getElementById("successMsg").style.display = "block";
        localStorage.setItem("talent", true);
        localStorage.setItem("memberId", res.data._id);
      });
    }
    // console.log(res.data);
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
}

export default formTalent;
