import header from "./components/header.js";
import footer from "./components/footer.js";
import formMenu from "./components/formMenu.js";

header(
  "appContentContainer",
  "Event Menu",
  "We are asking you to bring Shared Dishes. Salads, veggies, desserts, etc. Each family should bring enough for 20. Below is a list of items we would like for you to bring. Please select an item from the list and bring it with you to the picnic."
);
formMenu("appContentContainer");
footer(
  "appFooter",
  "Kids Got Talent",
  "If you would like to enter your child in the talent show, please visit the talent show page and sign up.",
  "talent.html",
  "Sign Up Click Here"
);
