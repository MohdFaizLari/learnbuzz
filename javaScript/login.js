if (document.getElementById("loginForm")) {
  let loginForm = document.getElementById("loginForm");
  // Attach a submit event listener to the login form
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    homepageRedirect(); // Call the login function
  });
}

function homepageRedirect(e) {
  window.location = "./../html/homepage.html";
}
