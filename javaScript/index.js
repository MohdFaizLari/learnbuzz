let usersData = [];
let loginPageLoadSetup = (() => {
  usersData = JSON.parse(localStorage.getItem("userDataSignUp"));
})();

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

let contactPageRedirect = (e) => {
  window.location = "./../html/contact.html";
};

let coursesPageRedirect = () => {
  window.location = "./../html/courses.html";
};

let profilePictureButton = () => {
  window.location = "./../html/user-profile.html";
};

let termsPageRedirect = () => {
  window.location = "./../html/terms.html";
};

let policyPageRedirect = () => {
  window.location = "./../html/terms.html";
};

let subscriptionPageRedirect = () => {
  window.location = "./../html/subscriptionPage.html";
};

if (document.getElementById("subscriptionStatus")) {
  let subscriptionStatus = document.getElementById("subscriptionStatus");
  subscriptionStatus.innerText = usersData[0].subscriptionStatus;
  subscriptionStatus.style.color = "#1338BE";
  if (
    document.getElementById("subscriptionStatus").innerText === "Subscribed"
  ) {
    let subscriptionStatus = document.getElementById("subscriptionStatus");
    subscriptionStatus.onclick = null;
  }
}
