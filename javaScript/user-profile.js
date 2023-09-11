let profilePageLoadSetup = (() => {
  let usersData = [];
  usersData.push(JSON.parse(localStorage.getItem("userDataSignUp")));
  let userData = usersData[0];

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

    let mobileNumber = document.getElementById("mobileNumber");
    let mobileNumberDiv = document.createElement("div");
    mobileNumberDiv.innerText = "Not provided yet.";
    mobileNumberDiv.style.fontSize = "large";

    let date = new Date();
    let hoursTime = date.getHours();
    let userGreeting = document.getElementById("userGreeting");
    console.log(userGreeting.innerText, date, hoursTime);
  
    if (hoursTime >= 5 && hoursTime < 11.59) {
      userGreeting.innerText =
        "Hey " + userFullNameDiv.innerText + " ," + " Good morning!";
    } else if (hoursTime >= 12 && hoursTime < 16.59) {
      userGreeting.innerText =
        "Hey " + userFullNameDiv.innerText + " ," + " Good afternoon!";
    } else if (hoursTime < 4.59 || hoursTime >= 17) {
      userGreeting.innerText =
        "Hey " + userFullNameDiv.innerText + " ," + " Good evening!";
    }

    fullName.appendChild(userFullNameDiv);
    userName.appendChild(userGivenNameDiv);
    emailAddress.appendChild(userEmailDiv);
    mobileNumber.appendChild(mobileNumberDiv);
  }
})();

let uploadImage = () => {
  let imageSelection = document.createElement("input");
  imageSelection.id = "storedImage";
  imageSelection.type = "file";
  imageSelection.name = "storedImage";
  imageSelection.style.width = "100%";
  imageSelection.style.marginTop = "10px";
  imageSelection.style.marginLeft = "30px";
  imageSelection.addEventListener("change", changeImage);
  let editMessage = document.getElementById("editMessage");

  if (!document.getElementById("storedImage")) {
    editMessage.appendChild(imageSelection);
  }
};

let changeImage = () => {
  if (document.getElementById("storedImage")) {
    let preview = document.getElementById("defaultUserImage");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
      console.log(preview.src);
    };
    if (file) {
      reader.readAsDataURL(file);
      let chooseFileOption = document.getElementById("storedImage");
      chooseFileOption.parentNode.removeChild(chooseFileOption);
    } else {
      preview.src = "";
    }
  }
};
