import { renderingPost } from "./modules/renderingPosts.js";
import { registration, login } from "./modules/eventHandling.js";
import { Trending } from "./modules/trending.js";

// const backendUrl = "food-hub-oamk.vercel.app";
const backendUrl = `http://localhost:10000`;

const trending = new Trending(backendUrl);
renderingPost(trending);
registration(backendUrl);
login(backendUrl);

// Check if user is logged in
function isLoggedIn() {
  const token = localStorage.getItem("accessToken"); // Assuming you store the JWT token in localStorage
  return !!token; // Return true if token exists, false otherwise
}

if (isLoggedIn()) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}
