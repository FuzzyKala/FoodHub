import {
  renderingTrending,
  renderingMyPosts,
} from "./modules/renderingPosts.js";
import { posts } from "./modules/posts.js";
import {
  toggleCategoryButton,
  registration,
  login,
  addNewPost,
  logout,
  loginStatusIsValid,
  // showComments,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  toggleCategoryButton();

  const trending = new posts(backendUrl, "/posts/trending");
  renderingTrending(trending);
});
