let selectedPlan = (e) => {
  let arr = {};
  let userPlan = e.target.innerText.split("\n");
  arr.selectedPlan = userPlan[0];
  arr.planDuration = userPlan[1];
  console.log(arr);
};

let subscriptionPageLoadSetup = (() => {
  let firstPlan = document.getElementById("firstPlan");
  firstPlan.addEventListener("click", selectedPlan);
  let secondPlan = document.getElementById("secondPlan");
  secondPlan.addEventListener("click", selectedPlan);
  let thirdPlan = document.getElementById("thirdPlan");
  thirdPlan.addEventListener("click", selectedPlan);
})();
