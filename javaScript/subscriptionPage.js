let selectedPlan = (e) => {
  let arr;
  let userPlan = e.target.innerText.split("\n");
  arr = userPlan;
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
