import header from "./components/header";
import formTalent from "./components/formTalent.js";
import footer from "./components/footer.js";

header(
  "appContentContainer",
  "Kids Got Talent",
  "Please fill out the form below to enter your child in the talent show."
);
formTalent("appContentContainer");
footer(
  "appFooter",
  "Any Questions",
  "If You have anymore question please visit our contact page.",
  "contact.html",
  "Contact Page Click Here"
);
