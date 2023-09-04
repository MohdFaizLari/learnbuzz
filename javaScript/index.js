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

let userDataSet = [];
let userData = null;
let pageLoadSetup = (() => {
  // function body
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    userDataSet.push(userData);
    console.log(userDataSet);
  }
  if (userDataSet.length>0) {
    localStorage.setItem("userDataSet", JSON.stringify(userDataSet));
  }
})();
