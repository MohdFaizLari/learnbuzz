let usersData = [];
let userCredentialsPageLoadSetup = (() => {
  usersData = JSON.parse(localStorage.getItem("userDataSignUp"));
  console.log(usersData);
})();

if (document.getElementById("userCredentialsForm")) {
  let userCredentials = document.getElementById("userCredentialsForm");
  // Attach a submit event listener to the login form
  userCredentials.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    if (document.getElementById("formInnerSection")) {
      var userCredentialsForm = document.forms.userCredentialsForm;
      var userLoginEmail = userCredentialsForm.email.value;
    }
    for (let i = 0; i < usersData.length; i++) {
      let formData = usersData[i];
      let usersEmail = formData.email;

      if (usersEmail === userLoginEmail) {
        let formInnerSection = document.getElementById("formInnerSection");
        formInnerSection.parentNode.removeChild(formInnerSection);

        let form = document.createElement("div");
        form.classList.add("formStyling");
        form.classList.add("textStyling");
        form.setAttribute("id", "formAlign");

        let userOtpInput = document.createElement("input");
        userOtpInput.setAttribute("id", "userOTP");
        userOtpInput.placeholder = "Enter your OTP";
        userOtpInput.style.padding = "5px";
        userOtpInput.style.marginBottom = "15px";
        userOtpInput.addEventListener("change", passwordReset);
        form.appendChild(userOtpInput);

        let formContainer1 = document.getElementById("userCredentialsForm");
        formContainer1.appendChild(form);
      }
      if (usersEmail !== userLoginEmail) {
        let errorMessage = document.createElement("div");
        errorMessage.setAttribute("id", "errorMessageDiv");
        errorMessage.innerText = "In-correct email address";
        errorMessage.style.width = "100%";
        errorMessage.style.color = "Black";
        errorMessage.style.textAlign = "center";
        errorMessage.style.backgroundColor = "#fcbca0";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.padding = "5px";

        if (!document.getElementById("errorMessageDiv")) {
          let formContainer1 = document.getElementById("formInnerSection");
          if (document.getElementById("formInnerSection")) {
            formContainer1.appendChild(errorMessage);
          }
        }

        if (document.getElementById("errorMessageDiv")) {
          return;
        }
      }
    }
  });
}

let passwordStore = () => {
  let userInputPassword = document.getElementById("userInputPassword");
  console.log(usersData);
  usersData[0].password = userInputPassword.value;
  localStorage.setItem("userDataSignUp", JSON.stringify(usersData));
  window.location = "./../html/homepage.html";
};

let passwordReset = () => {
  let passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "userInputPassword");
  passwordLabel.innerText = "Enter Password";

  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("id", "userInputPassword");
  passwordInput.style.padding = "5px";
  passwordInput.style.marginBottom = "15px";
  passwordInput.placeholder = "Enter new password";
  passwordInput.addEventListener("change", passwordStore);

  let submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.classList.add("secondaryButton");

  let formContainer1 = document.getElementById("formAlign");
  formContainer1.appendChild(passwordLabel);
  formContainer1.appendChild(passwordInput);
  formContainer1.appendChild(submitButton);
};
