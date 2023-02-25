import cardComponent from "./components/card.js";
import heroComponent from "./components/hero.js";
import footer from "./components/footer.js";

heroComponent("appContentContainer");
cardComponent("appContentContainer");
footer(
  "appFooter",
  "RSVP Online",
  "If you plan on attending the picnic on Saturday June 24, 2023 9:00 AM at Johnson Springview Park please let us know by submitting a RSVP",
  "rsvp.html",
  "RSVP Online Click Here"
);
