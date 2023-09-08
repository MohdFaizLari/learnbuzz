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
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Full Stack Web Development",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
        {
          courseDescription: "Responsive We Design",
          videoLink:
            "./../video/./html/1._Introduction_to_HTML_(Hindi)(480p).mp4",
        },
      ],
      css: [
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
      javascript: [
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
  }
})();
