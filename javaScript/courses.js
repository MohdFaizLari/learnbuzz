let inputData = [
  {
    id: 1,
    coursePrice: 499,
    courseCategory: "Web Development",
    courses: [
      { course1: "Introduction to HTML and CSS" },
      { course1Link: "./../video/./Css/Tutorial__Introduction.mp4" },
      { course2: "JavaScript Fundamentals" },
      { course2Link: "../Media/production_id_4498849 (2160p).mp4" },
      { course3: "Full-Stack Web Development" },
      { course4: "Responsive Web Design" },
    ],
  },

  {
    id: 2,
    courseCategory: "Digital Marketing",
    coursePrice: 999,
    course1: "Social Media Marketing",
    course2: "Search Engine Optimization (SEO)",
    course3: "Content Marketing Strategy",
    course4: "Email Marketing Essentials",
  },

  {
    id: 3,
    courseCategory: "Data Science",
    course1: "Data Analysis with Python",
    course2: "Machine Learning Basics",
    course3: "Data Visualization with Tableau",
    course4: "Introduction to Data Analytics",
    price: 1299,
  },

  {
    id: 4,
    courseCategory: "Graphic Design",
    course1: "Adobe Photoshop Mastery",
    course2: "Graphic Design Principles",
    course3: "Logo Design Fundamentals",
    course4: "Typography for Designers",
    price: 1499,
  },
];

let coursesPageLoadSetup = (() => {
  let sideBarInnerContent = document.getElementById("sideBarContent");
  for (let i = 0; i < inputData.length; i++) {
    let inputDataObject = inputData[i];
    let sideBarCategories = document.createElement("div");
    sideBarCategories.innerText = inputDataObject.courseCategory;
    sideBarInnerContent.appendChild(sideBarCategories);
  }

  let mainContentContainer = document.getElementById("mainContentContainer");
  let videoscontainerDiv = document.createElement("div");
  videoscontainerDiv.classList.add("videoscontainerDiv");

  let videosContainer = document.createElement("video");
  videosContainer.style.width = "100%";
  videosContainer.style.height = "100%";
  videosContainer.setAttribute(
    "src",
    // "../Media/production_id_4498849 (2160p).mp4"
    inputData[0].courses[1].course1Link
  );
  videosContainer.setAttribute("type", "video/mp4");

  videoscontainerDiv.appendChild(videosContainer);
  mainContentContainer.appendChild(videoscontainerDiv);
})();
