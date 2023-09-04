let profilePageLoadSetup = (() => {
  let userData = {};
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    let fullName = document.getElementById("fullname");
    let userName = document.getElementById("username");
    let fullNameDiv = document.createElement("div");
    let userNameDiv = document.createElement("div");

    fullNameDiv.innerText = userData.fullname;
    userNameDiv.innerText = userData.username;

    fullName.appendChild(fullNameDiv);
    userName.appendChild(userNameDiv);

    // console.log(userFullName.innerText);
  }
})();
