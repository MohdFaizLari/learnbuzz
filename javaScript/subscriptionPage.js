let selectedPlan = (e) => {
  let arr = {};
  let userPlan = e.target.innerText.split("\n");
  arr.selectedPlan = userPlan[0];
  arr.planDuration = userPlan[1];
  e.target.style.border = "1px solid Blue";
  e.target.style.borderRadius = "10px";
  console.log(arr);
};

let debitCardFormLoad = (e) => {
  let paymentFormContainer = document.getElementById("paymentFormContainer");
  console.log(e);

  let paymentForm = document.createElement("form");
  paymentForm.setAttribute("id", "debitCardPaymentForm");

  let formDescription = document.createElement("div");
  formDescription.innerText = "Enter your Debit Card details";
  formDescription.style.textAlign = "center";
  formDescription.classList.add("mr-b-20");
  formDescription.classList.add("fw-bold");
  paymentForm.appendChild(formDescription);

  let userNameLabel = document.createElement("label");
  userNameLabel.innerText = "Name on Card";
  userNameLabel.setAttribute("for", "userName");
  let userNameInput = document.createElement("input");
  userNameInput.setAttribute("id", "userName");
  userNameInput.setAttribute("type", "text");
  userNameInput.placeholder = "Itachi Uchiha";
  userNameInput.required = 'true';
  userNameInput.classList.add("mr-b-10");
  paymentForm.appendChild(userNameLabel);
  paymentForm.appendChild(userNameInput);

  let cardNumberLabel = document.createElement("label");
  cardNumberLabel.innerText = "Card Number";
  cardNumberLabel.setAttribute("for", "cardNumber");
  let cardNumberInput = document.createElement("input");
  cardNumberInput.setAttribute("id", "cardNumber");
  cardNumberInput.setAttribute("type", "number");
  cardNumberInput.required = 'true';
  cardNumberInput.placeholder = "1234 5678 9012 3456";
  cardNumberInput.classList.add("mr-b-10");
  paymentForm.appendChild(cardNumberLabel);
  paymentForm.appendChild(cardNumberInput);

  let expiryDateLabel = document.createElement("label");
  expiryDateLabel.innerText = "Expiry Date";
  expiryDateLabel.setAttribute("for", "expiryDate");
  let expiryDateInput = document.createElement("input");
  expiryDateInput.setAttribute("id", "expiryDate");
  expiryDateInput.setAttribute("type", "number");
  expiryDateInput.placeholder = "MM/YY";
  expiryDateInput.required = 'true';
  expiryDateInput.classList.add("mr-b-10");
  paymentForm.appendChild(expiryDateLabel);
  paymentForm.appendChild(expiryDateInput);

  let cvvLabel = document.createElement("label");
  cvvLabel.innerText = "CVV";
  cvvLabel.setAttribute("for", "cvv");
  let cvvInput = document.createElement("input");
  cvvInput.setAttribute("id", "cvv");
  cvvInput.setAttribute("type", "number");
  cvvInput.placeholder = "123";
  cvvInput.classList.add("mr-b-10");
  cvvInput.required = 'true';
  paymentForm.appendChild(cvvLabel);
  paymentForm.appendChild(cvvInput);

  let submitButton = document.createElement('input');
  submitButton.setAttribute('type','submit');
  submitButton.setAttribute('value','Submit');
  submitButton.classList.add("secondaryButton");
  paymentForm.appendChild(submitButton);

  if (!document.getElementById("debitCardPaymentForm")) {
    paymentFormContainer.appendChild(paymentForm);
  }
};

let subscriptionPageLoadSetup = (() => {
  let firstPlan = document.getElementById("firstPlan");
  firstPlan.addEventListener("click", selectedPlan);
  let secondPlan = document.getElementById("secondPlan");
  secondPlan.addEventListener("click", selectedPlan);
  let thirdPlan = document.getElementById("thirdPlan");
  thirdPlan.addEventListener("click", selectedPlan);

  document.getElementById("debitCard").click();
})();
