let usersData = [];
let loginPageLoadSetup = (() => {
  usersData.push(JSON.parse(localStorage.getItem("userModifiedData")));
  usersUpdatedPassword = JSON.parse(
    localStorage.getItem("userUpdatedPassword")
  );
  usersData[0].password = usersUpdatedPassword;
  console.log(usersData);
})();

if (document.getElementById("loginform")) {
  let login = document.getElementById("loginform");
  // Attach a submit event listener to the login form
  login.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let loginForm = document.forms.loginform;
    let userLoginEmail = loginForm.email.value;
    let userLoginPassword = loginForm.pwd.value;

    for (let i = 0; i < usersData.length; i++) {
      let userCredentials = usersData[i];
      let usersEmail = userCredentials.email;
      let usersPassword = userCredentials.password;
      console.log(usersEmail, usersPassword);

      if (usersEmail == userLoginEmail && usersPassword == userLoginPassword) {
        window.location = "./../html/homepage.html";
      } else if (
        usersEmail != userLoginEmail ||
        usersPassword != userLoginPassword
      ) {
        // console.log("Heuj");
        let errorMessage = document.createElement("div");
        errorMessage.setAttribute("id", "errorMessageDiv");
        errorMessage.innerText = "Please check your email and password";
        errorMessage.style.width = "100%";
        errorMessage.style.color = "Black";
        errorMessage.style.backgroundColor = "#fcbca0";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.padding = "5px";

        let forgetPasswordOpt = document.createElement("div");
        forgetPasswordOpt.setAttribute("id", "forgetPasswordDiv");
        forgetPasswordOpt.style.width = "100%";
        forgetPasswordOpt.style.marginTop = "10px";
        forgetPasswordOpt.style.padding = "5px";
        forgetPasswordOpt.innerText = "Forgot";
        forgetPasswordOpt.style.color = "White";

        let forgetPage = document.createElement("a");
        forgetPage.setAttribute("href", "./../html/forgot-password.html");
        forgetPage.innerText = "password ?";
        forgetPage.classList.add("pd-5");
        forgetPage.classList.add("mr-b-15");
        forgetPage.classList.add("loginTextStyling");
        forgetPasswordOpt.appendChild(forgetPage);

        if (!document.getElementById("forgetPasswordDiv")) {
          let loginForm = document.getElementById("loginform");
          loginForm.appendChild(forgetPasswordOpt);
        } else if (document.getElementById("forgetPasswordDiv")) {
          return;
        }

        if (!document.getElementById("errorMessageDiv")) {
          let formContainer1 = document.getElementById("loginform");
          formContainer1.appendChild(errorMessage);
        }

        if (document.getElementById("errorMessageDiv")) {
          return;
        }
      }
    }
  });
}
