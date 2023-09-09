let inputData = [
  {
    id: "webDevelopment",
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
    id: "digitalMarketing",
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
        // {
        //   courseDescription: "Head Tag in HTML",
        //   videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        // },
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
        // {
        //   courseDescription: "Way of Inserting CSS",
        //   videoLink: "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        // },
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
    id: "dataScience",
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
    id: "graphicDesign",
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

let fetchContent = (courses, courseId,courseCategoryID) => {
  let courseWrapper = document.getElementById(courseCategoryID);
  let courseVideosContainer = document.createElement("div");
  courseVideosContainer.setAttribute("id", courseId);
  courseVideosContainer.classList.add("coursesContainerStyling");
  console.log(courses);
  for (let j = 0; j < courses.length; j++) {
    var videoscontainerDiv = document.createElement("div");
    let courseVideos = courses[j].videoLink;
    videoscontainerDiv.classList.add("videoscontainerDiv");
    let videosContainer = document.createElement("video");
    videosContainer.style.width = "100%";
    videosContainer.style.height = "70%";
    // videosContainer.autoplay = "disabled";
    videosContainer.controls = true;
    videosContainer.muted = true;
    videosContainer.setAttribute("src", courseVideos);
    videosContainer.setAttribute("type", "video/mp4");
    videoscontainerDiv.appendChild(videosContainer);
    courseVideosContainer.appendChild(videoscontainerDiv);
  }
  courseWrapper.appendChild(courseVideosContainer);
};

let filterBasedOnCategorySelection = (e) => {
  let selectedCategoryID = e.target.id;
  console.log(selectedCategoryID);
  let selectedCategoryData = {};
  for (let i = 0; i < inputData.length; i++) {
    let coursesData = inputData[i];
    if (coursesData.id === selectedCategoryID) {
      selectedCategoryData = coursesData;
    }
  }

  if (selectedCategoryID === "webDevelopment") {
    let htmlCourse = selectedCategoryData.courses.html;
    let cssCourse = selectedCategoryData.courses.css;
    let jsCourse = selectedCategoryData.courses.javascript;
    if (!document.getElementById("webDev")) {
      let courseWrapper = document.createElement("div");
      courseWrapper.setAttribute("id", "webDev");
      let mainContentContainer = document.getElementById(
        "mainContentContainer"
      );
      mainContentContainer.appendChild(courseWrapper);
      if (htmlCourse !== null || "undefined") {
        fetchContent(htmlCourse, "htmlContainer","webDev");
      }
      if (cssCourse !== null || "undefined") {
        fetchContent(cssCourse, "cssContainer","webDev");
      }
      if (jsCourse !== null || "undefined") {
        fetchContent(jsCourse, "jsContainer","webDev");
      }
    }
  } else if (selectedCategoryID === "digitalMarketing") {
    let courseWrapper = document.createElement("div");
    let socialMediaMarketingCourse =
      selectedCategoryData.courses.socialMediaMarketing;

    let searchEngineOptimisationCourse =
      selectedCategoryData.courses.searchEngineOptimisation;
    let contentMarketingStrategyCourse =
      selectedCategoryData.courses.contentMarketingStrategy;

    if (!document.getElementById("digitalMark")) {
      if (socialMediaMarketingCourse !== null || "undefined") {
        fetchContent(socialMediaMarketingCourse, "digitalMark");
      }
      if (searchEngineOptimisationCourse !== null || "undefined") {
        fetchContent(searchEngineOptimisationCourse, "digitalMark");
      }
      if (contentMarketingStrategyCourse !== null || "undefined") {
        fetchContent(contentMarketingStrategyCourse, "digitalMark");
      }
    }
  }

  // else if ((e.target.innerText = "Data Science")) {
  //   courseVideosContainer.setAttribute("id", "dataScience");
  // } else if ((e.target.innerText = "Graphic Design")) {
  //   courseVideosContainer.setAttribute("id", "graphicDesign");
  // }
  // }
};

let coursesPageLoadSetup = (() => {
  let sideBarInnerContent = document.getElementById("sideBarContent");
  for (let i = 0; i < inputData.length; i++) {
    let inputDataObject = inputData[i];
    let courseCategoryID = inputDataObject.id;
    var sideBarCategories = document.createElement("div");
    sideBarCategories.setAttribute("id", courseCategoryID);
    sideBarCategories.addEventListener("click", filterBasedOnCategorySelection);
    sideBarCategories.innerText = inputDataObject.courseCategory;
    sideBarInnerContent.appendChild(sideBarCategories);
  }
})();
