let inputData = [
  {
    id: 1,
    coursePrice: 499,
    courseCategory: "Web-Development",
    courses: {
      html: [
        {
          courseDescription: "Introduction to HTML & CSS",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "JavaScript Fundamentals",
          videoLink: "videohtml_Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Full Stack Web Development",
          videoLink: "videohtml_HTML_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Responsive We Design",
          videoLink: "videohtml_Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },

  // {
  //   id: 2,
  //   courseCategory: "Digital Marketing",
  //   coursePrice: 999,
  //   course1: "Social Media Marketing",
  //   course2: "Search Engine Optimization (SEO)",
  //   course3: "Content Marketing Strategy",
  //   course4: "Email Marketing Essentials",
  // },

  // {
  //   id: 3,
  //   courseCategory: "Data Science",
  //   course1: "Data Analysis with Python",
  //   course2: "Machine Learning Basics",
  //   course3: "Data Visualization with Tableau",
  //   course4: "Introduction to Data Analytics",
  //   price: 1299,
  // },

  // {
  //   id: 4,
  //   courseCategory: "Graphic Design",
  //   course1: "Adobe Photoshop Mastery",
  //   course2: "Graphic Design Principles",
  //   course3: "Logo Design Fundamentals",
  //   course4: "Typography for Designers",
  //   price: 1499,
  // },
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
  videosContainer.autoplay = "disabled";
  videosContainer.controls = "true";
  let test = inputData[0].courses.html[0].videoLink;
  console.log(test);
  videosContainer.setAttribute("src",test );
  videosContainer.setAttribute("type", "video/mp4");

  videoscontainerDiv.appendChild(videosContainer);
  mainContentContainer.appendChild(videoscontainerDiv);
})();
