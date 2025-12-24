/*!
* Start Bootstrap - Abundant grace electronicals concept v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/abundant-grace-electronicals-concept/blob/master/LICENSE)
*/
// Google Form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const submitButton = document.getElementById("submitButton");
  const successMessage = document.getElementById("submitSuccessMessage");
  const errorMessage = document.getElementById("submitErrorMessage");

  form.addEventListener("submit", function (e) {
    // Validate email
    if (!emailInput.value || !emailInput.validity.valid) {
      e.preventDefault();
      emailInput.classList.add("is-invalid");
      return;
    }

    emailInput.classList.remove("is-invalid");
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting...";

    // Show success message after a short delay
    setTimeout(function () {
      form.reset();
      successMessage.classList.remove("d-none");
      errorMessage.classList.add("d-none");
      submitButton.disabled = false;
      submitButton.innerHTML = "Notify Me!";

      // Hide success message after 5 seconds
      setTimeout(function () {
        successMessage.classList.add("d-none");
      }, 5000);
    }, 1000);
  });

  // Remove validation error on input
  emailInput.addEventListener("input", function () {
    if (this.validity.valid) {
      this.classList.remove("is-invalid");
    }
  });
});
