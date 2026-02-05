// variables
const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const jobRoleField = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const tshirtSize = document.getElementById("shirt-sizes");
const designField = document.getElementById("design");
const colorField = document.getElementById("color");
const dataThemes = document.querySelectorAll("option[data-theme]");
const activitiesSection = document.getElementById("activities");
const activities = document.querySelectorAll("input[type=checkbox]");
const pricing = document.getElementById("activities-cost");
const payment = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

// to handle the load and refresh of the page
window.addEventListener("load", () => {
  nameField.focus();
  jobRoleField.value = "";
  otherJobRole.style.display = "none";
  tshirtSize.value = "medium";
  designField.value = "";
  colorField.disabled = true;
  colorField.value = "";

  payment.value = "credit-card";
  hideAllPayments();
  creditCard.style.display = "block";
});

// job role field validation
jobRoleField.addEventListener("change", () => {
  if (jobRoleField.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

// color field validation
designField.addEventListener("change", () => {
  const selectedDesign = designField.value;

  colorField.disabled = selectedDesign === "";

  dataThemes.forEach((theme) => {
    theme.hidden = theme.dataset.theme !== selectedDesign;
  });
});

// activites total
let totalCost = 0;
activitiesSection.addEventListener("change", (e) => {
  const checkbox = e.target;
  const cost = parseInt(checkbox.dataset.cost);

  if (checkbox.checked) {
    totalCost += cost;
  } else {
    totalCost -= cost;
  }

  pricing.textContent = `Total: ${totalCost} $`;
});

// add a focus and blur on activities checkbox
activities.forEach((activitie) => {
  activitie.addEventListener("focus", () => {
    activitie.parentNode.classList.add("focus");
  });

  activitie.addEventListener("blur", () => {
    activitie.classList.remove("focus");
    activitie.parentNode.classList.remove("focus");
  });
});

// payment validation
payment.addEventListener("change", () => {
  hideAllPayments();

  if (payment.value === "credit-card") {
    creditCard.style.display = "block";
  } else if (payment.value === "paypal") {
    paypal.style.display = "block";
  } else if (payment.value === "bitcoin") {
    bitcoin.style.display = "block";
  }
});

function hideAllPayments() {
  creditCard.style.display = "none";
  paypal.style.display = "none";
  bitcoin.style.display = "none";
}

// form validation
form.addEventListener("submit", (e) => {
  const nameOk = isNameValid();
  const emailOk = isValidEmail();
  const activitiesOk = isActivity();

  const ccOk = payment.value === "credit-card" ? isCreditCardValid() : true;

  if (!nameOk || !emailOk || !activitiesOk || !ccOk) {
    e.preventDefault();
  }
});

function showValidation(input) {
  const parent = input.parentElement;
  const hint = parent.querySelector(".hint");
  parent.classList.add("not-valid");
  parent.classList.remove("valid");
  hint.style.display = "block";
}

function hideValidation(input) {
  const parent = input.parentElement;
  const hint = parent.querySelector(".hint");
  parent.classList.remove("not-valid");
  parent.classList.add("valid");
  hint.style.display = "none";
}

function isNameValid() {
  if (nameField.value.trim() === "") {
    showValidation(nameField);
    return false;
  } else {
    hideValidation(nameField);
  }
  return true;
}

function isValidEmail() {
  const emailField = document.getElementById("email");
  const emailFormat = /^[^@]+@[^@.]+\.[a-z]+$/i;
  const emailFieldValue = emailField.value.trim();

  if (emailFormat.test(emailFieldValue)) {
    hideValidation(emailField);
    return true;
  } else {
    showValidation(emailField);
    return false;
  }
}

function isActivity() {
  const checkedActivities = activitiesSection.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  const isValid = checkedActivities.length > 0;

  if (!isValid) {
    activitiesSection.classList.add("not-valid");
    activitiesSection.classList.remove("valid");
    document.getElementById("activities-hint").style.display = "block";
    return false;
  } else {
    activitiesSection.classList.remove("not-valid");
    activitiesSection.classList.add("valid");
    document.getElementById("activities-hint").style.display = "none";
    return true;
  }
}

function isCreditCardValid() {
  const creditCardNumber = document.getElementById("cc-num");
  const zipCode = document.getElementById("zip");
  const cvvCode = document.getElementById("cvv");

  const creditCardFormat = /^[0-9]{13,16}$/;
  const zipCodeFormat = /^[0-9]{5}$/;
  const cvvCodeFormat = /^[0-9]{3}$/;

  const ccValue = creditCardNumber.value.trim();
  const zipValue = zipCode.value.trim();
  const cvvValue = cvvCode.value.trim();

  let valid = true;

  if (!creditCardFormat.test(ccValue)) {
    showValidation(creditCardNumber);
    valid = false;
  } else {
    hideValidation(creditCardNumber);
  }

  if (!zipCodeFormat.test(zipValue)) {
    showValidation(zipCode);
    valid = false;
  } else {
    hideValidation(zipCode);
  }

  if (!cvvCodeFormat.test(cvvValue)) {
    showValidation(cvvCode);
    valid = false;
  } else {
    hideValidation(cvvCode);
  }

  return valid;
}
