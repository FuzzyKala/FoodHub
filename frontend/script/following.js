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
  //some process of fetching following accounts
  const id = [15, 19];
  id.forEach(id => {
    const searchResult = new Posts(backendUrl, `/posts/account/${id}`);

    renderingFollowingPosts(searchResult, backendUrl);
  });

  loginStatusIsValid(localToken, backendUrl);
  registration(backendUrl);
  login(backendUrl);
  logout();
});