function test() {
  let testName = document.getElementById("fullName");
  console.log(testName);
}
// let userDataStore = () => {
//   if (document.getElementById("fullName")) {
//     let fullName = document.getElementById("fullName");

//     let innerText = fullName.innerText;
//     console.log(e);
//   }
// let userName = document.getElementById("username").innerText;
// let userEmail = document.getElementById("email").innerText;
// let userPassword = document.getElementById("pwd").innerText;
// };
// userDataStore();

if (document.getElementById("signupForm")) {
  let signUp = document.getElementById("signupForm");
  // Attach a submit event listener to the login form
  signUp.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    window.location = "./../html/homepage.html";
  });
}
