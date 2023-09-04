if (document.getElementById("signupForm")) {
  let signUp = document.getElementById("signupForm");
  // Attach a submit event listener to the login form
  signUp.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let userData = {};

    let signupForm = document.forms.signupForm;
    let fullName = signupForm.fullname.value;
    userData.fullname = fullName;
    let userName = signupForm.username.value;
    userData.username = userName;
    let email = signupForm.email.value;
    userData.email = email;
    let password = signupForm.pwd.value;
    userData.password = password;

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location = "./../html/homepage.html";
  });
}
