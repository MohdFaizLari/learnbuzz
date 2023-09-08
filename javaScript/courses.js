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
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
       
      ],
      css: [
        {
          courseDescription: "CSS Syntax",
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:"./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
       
      ],
      searchEngineOptimisation: [
        {
          courseDescription: "CSS Syntax",
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:"./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
       
      ],
      tableau: [
        {
          courseDescription: "CSS Syntax",
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:"./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
        },
       
      ],
      css: [
        {
          courseDescription: "CSS Syntax",
          videoLink:
            "./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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
          videoLink:"./../video/./html/5._Head_Tag_in_HTML_(Hindi)(480p).mp4",
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



let coursesPageLoadSetup = (() => {
  let sideBarInnerContent = document.getElementById("sideBarContent");
  for (let i = 0; i < inputData.length; i++) {
    let inputDataObject = inputData[i];
    let sideBarCategories = document.createElement("div");
    sideBarCategories.innerText = inputDataObject.courseCategory;
    sideBarInnerContent.appendChild(sideBarCategories);
  }

  let mainContentContainer = document.getElementById("mainContentContainer");
  for (let i = 0; i < inputData.length; i++) {
    let test = inputData[i].courses.html;
    for (let j = 0; j < test.length; j++) {
      let videoscontainerDiv = document.createElement("div");
      videoscontainerDiv.classList.add("videoscontainerDiv");
      let videosContainer = document.createElement("video");
      videosContainer.style.width = "100%";
      videosContainer.style.height = "100%";
      videosContainer.autoplay = "disabled";
      videosContainer.controls = "true";
      let test1 = test[j].videoLink;
      videosContainer.setAttribute("src", test1);
      videosContainer.setAttribute("type", "video/mp4");
      videoscontainerDiv.appendChild(videosContainer);
      mainContentContainer.appendChild(videoscontainerDiv);
    }
  
  
    let test1 = inputData[i].courses.css;
    console.log(test1);
    for (let j = 0; j < test1.length; j++) {
      let videoscontainerDiv = document.createElement("div");
      videoscontainerDiv.classList.add("videoscontainerDiv");
      let videosContainer = document.createElement("video");
      videosContainer.style.width = "100%";
      videosContainer.style.height = "100%";
      videosContainer.autoplay = "disabled";
      videosContainer.controls = "true";
      let cssCourseLink = test1[j].videoLink;
      videosContainer.setAttribute("src", cssCourseLink);
      videosContainer.setAttribute("type", "video/mp4");
      videoscontainerDiv.appendChild(videosContainer);
      mainContentContainer.appendChild(videoscontainerDiv);
    }

    let test2 = inputData[i].courses.javascript;
    console.log(test2);
    for (let j = 0; j < test2.length; j++) {
      let videoscontainerDiv = document.createElement("div");
      videoscontainerDiv.classList.add("videoscontainerDiv");
      let videosContainer = document.createElement("video");
      videosContainer.style.width = "100%";
      videosContainer.style.height = "100%";
      videosContainer.autoplay = "disabled";
      videosContainer.controls = "true";
      let jsCourseLink = test2[j].videoLink;
      videosContainer.setAttribute("src", jsCourseLink);
      videosContainer.setAttribute("type", "video/mp4");
      videoscontainerDiv.appendChild(videosContainer);
      mainContentContainer.appendChild(videoscontainerDiv);
    }
  }
})();
