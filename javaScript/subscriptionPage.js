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

function dropdownClick() {
  document.getElementById("paymentDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.paymentOptions')) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function creditDropdownClick() {
  document.getElementById("paymentDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.paymentOptions')) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function upiDropdownClick() {
  document.getElementById("paymentDropdownUpi").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.paymentOptions')) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Code for payment but not full please correct
document.addEventListener('DOMContentLoaded', function () {
  const paymentForm = document.getElementById('paymentForm');
  const paymentStatus = document.getElementById('paymentStatus');
  
  document.getElementById('payButton').addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const cardNumber = document.getElementById('cardNumber').value;
      const expiry = document.getElementById('expiry').value;
      const cvv = document.getElementById('cvv').value;
      const upiId = document.getElementById('upiId').value;

      const paymentDetails = {
        name,
        cardNumber,
        expiry,
        cvv,
        upiId,
        amount: 100.00, 
    };
    simulatePayment(paymentDetails);
    });
    function simulatePayment(paymentDetails) {
      paymentStatus.innerHTML = `Payment successful! Amount: $${paymentDetails.amount}`;
    }
});

//Code for letting write in the form but not working please check
// document.addEventListener('DOMContentLoaded', function () {
//   const dropdownButton = document.getElementById('paymentOptions');
//   const dropdownContent = document.getElementById('dropdownContent');
//   const form = document.getElementById('paymentFormDebit');

//   // Toggle the dropdown content when the button is clicked
//   dropdownButton.addEventListener('click', function () {
//       if (dropdownContent.style.display === 'block') {
//           dropdownContent.style.display = 'none';
//       } else {
//           dropdownContent.style.display = 'block';
//       }
//   });

//   // Hide the dropdown content when a click occurs outside the dropdown
//   document.addEventListener('click', function (event) {
//       if (event.target !== paymentOptions && event.target !== form) {
//           dropdownContent.style.display = 'none';
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('paymentDropdown');
  const dropdownContent = document.getElementsByClassName('dropdownContent');
  const form = document.getElementById('paymentFormDebit');

  // Toggle the dropdown content when the button is clicked
  dropdownButton.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
  });

  // Hide the dropdown content when a click occurs outside the dropdown or form
  document.addEventListener('click', function (event) {
    if (!dropdownButton.contains(event.target) && !form.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});
