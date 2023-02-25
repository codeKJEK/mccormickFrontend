import axios from "axios";
import loginComponent from "./components/login.js";

window.addEventListener("load", (event) => {
  loginComponent();
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendRequest(loginForm);
  });
});

function sendRequest(form) {
  const formData = new FormData(form);
  const inputFields = [...formData];
  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
  };
  axios
    .post("https://mccormickbackend.herokuapp.com/members", data, {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        Accept: "application/json",
      },
    })
    .then((res) => {
      localStorage.setItem("memberId", res.data._id);
    });
}

// function generateJoke() {
//   const config = {
//     headers: {},
//   };
//   axios.get("http://localhost:8080/members", config).then((res) => {
//     const members = res.data;
//     let memberList = "";
//     members.forEach((member) => {
//       const memberHtml = `
//         <li>${member.firstName} ${member.firstName}</li>
//       `;
//       memberList = memberList + memberHtml;
//       const guestObj = member.guests;
//       Object.keys(guestObj).forEach((key) => {
//         const guestHtml = `
//           <li>${guestObj[key].firstName} ${guestObj[key].lastName}</li>
//         `;
//         memberList = memberList + guestHtml;
//       });
//     });
//     document.getElementById("joke").innerHTML = `<ul>${memberList}</ul>`;
//   });
// }
