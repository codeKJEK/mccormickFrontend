import axios from "axios";

function tableOutput(parentId) {
  const pass = "mccormick2023";
  let userPass = prompt("Enter The Password");
  if (userPass === pass) {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    let url = "https://mccormickbackend.herokuapp.com/members";
    axios.get(url, config).then((res) => {
      const member = res.data;
      let memeberRows = "";
      member.forEach((memeber) => {
        let memeberHtml = `
            <tr>
                
            </tr>
        `;
      });
    });
  } else {
    userPass = prompt("Enter The Password");
  }
}

export default tableOutput;
