// function test(e) {
//   let signUp = document.forms.signupForm.fullName.value;
//   console.log(signUp);
//   if (!fullName.length) {
//     return false;
//   }
//   window.location.replace("./../html/homepage.html");
//   // return true;
// }

if (document.getElementById("signupForm")) {
  let signUp = document.getElementById("signupForm");
  // Attach a submit event listener to the login form
  signUp.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let signUp = document.forms.signupForm.fullName.value;
    console.log(signUp);
    localStorage.setItem("signUpValue", JSON.stringify(signUp));
    window.location = "./../html/homepage.html";
  });
}
