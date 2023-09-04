let profilePageLoadSetup = (() => {
  let userData = {};
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    let fullName = document.getElementById("fullname");
    let fullNameDiv = document.createElement("div");

    let userName = document.getElementById("username");
    let userNameDiv = document.createElement("div");

    let emailAddress = document.getElementById("email");
    let userEmailDiv = document.createElement("div");

    userEmailDiv.innerText = userData.email;
    userEmailDiv.style.fontSize = "large";

    fullNameDiv.innerText = userData.fullname;
    fullNameDiv.style.fontSize = "large";

    userNameDiv.innerText = userData.username;
    userNameDiv.style.fontSize = "large";

    fullName.appendChild(fullNameDiv);
    userName.appendChild(userNameDiv);
    emailAddress.appendChild(userEmailDiv)

    // console.log(userFullName.innerText);
  }
})();
