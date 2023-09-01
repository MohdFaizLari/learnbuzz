if (document.getElementById("signupForm")) {
  let loginForm = document.getElementById("signupForm");
  // Attach a submit event listener to the login form
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    loginPageRedirect(); // Call the login function
  });
}

function loginPageRedirect(e) {
  window.location = "./../html/login.html";
}
