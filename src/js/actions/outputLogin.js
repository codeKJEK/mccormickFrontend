function outputLogin() {
  const pass = "mccormick2023";
  let userPass = prompt("Please Enter The Password");
  if (userPass != pass) {
    outputLogin();
  }
}

export default outputLogin;
