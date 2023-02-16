import familyPhoto from "../../asset/familyPhoto.jpg";

const heroContent = [
  {
    title: "Welcome McCormick Family",
    subTitle: `Saturday June 24, 2023 9:00 AM <br> Johnson Springview Park<br> Pavilion Number 3<br> 5480 5th St, Rocklin, CA 95677`,
    linkText: "View More Information",
    linkHref: "#infoSection",
    image: familyPhoto,
    imageAlt: "McCormick Family Photo",
  },
];

function generateHero() {
  let heroHtml = "";
  heroContent.forEach((heroElement) => {
    const elementHtml = `
            <section class="hero">
                <div class="heroContainer">
                    <h1 class="heroHeader">${heroElement.title}</h1>
                    <p class="heroSubheader">${heroElement.subTitle}</p>
                    <a href="${heroElement.linkHref}" class="heroLink">${heroElement.linkText}</a>
                </div>
                <figure class="heroImageContainer">
                    <img src="${heroElement.image}" class="heroImage" alt="${heroElement.imageAlt}">
                </figure>
            </section>`;
    heroHtml = heroHtml + elementHtml;
  });
  return heroHtml;
}

function heroComponent(elementId) {
  document.getElementById(elementId).innerHTML = generateHero();
}

export default heroComponent;
