function outputLogin() {
  const pass = "Mccormick2023";
  let userPass = prompt("Please Enter The Password");
  if (userPass != pass) {
    outputLogin();
  }
}

export default outputLogin;
