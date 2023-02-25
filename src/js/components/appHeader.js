import "../../styles/appHeader.scss";
import linkLogo from "../elements/linkLogo.js";
import linkIcon from "../elements/linkIcon.js";

function appHeader(parentId) {
  const svgHtml = {
    home: `<svg id="a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m20,24H4C1.79,24,0,22.21,0,20V4C0,1.79,1.79,0,4,0h16C22.21,0,24,1.79,24,4v16c0,2.21-1.79,4-4,4Zm-15-1.5h5.25v-5.12h3.5v5.12h5.25v-7h3.5L12,1.5,1.5,15.5h3.5v7Z"/>
</svg>`,
    rsvp: `<svg id="a" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m20,24H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0h16c2.21,0,4,1.79,4,4v16c0,2.21-1.79,4-4,4ZM1.5,16l6.28,6.64L22.5,4.85l-2.5-3.2L7.78,18.63l-3.65-6.01-2.63,3.38Z"/>
</svg>`,
    menu: `<svg id="a" data-name="Layer 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m20,24H4C1.79,24,0,22.21,0,20V4C0,1.79,1.79,0,4,0h16C22.21,0,24,1.79,24,4v16c0,2.21-1.79,4-4,4Zm-4.46-13.66c1.59-.04,3.83-1.2,4.75-2.12,1.24-1.24,1.26-3.23.05-4.44-1.21-1.21-3.2-1.19-4.44.05-.92.92-2.08,3.16-2.12,4.75L3.24,19.14l1.75,1.75,10.55-10.55Zm-4.48-.46L4.3,3.12c-1.57,1.57,1.93,6.98,4.24,9.29l2.53-2.53Zm1.87,4.5l6.28,6.28,1.32-1.32-6.28-6.28-1.32,1.32Z"/>
</svg>`,
    kgt: `<svg id="a" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m20,24H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0h16c2.21,0,4,1.79,4,4v16c0,2.21-1.79,4-4,4ZM1.5,9.52l5.25,5.38-1.24,7.6,6.49-3.59,6.49,3.59-1.24-7.6,5.25-5.38-7.26-1.11-3.24-6.91-3.24,6.91-7.26,1.11Z"/>
</svg>`,
    contact: `<svg id="a" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m20,24H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0h16c2.21,0,4,1.79,4,4v16c0,2.21-1.79,4-4,4Zm2.47-6.53c.02-.07.02-.15.03-.22-.02-.39-.25-.73-.6-.91l-4.59-1.97c-.12-.05-.26-.08-.39-.08-.29.02-.56.15-.76.36l-2.04,2.49c-3.19-1.51-5.76-4.08-7.27-7.27l2.49-2.03c.22-.2.35-.47.36-.76,0-.13-.03-.26-.08-.39l-1.97-4.59c-.17-.35-.52-.58-.91-.6-.07,0-.15.01-.22.03l-4.26.98c-.44.12-.75.51-.76.96h0c0,10.51,8.52,19.04,19.03,19.03.46,0,.86-.32.96-.76l.98-4.27h0Z"/>
</svg>`,
  };
  const componentHtml = `
        <div class="container">
            ${linkLogo("index.html", "McCormick Family Reunion")}
            <nav>
                <ul>
                    <li>${linkIcon("index.html", "Home", svgHtml.home)}</li>
                    <li>${linkIcon("rsvp.html", "RSVP", svgHtml.rsvp)}</li>
                    <li>${linkIcon("menu.html", "Menu", svgHtml.menu)}</li>
                    <li>${linkIcon("talent.html", "Talent", svgHtml.kgt)}</li>
                    <li>${linkIcon(
                      "contact.html",
                      "Contact",
                      svgHtml.contact
                    )}</li>
                </ul>
            </nav>
        </div>
    `;
  document
    .getElementById(parentId)
    .insertAdjacentHTML("beforeend", componentHtml);
}

export default appHeader;
