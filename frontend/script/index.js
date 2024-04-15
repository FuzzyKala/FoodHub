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
  jumpToFollowingPage,
  performSearch,
  // showComments,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  // toggleCategoryButton();

  const localToken = localStorage.getItem("token");
  const account_id = await loginStatusIsValid(localToken, backendUrl);
  const trending = new posts(backendUrl, "/posts/trending");
  const myPosts = new posts(backendUrl, `/posts/account/${account_id}`);

  renderingTrending(trending);
  // renderingMyPosts(myPosts);
  registration(backendUrl);
  login(backendUrl);
  jumpToFollowingPage();
  performSearch();
  logout();
});
