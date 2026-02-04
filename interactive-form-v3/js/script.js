// Variables
const nameField = document.querySelector("#name");
const jobRoleField = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");

// To add a focus on the first field after the loading
window.addEventListener("load", () => {
  nameField.focus();
});

// Job role field validation
jobRoleField.addEventListener("change", () => {
  if (jobRoleField.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});
