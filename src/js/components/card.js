import "../../styles/card.scss";
import sackRace from "../../asset/sackRace.jpg";
import kidsTalent1 from "../../asset/kidsTalent1.jpg";
import kidsTalent2 from "../../asset/kidsTalent2.jpg";
import kidsTalent3 from "../../asset/kidsTalent3.jpg";
import threeLegRace1 from "../../asset/threeLegRace.jpg";
import threeLegRace2 from "../../asset/threeLegRace2.jpg";
import bbqGrill from "../../asset/bbqGrill.jpg";
import bowling from "../../asset/bowling.jpg";

const cardContent = [
  {
    image: sackRace,
    header: "RSVP Online",
    text: "If you plan to join us on Saturday June 24th at Johnson Springview Park please let us know by submitting an RSVP online",
    // link: "#",
  },
  {
    image: bbqGrill,
    header: "BYO-BBQ!",
    text: "Bring your meat, chicken, fish etc. We will be grilling at Johnson Springview Park, Pavilion Number 3.",
    // link: "#",
  },
  {
    image: threeLegRace2,
    header: "The Menu",
    text: "We are asking you to bring Shared Dishes. Salads, veggies, desserts, etc. Each family should bring enough for 20.",
    // link: "#",
  },
  {
    image: kidsTalent1,
    header: "What To Bring",
    text: "We have a pavilion (with tables and benches) but if you want to sit in the sun, please bring a chair or ground cover. Totally optional!",
    // link: "#",
  },
  {
    image: kidsTalent2,
    header: "Ice & Drinks",
    text: "We will have a few large ice chests but bring a cooler if you have one. BYOD – NO GLASS BOTTLES, Please",
    // link: "#",
  },
  {
    image: bowling,
    header: "Bowling RSVP",
    text: "Need a head count for all who are interested in going bowling Friday June 23, 2023. Please respond no later than 3/10/23.",
    // link: "#",
  },
  {
    image: threeLegRace1,
    header: "Picnic Games",
    text: "Sack Races, 3-Legged Races, Tug-A-War, Balloon Toss, Orange Pass, Simon Says",
    // link: "#",
  },
  {
    image: kidsTalent3,
    header: "Kids Got Talent",
    text: "We are hosting a kids talent show. Please sign your child up if they wish to participate.",
    // link: "#",
  },
];

function generateCard() {
  let compiledHtml = "";
  cardContent.forEach((card) => {
    const cardHtml = `
            <div class="cardContainer">
                <img src = ${card.image} class="cardImage" alt="${card.header}}"/>
                <h2 class="cardHeader">${card.header}</h2>
                <p class="cardText">${card.text}</p> 
            </div>
        `;
    compiledHtml = compiledHtml + cardHtml;
  });
  return compiledHtml;
}

function cardComponent(elementId) {
  const cardComponent = generateCard();
  document.getElementById(elementId).innerHTML = cardComponent;
}

export default cardComponent;
