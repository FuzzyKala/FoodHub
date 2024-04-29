import { Posts } from "./modules/posts.js";
import { Comments } from "./modules/comments.js";
import { renderingFollowingPosts } from "./modules/renderingPosts.js";
import {
  registration,
  login,
  logout,
  loginStatusIsValid,
  submitComment,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  const localToken = localStorage.getItem("token");
  //fix trending posts fetching and then edit trending var
  const trending = '';

  const searchResult = new Posts(backendUrl, `/posts/${trending}`);

  renderingFollowingPosts(searchResult, backendUrl);

  loginStatusIsValid(localToken, backendUrl);
  registration(backendUrl);
  login(backendUrl);
  logout();
});