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

[
  {
    "id": 1,
    "courseCategory1" :{
          "Web Development":{
            "course1":"Introduction to HTML and CSS",
            "course2": "JavaScript Fundamentals",
            "course3":"Full-Stack Web Development",
            "course4":"Responsive Web Design"
          }
    },
    "price": 499
  },


  {
    "id": 2,
    "courseCategory2" :{
          "Digital Marketing":{
            "course1":"Social Media Marketing",
            "course2": "Search Engine Optimization (SEO)",
            "course3":"Content Marketing Strategy",
            "course4":"Email Marketing Essentials"
          }
    },
    "price": 999
  },

  {
    "id": 3,
    "courseCategory3" :{
          "Data Science":{
            "course1":"Data Analysis with Python",
            "course2": "Machine Learning Basics",
            "course3":"Data Visualization with Tableau",
            "course4":"Introduction to Data Analytics"
          }
    },
    "price": 1299
  },

  {
    "id": 4,
    "courseCategory4" :{
          "Graphic Design":{
            "course1":"Adobe Photoshop Mastery",
            "course2": "Graphic Design Principles",
            "course3":"Logo Design Fundamentals",
            "course4":"Typography for Designers"
          }
    },
    "price": 1499
  }
 
]
