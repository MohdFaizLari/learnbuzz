let profilePageLoadSetup = (() => {
  let userData = {};
  userData = JSON.parse(localStorage.getItem("userData"));

  if (userData !== null) {
    let fullName = document.getElementById("fullname");
    let userFullNameDiv = document.createElement("div");
    userFullNameDiv.innerText = userData.fullname;
    userFullNameDiv.style.fontSize = "large";

    let userName = document.getElementById("username");
    let userGivenNameDiv = document.createElement("div");
    userGivenNameDiv.innerText = userData.username;
    userGivenNameDiv.style.fontSize = "large";

    let emailAddress = document.getElementById("email");
    let userEmailDiv = document.createElement("div");
    userEmailDiv.innerText = userData.email;
    userEmailDiv.style.fontSize = "large";

    let date = new Date();
    let hoursTime = date.getHours();
    let userGreeting = document.getElementById("userGreeting");
    if (hoursTime >= 5 && hoursTime < 11.59) {
      userGreeting.innerText =
        "Hey " + fullNameDiv.innerText + "," + " Good morning!";
    } else if (hoursTime >= 12 && hoursTime < 16.59) {
      userGreeting.innerText =
        "Hey " + userFullNameDiv.innerText + "," + " Good afternoon!";
    } else if (hoursTime >= 17 && hoursTime < 23.59) {
      userGreeting.innerText =
        "Hey " + userFullNameDiv.innerText + "," + " Good eveining!";
    }

    let userDescription = document.getElementById("userDescription");
    userDescription.innerText = userFullNameDiv.innerText;

    fullName.appendChild(userFullNameDiv);
    userName.appendChild(userGivenNameDiv);
    emailAddress.appendChild(userEmailDiv);
  }
})();
