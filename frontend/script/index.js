import {
  renderingTrending,
  renderingMyPosts,
} from "./modules/renderingPosts.js";
import { posts } from "./modules/posts.js";
import {
  registration,
  login,
  addNewPost,
  logout,
} from "./modules/eventHandling.js";

document.addEventListener("DOMContentLoaded", () => {
  // const backendUrl = "https://food-hub-oamk.vercel.app/api";
  const backendUrl = `http://localhost:10000`;

  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const account_id = userData.account_id;

  const trending = new posts(backendUrl, "/posts/trending");
  const myPosts = new posts(backendUrl, `/posts/account/${account_id}`);

  renderingTrending(trending);
  renderingMyPosts(myPosts);

  registration(backendUrl);
  login(backendUrl);
  addNewPost(backendUrl);
  logout();
});
