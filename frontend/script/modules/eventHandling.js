import { closeModalAndReload, reloadPage } from "./modalInteraction.js";

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
    // console.log(registerData);
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
        const registerModal = bootstrap.Modal.getInstance(
          document.getElementById("registerModal")
        );
        closeModalAndReload(registerModal);
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (err) {
      if (err.message) {
        alert(err.message);
      } else {
        alert("Registration failed. Please try again.");
      }
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
        const responseData = await response.json();
        const token = responseData.token;
        const userData = await getUserInfo(token, backendUrl);
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("userData", userData);
        displayUserData(userData);
        alert("Login successful!");
        loginForm.reset();
        const loginModal = bootstrap.Modal.getInstance(
          document.getElementById("loginModal")
        );
        // closeModalAndReload(loginModal);
      } else {
        const errorMessage = await response.text();
        console.log("errorMessage", errorMessage);
        throw new Error(errorMessage);
      }
    } catch (err) {
      if (err.message) {
        console.log("err.message", err.message);
        alert(err.message);
      } else {
        alert("Login failed. Please try again.");
      }
    }
  });
};

export const addNewPost = (backendUrl) => {
  const postForm = document.getElementById("postForm");

  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const description = document.getElementById("description").value;

    formData.append("description", description);
    const photos = document.getElementById("photos").files;

    // Check if the input element exists and files are attached
    if (photos) {
      for (let i = 0; i < photos.length; i++) {
        formData.append("photo", photos[i]);
      }
    }

    try {
      const token = localStorage.getItem("token");
      const userDataString = localStorage.getItem("userData");
      const userData = JSON.parse(userDataString);
      const account_id = userData.account_id;

      formData.append("account_id", account_id);
      const response = await fetch(`${backendUrl}/posts/new`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send FormData object as body
      });

      if (response.ok) {
        alert("Post added successfully!");
        postForm.reset();
        reloadPage();
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (err) {
      if (err.message) {
        alert(err.message);
      } else {
        alert("Post failed. Please try again.");
      }
    }
  });
};

const getUserInfo = async (token, backendUrl) => {
  try {
    console.log("token frontend", token);
    const response = await fetch(`${backendUrl}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      return response.json();
    } else {
      // Handle error when fetching user data
    }
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

const displayUserData = (userData) => {
  // Display user-specific data on the UI
};
