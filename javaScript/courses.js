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

let test550 = () => {
  for (let i = 0; i < inputData.length; i++) {
    let coursesData = inputData[i].courses;
    let courseCat = inputData[i].courseCategory;

    let htmlCourse = coursesData.html;
    let cssCourse = coursesData.css;
    let jsCourse = coursesData.javascript;
    if (!document.getElementById("webDevContainer")) {
      if (htmlCourse !== null || "undefined") {
        test551(coursesData, htmlCourse, courseCat);
      }
      if (cssCourse !== null || "undefined") {
        test551(coursesData, cssCourse, courseCat);
      }
      if (jsCourse !== null || "undefined") {
        test551(coursesData, jsCourse, courseCat);
      }
    }

    // let test1 = inputData[i].courses.css;
    // // console.log(test1);
    // for (let j = 0; j < test1.length; j++) {
    //   let videoscontainerDiv = document.createElement("div");
    //   videoscontainerDiv.classList.add("videoscontainerDiv");
    //   let videosContainer = document.createElement("video");
    //   videosContainer.style.width = "100%";
    //   videosContainer.style.height = "100%";
    //   // videosContainer.autoplay = "disabled";
    //   videosContainer.controls = "true";
    //   videosContainer.muted = "true";
    //   let cssCourseLink = test1[j].videoLink;
    //   videosContainer.setAttribute("src", cssCourseLink);
    //   videosContainer.setAttribute("type", "video/mp4");
    //   videoscontainerDiv.appendChild(videosContainer);
    //   mainContentContainer.appendChild(videoscontainerDiv);
    // }

    // let test2 = inputData[i].courses.javascript;
    // // console.log(test2);
    // for (let j = 0; j < test2.length; j++) {
    //   let videoscontainerDiv = document.createElement("div");
    //   videoscontainerDiv.classList.add("videoscontainerDiv");
    //   let videosContainer = document.createElement("video");
    //   videosContainer.style.width = "100%";
    //   videosContainer.style.height = "100%";
    //   // videosContainer.autoplay = "disabled";
    //   videosContainer.controls = "true";
    //   videosContainer.muted = "true";
    //   let jsCourseLink = test2[j].videoLink;
    //   videosContainer.setAttribute("src", jsCourseLink);
    //   videosContainer.setAttribute("type", "video/mp4");
    //   videoscontainerDiv.appendChild(videosContainer);
    //   mainContentContainer.appendChild(videoscontainerDiv);
    // }
  }
};

let test551 = (coursesData, htmlCourse, courseCat) => {
  let mainContentContainer = document.getElementById("mainContentContainer");
  let courseVideosContainer = document.createElement("div");
  courseVideosContainer.classList.add("coursesContainerStyling");

  if ((courseCat = "Web-Developement")) {
    courseVideosContainer.setAttribute("id", "webDevContainer");
    if (!document.getElementById("Web-Developement")) {
      mainContentContainer.appendChild(courseVideosContainer);
    }
  }
  for (let j = 0; j < htmlCourse.length; j++) {
    let videoscontainerDiv = document.createElement("div");
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
};

let coursesPageLoadSetup = (() => {
  let sideBarInnerContent = document.getElementById("sideBarContent");
  for (let i = 0; i < inputData.length; i++) {
    let inputDataObject = inputData[i];
    let sideBarCategories = document.createElement("div");
    sideBarCategories.setAttribute("id", "courseCategories");
    sideBarCategories.innerText = inputDataObject.courseCategory;
    sideBarInnerContent.appendChild(sideBarCategories);
  }

  let courseCategories = document.getElementById("courseCategories");

  if (courseCategories.innerText === "Web-Development") {
    let webDevContainer = document.createElement("div");
    courseCategories.addEventListener("click", test550);
  }

  // if (courseCategories.innerText === "Digital Marketing") {
  //   let digitalMarkContainer = document.createElement("div");
  // } else if (courseCategories.innerText === "Data Science") {
  //   let dataScContainer = document.createElement("div");
  // } else if (courseCategories.innerText === "Graphic Design") {
  //   let graphicDesignContainer = document.createElement("div");
  // }
})();
