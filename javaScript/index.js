let loginButtonFunction = (e) => {
  window.location = "./../html/login.html";
};

let signUpButtonFunction = (e) => {
  window.location = "./../html/signUp.html";
};

let landingPageRedirect = (e) => {
  window.location = "./../html/landing.html";
};

let homePageRedirect = (e) => {
  window.location = "./../html/homepage.html";
};

// let userDataSet = [];
let userData = null;
// console.log(userDataSet);
let pageLoadSetup = (() => {
  userData = JSON.parse(localStorage.getItem("userDataSignUp"));
  if (userData !== null) {
    localStorage.setItem("userModifiedData", JSON.stringify(userData));
  }
  // console.log(userDataSet);
})();

function passwordUpdate() {
  usersUpdatedPassword = JSON.parse(localStorage.getItem("userUpdatedPassword"));
  userData.password = usersUpdatedPassword;
}

