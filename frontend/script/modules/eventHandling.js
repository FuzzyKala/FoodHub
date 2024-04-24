import { openModal, closeModal, reloadPage } from "./modalInteraction.js";
import { renderingAvatar } from "./renderingUser.js";
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
  const closeRegisterModalButton = document.getElementById(
    "closeRegisterModalButton"
  );
  closeRegisterModalButton.addEventListener("click", () => {
    registrationForm.reset();
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
        hideLoginButton(userData);
        alert("Login successful!");
        loginForm.reset();
        const loginModal = bootstrap.Modal.getInstance(
          document.getElementById("loginModal")
        );
        closeModal(loginModal);
        reloadPage();
      } else {
        hideLoginButton(null);
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
  const closeLoginModalButton = document.getElementById(
    "closeLoginModalButton"
  );
  closeLoginModalButton.addEventListener("click", () => {
    loginForm.reset();
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
    hideLoginButton(null);
    reloadPage();
  });
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

export const jumpToTrendingPage = () => {
  const carouselItem = document.querySelector("#trendingTitle");
  carouselItem.addEventListener("click", () => {
    window.location.href = "trending.html";
  });
};
export const jumpToFollowingPage = () => {
  const carouselItem = document.querySelector("#followingTitle");
  carouselItem.addEventListener("click", () => {
    window.location.href = "following.html";
  });
};

export const jumpToSearchResult = () => {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.querySelector("#searchInput");
  const performSearch = () => {
    const keyword = searchInput.value;
    window.location.href = `searchResult.html?keyword=${encodeURIComponent(
      keyword
    )}`;
    searchInput.value = "";
  };

  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  });
};

export const loginStatusIsValid = async (localToken, backendUrl) => {
  try {
    const response = await fetch(`${backendUrl}/user/verification`, {
      headers: { Authorization: `Bearer ${localToken}` },
    });
    if (response.ok) {
      const userDataString = localStorage.getItem("userData");
      const userData = JSON.parse(userDataString);
      console.log("userData", userData);
      hideLoginButton(userData);
      renderingAvatar(userData);
      console.log("Login session is valid");
      return true;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      hideLoginButton(null);
      console.log("Login session is invalid");
      return false;
    }
  } catch (error) {
    console.error("Failed to verify user:", error);
  }
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

const hideLoginButton = (userLoginSuccessfully) => {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (userLoginSuccessfully) {
    loginButton.classList.add("d-none");
    logoutButton.classList.remove("d-none");
  } else {
    loginButton.classList.remove("d-none");
    logoutButton.classList.add("d-none");
  }
};

export const hideFollowingCollection = (userLoginSuccessfully) => {
  const followingCollection = document.getElementById("followingCollection");
  if (userLoginSuccessfully) {
    followingCollection.classList.remove("d-none");
  } else {
    followingCollection.classList.add("d-none");
  }
};

export const submitComment = (post, index, backendUrl) => {
  // add event listener to comment button
  const commentButton = document.getElementById(`commentButton-${index}`);
  commentButton.addEventListener("click", async () => {
    const commentInput = document.getElementById(`commentInput-${index}`);
    const comment = commentInput.value;
    const token = localStorage.getItem("token");
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);
    const account_id = userData.account_id;
    const post_id = post.getPostId();
    const commentData = {
      account_id: account_id,
      post_id: post_id,
      comment: comment,
    };
    try {
      const response = await fetch(`${backendUrl}/posts/${post_id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(commentData),
      });
      if (response.ok) {
        alert("Comment successful!");
        commentInput.value = "";
        location.reload();
        // const comments = await fetchComments(post_id, backendUrl);
        // updateCommentArea(comments, index);
      } else {
        throw new Error("Failed to comment");
      }
    } catch (error) {
      console.error("Error commenting:", error);
      alert("Failed to comment");
    }
  });
};
