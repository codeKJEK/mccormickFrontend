import axios from "axios";
import formRsvp from "./components/formRsvp.js";
import header from "./components/header.js";
import footer from "./components/footer.js";

header(
  "appContentContainer",
  "Event RSVP",
  "Here you can submit a RSVP for the picnic, bowling, and request a hotel"
);
formRsvp("rsvp", "appContentContainer");
footer(
  "appFooter",
  "Online Menu",
  "If you have submitted a RSVP for the picnic please visit the menu and let us know which shared item you will be bring with you.",
  "menu.html",
  "Online Menu Click Here"
);
