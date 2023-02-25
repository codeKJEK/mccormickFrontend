import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("http://localhost:8080/members", config).then((res) => {
    const members = res.data;
    let memberList = "";
    members.forEach((member) => {
      const memberHtml = `
        <li>${member.firstName} ${member.firstName}</li>
      `;
      memberList = memberList + memberHtml;
      const guestObj = member.guests;
      Object.keys(guestObj).forEach((key) => {
        const guestHtml = `
          <li>${guestObj[key].firstName} ${guestObj[key].lastName}</li>
        `;
        memberList = memberList + guestHtml;
      });
    });
    document.getElementById("joke").innerHTML = `<ul>${memberList}</ul>`;
  });
}

export default generateJoke;
