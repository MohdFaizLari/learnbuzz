let inputData = [
  {
    id: 1,
    coursePrice: 499,
    courseCategory: "Web-Development",
    courses: {
      html: [
        {
          courseDescription: "Introduction to HTML",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Tags and Elements in HTML",
          videoLink:
            "./../video/./html/2._Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Head Tag in HTML",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      css: [
        {
          courseDescription: "CSS Syntax",
          videoLink: "./../video/./css/CSS_Syntax_(Hindi)(360p).mp4",
        },
        {
          courseDescription: "Element Selector",
          videoLink:
            "./../video/./css/Element_Selector_in_CSS_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Way of Inserting CSS",
          videoLink: "./../video/./css/Way_of_Inserting_CSS_(Hindi)(480p).mp4",
        },
      ],
      javascript: [
        {
          courseDescription: "Alert Function in JS",
          videoLink:
            "./../video/./javascript/alert_Function_in_JavaScript_(Hindi)(360p).mp4",
        },
        {
          courseDescription: "Function",
          videoLink:
            "./../video/./javascript/write_Function_in_JavaScript_(Hindi)(360p).mp4",
        },
        {
          courseDescription: "DOM in JS",
          videoLink:
            "./../video/./javascript/What_is_Document_Object_Model_in_JavaScript_(Hindi)(360p).mp4",
        },
      ],
    },
  },

  {
    id: 2,
    coursePrice: 999,
    courseCategory: "Digital Marketing",
    courses: {
      socialMediaMarketing: [
        {
          courseDescription: "Introduction to HTML",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Tags and Elements in HTML",
          videoLink:
            "./../video/./html/2._Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Head Tag in HTML",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      searchEngineOptimisation: [
        {
          courseDescription: "CSS Syntax",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Element Selector",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Way of Inserting CSS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      contentMarketingStrategy: [
        {
          courseDescription: "Alert Function in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Function",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "DOM in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },

  {
    id: 3,
    coursePrice: 1299,
    courseCategory: "Data Science",
    courses: {
      python: [
        {
          courseDescription: "Introduction to HTML",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Tags and Elements in HTML",
          videoLink:
            "./../video/./html/2._Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Head Tag in HTML",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      tableau: [
        {
          courseDescription: "CSS Syntax",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Element Selector",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Way of Inserting CSS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      matlab: [
        {
          courseDescription: "Alert Function in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Function",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "DOM in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          courseDescription: "Introduction to HTML",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Tags and Elements in HTML",
          videoLink:
            "./../video/./html/2._Tags_and_Element_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Head Tag in HTML",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      css: [
        {
          courseDescription: "CSS Syntax",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Element Selector",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Way of Inserting CSS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
      javascript: [
        {
          courseDescription: "Alert Function in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Function",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "DOM in JS",
          videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
      ],
    },
  },
];

let test550 = (e) => {
  for (let i = 0; i < inputData.length; i++) {
    let coursesData = inputData[i].courses;
    let courseCat = e.target.innerText;

    if ((e.target.innerText = "Web-Developement")) {
      let htmlCourse = coursesData.html;
      let cssCourse = coursesData.css;
      let jsCourse = coursesData.javascript;
      if (!document.getElementById("webDev")) {
        if (htmlCourse !== null || "undefined") {
          test551(coursesData, htmlCourse, courseCat, "webDev");
        }
        if (cssCourse !== null || "undefined") {
          test551(coursesData, cssCourse, courseCat, "webDev");
        }
        if (jsCourse !== null || "undefined") {
          test551(coursesData, jsCourse, courseCat, "webDev");
        }
      }
    } else if ((e.target.innerText = "Digital Marketing")) {
      let socialMediaMarketingCourse = coursesData.socialMediaMarketing;
      let searchEngineOptimisationCourse = coursesData.searchEngineOptimisation;
      let contentMarketingStrategyCourse = coursesData.contentMarketingStrategy;
      if (!document.getElementById("digitalMark")) {
        if (socialMediaMarketingCourse !== null || "undefined") {
          test551(coursesData, socialMediaMarketingCourse, courseCat, "digitalMark");
        }
        if (searchEngineOptimisationCourse !== null || "undefined") {
          test551(coursesData, searchEngineOptimisationCourse, courseCat,"digitalMark");
        }
        if (contentMarketingStrategyCourse !== null || "undefined") {
          test551(coursesData, contentMarketingStrategyCourse, courseCat,"digitalMark");
        }
      }
    }
    // else if ((e.target.innerText = "Data Science")) {
    //   courseVideosContainer.setAttribute("id", "dataScience");
    // } else if ((e.target.innerText = "Graphic Design")) {
    //   courseVideosContainer.setAttribute("id", "graphicDesign");
    // }
  }
};

let test551 = (coursesData, htmlCourse, courseCat, test) => {
  let mainContentContainer = document.getElementById("mainContentContainer");
  let courseVideosContainer = document.createElement("div");
  courseVideosContainer.setAttribute("id", test);
  courseVideosContainer.classList.add("coursesContainerStyling");

  for (let j = 0; j < htmlCourse.length; j++) {
    var videoscontainerDiv = document.createElement("div");
    let courseVideos = htmlCourse[j].videoLink;
    videoscontainerDiv.classList.add("videoscontainerDiv");
    let videosContainer = document.createElement("video");
    videosContainer.style.width = "100%";
    videosContainer.style.height = "100%";
    // videosContainer.autoplay = "disabled";
    videosContainer.controls = "true";
    videosContainer.muted = "true";
    videosContainer.setAttribute("src", courseVideos);
    videosContainer.setAttribute("type", "video/mp4");
    videoscontainerDiv.appendChild(videosContainer);
    courseVideosContainer.appendChild(videoscontainerDiv);
  }
  mainContentContainer.appendChild(courseVideosContainer);
};

let coursesPageLoadSetup = (() => {
  let sideBarInnerContent = document.getElementById("sideBarContent");
  for (let i = 0; i < inputData.length; i++) {
    let inputDataObject = inputData[i];
    let courseCategories = inputDataObject.courseCategory;
    let sideBarCategories = document.createElement("div");
    sideBarCategories.setAttribute("id", courseCategories);
    sideBarCategories.addEventListener("click", test550);
    sideBarCategories.innerText = inputDataObject.courseCategory;
    sideBarInnerContent.appendChild(sideBarCategories);
    console.log(courseCategories);
  }
})();
