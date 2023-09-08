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
          courseDescription: "Javascript Fundamentals",
          videoLink: "videohtml_Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Full Stack Web Development",
          videoLink: "videohtml_HTML_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Responsive Web Design",
          videoLink: "videohtml_Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },
  {
    id: 2,
    coursePrice: 999,
    courseCategory: "Digital Marketing",
    courses: {
      html: [
        {
          courseDescription: "Social Media Marketing",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Search Engine Optimization (SEO)",
          videoLink: "videohtml_Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Content Marketing Strategy",
          videoLink: "videohtml_HTML_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Email Marketing Essentials",
          videoLink: "videohtml_Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },

  {
    id: 3,
    coursePrice: 1299,
    courseCategory: "Data Science",
    courses: {
      html: [
        {
          courseDescription:"Data Analysis with Python",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Machine Learning Basics",
          videoLink: "videohtml_Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Data Visualization with Tableau",
          videoLink: "videohtml_HTML_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Introduction to Data Analytics",
          videoLink: "videohtml_Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },


  {
    id: 4,
    coursePrice: 1499,
    courseCategory: "Graphic Design",
    courses: {
      html: [
        {
          courseDescription:"Adobe Photoshop Mastery",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Logo Design Fundamentals",
          videoLink: "videohtml_Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Graphic Design Principles",
          videoLink: "videohtml_HTML_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Typography for Designers",
          videoLink: "videohtml_Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },

]



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

  for (let i = 0; i < inputData.length; i++){
  let inputDataObject = inputData[i]
  let videosContainer = document.createElement("video");
  videosContainer.style.width = "100%";
  videosContainer.style.height = "100%";
  videosContainer.autoplay = "disabled";
  videosContainer.controls = "true";
  let test = inputData[0].courses[0].html[0].videoLink;
  console.log(test);
  videosContainer.setAttribute("src",test );
  videosContainer.setAttribute("type", "video/mp4");

  videoscontainerDiv.appendChild(videosContainer);
  mainContentContainer.appendChild(videoscontainerDiv);
   }

  
})();



// inputData.forEach((course) =>{
// let courseCategory = course.courseCategory;
// let courses = course.courses.html;

// let categoryContainer=document.createElement("div");
// categoryContainer.className = "categoryConatiner";

// let categoryHeading = document.createElement("h3");
// categoryHeading.innerText = courseCategory;

// categoryContainer.appendChild(categoryHeading);

// courses.forEach((course) =>{
// let videoTilesContainer=document.createElement("div");
// videoTile.className = "videoTile";

// let videoFrame = document.createElement('iframe');
// videoFrame.src=course.videoLink;
// videoFrame.width = "250px";
// videoFrame.height="250px";

// videoTile.appendChild(videoFrame);

// let videoDescription=document.createElement("p");
// videoDescription.innerText = courseDescription;

// videoTile.appendChild(videoDescription);

// videoTilesContainer.appendChild(videoTile);
// mainContainer.appendChild(videoTilesContainer);
// });

// categoryContainer.appendChild(videoTilesContainer);

// let mainContainer = document.getElementById("videoTiles");
// mainContainer.appendChild(categoryContainer);

// })();
