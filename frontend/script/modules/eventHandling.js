import { reloadHomePage } from "./reloadPage.js";
import { openRegisterModal, closeModalAndReload } from "./modalInteraction.js";

export const eventHandling = () => {
  // Get the register button
  const registerButton = document.querySelector("#registerButton");
  registerButton.addEventListener("click", openRegisterModal);

  // Attach event listener to the modal's "hidden.bs.modal" event
  const registerModalElement = document.getElementById("registerModal");
  registerModalElement.addEventListener("hidden.bs.modal", reloadHomePage);

  // Get the submit button inside the registration form modal
  const registrationForm = document.getElementById("registrationForm");
  const submitButton = registrationForm.querySelector("button[type='submit']");
  // Add event listener to the submit button
  submitButton.addEventListener("click", closeModalAndReload);
};
