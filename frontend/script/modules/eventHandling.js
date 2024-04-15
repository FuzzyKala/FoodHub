import { closeModal, reloadPage } from "./modalInteraction.js";

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
        closeModal(registerModal);
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
        console.log("login -> userData", userData);
        hideLoginRegisterButton(userData);

        alert("Login successful!");
        loginForm.reset();
        const loginModal = bootstrap.Modal.getInstance(
          document.getElementById("loginModal")
        );
        closeModal(loginModal);
        reloadPage();
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (err) {
      if (err.message) {
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
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

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
      formData.append("title", title);
      formData.append("description", description);

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
        // reloadPage();
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

export const logout = () => {
  const logoutButton = document.getElementById("logoutButton");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    hideLoginRegisterButton(null);
    reloadPage();
  });
};
// export const showComments = () => {
//   const commentsLabel = document.getElementById("commentsLabel");
//   commentsLabel.addEventListener("click", () => {});
// };

export const performSearch = () => {
  var searchTerm = document.getElementById("searchInput").value;
  alert("Search for: " + searchTerm);
};

export const toggleCategoryButton = () => {
  const buttons = document.querySelectorAll(".btn.category-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        return;
      } else {
        button.classList.add("active");
      }
    });
  });
};

const getUserInfo = async (token, backendUrl) => {
  try {
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

export const loginStatusIsValid = async (localToken, backendUrl) => {
  try {
    const response = await fetch(`${backendUrl}/user/verification`, {
      headers: { Authorization: `Bearer ${localToken}` },
    });
    if (response.ok) {
      const userDataString = localStorage.getItem("userData");
      const userData = JSON.parse(userDataString);
      const account_id = userData.account_id;
      console.log("loginStatusIsValid -> userData", userData);
      hideLoginRegisterButton(userData);
      console.log("User is verified.");
      return account_id;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      hideLoginRegisterButton(null);
      // reloadPage();
      return false;
    }
  } catch (error) {
    console.error("Failed to verify user:", error);
  }
};

const hideLoginRegisterButton = (userData) => {
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  const logoutButton = document.getElementById("logoutButton");
  const profileIcon = document.getElementById("profileIcon");

  if (userData) {
    loginButton.classList.add("d-none");
    registerButton.classList.add("d-none");
    logoutButton.classList.remove("d-none");
    profileIcon.classList.remove("d-none");
  } else {
    loginButton.classList.remove("d-none");
    registerButton.classList.remove("d-none");
    logoutButton.classList.add("d-none");
    profileIcon.classList.add("d-none");
  }
};
