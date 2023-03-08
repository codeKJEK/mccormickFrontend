import axios from "axios";
import "../../styles/tableOutput.scss";
import outputLogin from "../actions/outputLogin.js";

function tableOutput(parentId) {
  outputLogin();
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  let url = "https://mccormickbackend.herokuapp.com/members";

  axios.get(url, config).then((res) => {
    const members = res.data;

    console.log(members);

    let memberRows = "";
    let numberPicnic = 0;
    let numberBowling = 0;
    let numberHotel = 0;

    members.forEach((member) => {
      let picnicNumber = 0;
      let bowlingNumber = 0;
      let hotelNumber = 0;
      if (member.picnicNum != null) {
        picnicNumber = member.picnicNum;
      }
      if (member.bowlingNum != null) {
        bowlingNumber = member.bowlingNum;
      }
      if (member.hotelNum != null) {
        hotelNumber = member.hotelNum;
      }

      let memberHtml = `
            <tr>
                <td class="text">${member.firstName} ${member.lastName}</td>
                <td class="text">${member.email} </td>
                <td class="text">${member.itemChosen} </td>
                <td class="num">${picnicNumber} </td>
                <td class="num">${bowlingNumber} </td>
                <td class="num">${hotelNumber} </td>
                <td class="boo">${member.talent} </td>
                <td class="comment">Comment: ${member.comment} Item Comment: ${member.itemComment} Talent Comment: ${member.talentComment}</td>
            </tr>
        `;
      memberRows = memberRows + memberHtml;
      if (member.picnicNum != null) {
        numberPicnic = numberPicnic + member.picnicNum;
      }
      if (member.bowlingNum != null) {
        numberBowling = numberBowling + member.bowlingNum;
      }
      if (member.hotelNum != null) {
        numberHotel = numberHotel + member.hotelNum;
      }
    });

    const componentHtml = `
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Item</th>
          <th class="num">Picnic</th>
          <th class="num">Bowling</th>
          <th class="num">hotel</th>
          <th>talent</th>
          <th class="comment">Comments</th>
        </tr>
        </thead>
          <tbody>
            ${memberRows}
          </tbody>
          <tfoot>
          <th></th>
          <th></th>
          <th></th>
          <th class="num">${numberPicnic}</th>
          <th class="num">${numberBowling}</th>
          <th class="num">${numberHotel}</th>
          <th></th>
          <th class="comment"></th>
          </tfoot
        </table>
      `;

    document
      .getElementById(parentId)
      .insertAdjacentHTML("beforeend", componentHtml);
  });
}

export default tableOutput;
