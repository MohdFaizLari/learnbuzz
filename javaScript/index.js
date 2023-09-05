// let inputData = [
//   {
//     id: 1,
//     courseCategory: "Web Development",
//     course1: "Introduction to HTML and CSS",
//     course2: "JavaScript Fundamentals",
//     course3: "Full-Stack Web Development",
//     course4: "Responsive Web Design",
//     price: 499,
//   },

//   {
//     id: 2,
//     courseCategory: "Digital Marketing",
//     course1: "Social Media Marketing",
//     course2: "Search Engine Optimization (SEO)",
//     course3: "Content Marketing Strategy",
//     course4: "Email Marketing Essentials",
//     price: 999,
//   },

//   {
//     id: 3,
//     courseCategory: "Data Science",
//     course1: "Data Analysis with Python",
//     course2: "Machine Learning Basics",
//     course3: "Data Visualization with Tableau",
//     course4: "Introduction to Data Analytics",
//     price: 1299,
//   },

//   {
//     id: 4,
//     courseCategory: "Graphic Design",
//     course1: "Adobe Photoshop Mastery",
//     course2: "Graphic Design Principles",
//     course3: "Logo Design Fundamentals",
//     course4: "Typography for Designers",
//     price: 1499,
//   },
// ];

let loginButtonFunction = (e) => {
  window.location = "./../html/login.html";
};

let signUpButtonFunction = (e) => {
  window.location = "./../html/signUp.html";
};

let landingPageRedirect = (e) => {
  window.location = "./../html/landing.html";
};

let homePageRedirect = (e) => {
  window.location = "./../html/homepage.html";
};

let userDataSet = [];
let userData = null;
// console.log(userDataSet);
let pageLoadSetup = (() => {
  // function body
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    userDataSet.push(userData);
    // console.log(userDataSet);
  }
  // console.log(userDataSet);
  if (userDataSet.length > 0) {
    console.log(userDataSet);
    localStorage.setItem("userDataSet", JSON.stringify(userDataSet));
  }
})();
