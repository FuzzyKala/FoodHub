import { reloadHomePage } from "./reloadPage.js";
import { openRegisterModal, closeModalAndReload } from "./modalInteraction.js";

export const registration = (backendUrl) => {
  // Get the register button
  const registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", openRegisterModal);

  // Attach event listener to the modal's "hidden.bs.modal" event
  const registerModalElement = document.getElementById("registerModal");
  registerModalElement.addEventListener("hidden.bs.modal", reloadHomePage);

  // Get the submit button inside the registration form modal
  const registrationForm = document.getElementById("registrationForm");

  // Add event listener to the submit button
  registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const registerData = { username, email, password };
    console.log(registerData);
    try {
      const response = await fetch(`${backendUrl}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      if (response.ok) {
        alert("Registration successful!");
        registrationForm.reset();
        closeModalAndReload();
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.log(err.message);
      alert("Registration failed. Please try again.");
    }
  });
};
