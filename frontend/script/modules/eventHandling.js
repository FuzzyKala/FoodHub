// import { reloadHomePage } from "./reloadPage.js";
import { closeModalAndReload } from "./modalInteraction.js";

export const registration = (backendUrl) => {
  // Get the submit button inside the registration form modal
  const registrationForm = document.getElementById("registrationForm");

  // Add event listener to the submit button
  registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("registeredUsername").value;
    const email = document.getElementById("registeredEmail").value;
    const password = document.getElementById("registeredPassword").value;
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

export const login = (backendUrl) => {
  // Get the submit button inside the login form modal
  const loginForm = document.getElementById("loginForm");

  // Add event listener to the submit button
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginData = { email, password };
    console.log(loginData);
    try {
      const response = await fetch(`${backendUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        alert("Login successful!");
        loginForm.reset();
        closeModalAndReload();
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.log(err.message);
      alert("Login failed. Please try again.");
    }
  });
};
