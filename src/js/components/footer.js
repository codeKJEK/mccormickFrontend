import "../../styles/footer.scss";

// const footerContent = [
//   {
//     text: "home",
//     link: "#",
//   },
//   {
//     text: "check",
//     link: "#",
//   },
//   {
//     text: "menu",
//     link: "#",
//   },
//   {
//     text: "star",
//     link: "#",
//   },
//   {
//     text: "contact",
//     link: "#",
//   },
// ];

// function generateLink() {
//   let footerHtml = "";
//   footerContent.forEach((footerElement) => {
//     const newElement = `
//     <li class="item">
//     <a href="${footerElement.link}" class="link">${footerElement.text}</a>
//     </li>
//     `;
//     footerHtml = footerHtml + newElement;
//   });
//   return footerHtml;
// }

function footerComponent(elementId) {
  // const componentHtml = `
  //       <ul class="list">
  //           ${generateLink()}
  //       </ul>
  //       <p class="smallText text"><span>Company Name</span><span>Copyright&copy; 2023</span></p>
  //   `;
  const componentHtml = `
    <p class="message">This website is currently under construction. If you have any questions you need immediately resolved please fill out the form below.  Otherwise please check back at a later date.</p>
    <div class="formContainer">
    <form name="contact" class="contactForm" netlify>
  <p>
    <label>Name <br><input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <br><input type="email" name="email" /></label>
  </p>
  <p>
    <label>Comment: <br><input type="text" name="comment" class="commentBox" /> </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
    
    
    <p class="smallText text"><span>McCormick Family Reunion</span><span>Copyright&copy; 2023</span></p>
    
  `;
  document.getElementById(elementId).innerHTML = componentHtml;
}

export default footerComponent;
