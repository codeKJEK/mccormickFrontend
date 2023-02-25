import axios from "axios";
import "../../styles/menu.scss";
import inputTextarea from "../elements/inputTextarea.js";
import buttonSubmit from "../elements/buttonSubmit.js";
import legend from "../elements/legend.js";
import paragraph from "../elements/paragraph.js";
import inputTextRequired from "../elements/inputTextRequired.js";
import inputEmail from "../elements/inputEmail.js";

function menu(parentId) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  let url = "https://mccormickbackend.herokuapp.com/menu";
  axios
    .get(url, config)
    .then((res) => {
      let menuRows = "";
      let menuOptions = "";
      const menuItems = res.data;
      menuItems.forEach((item) => {
        let itemRow = `
        <tr>
            <td>${item.itemName}</td>
            <td class="center">${item.quantity}</td>
        </tr>
        `;
        menuRows = menuRows + itemRow;
        let itemOption = `
        <option value="${item._id}" data-quantity="${item.quantity}">${item.itemName}</option>
      `;
        menuOptions = menuOptions + itemOption;
      });
      const componentHtml = `
        <section class="menu">
        
            <table>
            <thead>
            <tr>
                <th>Item Name:</th>
                <th class="center">Amount Needed:</th>
            </tr>
            </thead>
                <tbody>
                    ${menuRows}
                </tbody>
            </table>
            <form id="menuForm">
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
            <fieldset class="menuFieldset" id="menuFieldset">
                ${legend("Select an Item")}
              
                <label class="labelElement" for="menuSelect">Please Select A Item:</label>
                <select name="menuSelect" class="selectElement" id=menuSelect>
                    ${menuOptions}
                </select>
                ${inputTextarea("itemComment", "Comment")}
                
                </fieldset>
                <div class="submitContainer">
                ${buttonSubmit("itemSubmit", "Submit Item")}
                </div>
            </form>
            <div id="successMsg">
    <p>Thank You! Your Menu Item has been submitted successfully.</p>
    </div>
        </section>
        
    `;
      document
        .getElementById(parentId)
        .insertAdjacentHTML("beforeend", componentHtml);
    })
    .then(() => {
      const memberId = localStorage.getItem("memberId");
      const menuStatus = localStorage.getItem("menu");
      const menuForm = document.getElementById("menuForm");
      if (menuStatus == "true") {
        console.log(menuStatus);
        menuForm.style.display = "none";
        document.getElementById("successMsg").style.display = "block";
      }
      if (memberId != null && memberId != "" && memberId.length > 20) {
        document.getElementById("userFieldset").innerHTML = "";
        document.getElementById("userFieldset").style.display = "none";
      }
      menuForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let url = "";
        let data;
        const items = document
          .getElementById("menuSelect")
          .getElementsByTagName("option");
        let selectedItem = "";
        let selectElement;
        for (let index = 0; index < items.length; index++) {
          const element = items[index];
          if (element.value == document.getElementById("menuSelect").value) {
            selectedItem = element.innerHTML;
            selectElement = element;
          }
        }
        if (memberId != null && memberId != "" && memberId.length > 20) {
          data = {
            itemChosen: selectedItem,
            itemComment: document.getElementById("itemComment").value,
          };
          url = `https://mccormickbackend.herokuapp.com/members/${memberId}`;
        } else {
          url = "https://mccormickbackend.herokuapp.com/members";
          data = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            itemChosen: document.getElementById("menuSelect").value,
            itemComment: document.getElementById("itemComment").value,
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
            localStorage.setItem("menu", true);
            localStorage.setItem("memberId", res.data._id);
            const menuData = {
              quantity: Number(selectElement.getAttribute("data-quantity")) - 1,
            };
            axios.patch(
              `https://mccormickbackend.herokuapp.com/menu/${
                document.getElementById("menuSelect").value
              }`,
              menuData,
              config
            );
          });
        } else {
          axios.post(url, data, config).then((res) => {
            document.getElementById("successMsg").style.display = "block";
            localStorage.setItem("memberId", res.data._id);
            localStorage.setItem("menu", true);
            const menuData = {
              quantity: Number(selectElement.getAttribute("data-quantity")) - 1,
            };
            axios.patch(
              `https://mccormickbackend.herokuapp.com/menu/${
                document.getElementById("menuSelect").value
              }`,
              menuData,
              config
            );
            console.log(selectElement.getAttribute("data-quantity"));
          });
        }
      });
    });
}

export default menu;
