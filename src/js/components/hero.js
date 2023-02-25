import "../../styles/hero.scss";
import familyPhoto from "../../asset/familyPhoto.jpg";
import headingOne from "../elements/headingOne.js";
import paragraph from "../elements/paragraph";
import link from "../elements/link.js";

const heroContent = {
  title: "Welcome McCormick Family",
  subTitle: `Saturday June 24, 2023 9:00 AM <br> Johnson Springview Park<br> Pavilion Number 3<br> 5480 5th St, Rocklin, CA 95677`,
  linkText: "View More Information",
  linkHref: "#infoCard",
  image: familyPhoto,
  imageAlt: "McCormick Family Photo",
};

function generateHero() {
  let heroHtml = "";
  const elementHtml = `
            <section id="home" class="hero">
              <div>
                ${headingOne(heroContent.title)}
                ${paragraph(heroContent.subTitle)}
                ${link(heroContent.linkHref, heroContent.linkText)}
              </div>
              <figure class="heroImageContainer">
                <img src="${heroContent.image}" class="heroImage" alt="${
    heroContent.imageAlt
  }">
              </figure>
            </section>`;
  heroHtml = heroHtml + elementHtml;
  return heroHtml;
}

function heroComponent(elementId) {
  document
    .getElementById(elementId)
    .insertAdjacentHTML("beforeend", generateHero());
}

export default heroComponent;
