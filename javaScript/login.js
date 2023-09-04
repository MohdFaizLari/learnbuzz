let test5 = null;
let pageLoadSetup5 = (() => {
  // function body
  test5 = JSON.parse(localStorage.getItem("userDataSet"));
})();

if (document.getElementById("loginform")) {
  let login = document.getElementById("loginform");
  // Attach a submit event listener to the login form
  login.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // let userLoginData = {};

    let loginForm = document.forms.loginform;
    let userLoginEmail = loginForm.email.value;
    let userLoginPassword = loginForm.pwd.value;

    // let usersEmail = null;
    // let usersPassword = null;
    for (let i = 0; i < test5.length; i++) {
      let formData = test5[i];
      let usersEmail = formData.email;
      let usersPassword = formData.password;
      if (usersEmail === userLoginEmail && usersPassword === userLoginPassword) {
        window.location = "./../html/homepage.html";
      }
      if (usersEmail !== userLoginEmail || usersPassword !== userLoginPassword) {
        let errorMessage = document.createElement('div');
        errorMessage.innerText = "Please check your email and password";
        errorMessage.style.width = "100%";
        errorMessage.style.color = "Black";
        errorMessage.style.backgroundColor = "#fcbca0";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.padding = "5px";
        let formContainer1 = document.getElementById('loginform');
        formContainer1.appendChild(errorMessage);
      }
    }
    // localStorage.setItem("userLoginData", JSON.stringify(email));
    // window.location = "./../html/homepage.html";
  });
}
