if (document.getElementById("signupForm")) {
  let signUp = document.getElementById("signupForm");
  // Attach a submit event listener to the login form
  signUp.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    window.location = "./../html/homepage.html";
  });
}
