let usersData = [];
let loginPageLoadSetup = (() => {
  usersData = JSON.parse(localStorage.getItem("userDataSignUp"));
  // console.log(usersData);
})();

let htmlIntroPageRedirect = () => {
  window.location = "./../html/contentOnIntroToHtml.html";
};

let jsIntroPageRedirect = () => {
  window.location = "./../html/contentOnJSFundamentals.html";
};

let fullStackIntroPageRedirect = () => {
  window.location = "./../html/contentOnFullStack.html";
};

let resWebIntroPageRedirect = () => {
  window.location = "./../html/contentOnResponsiveDesign.html";
};

let subscriptionPageRedirect = () => {
  window.location = "./../html/subscriptionPage.html";
};

if (document.getElementById("subscriptionStatus")) {
  let subscriptionStatus = document.getElementById("subscriptionStatus");
  subscriptionStatus.innerText = usersData[0].subscriptionStatus;
  subscriptionStatus.style.color = "#1338BE";
  if (document.getElementById("subscriptionStatus").innerText === "Subscribed") {
    let subscriptionStatus = document.getElementById("subscriptionStatus");
    subscriptionStatus.onclick = null;
  }
}
