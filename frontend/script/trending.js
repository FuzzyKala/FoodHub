import {
  renderingTrendingCollection,
  renderingFollowingCollection,
  renderingMyPosts,
  renderingTrendingPosts,
} from "./modules/renderingPosts.js";
import { Posts } from "./modules/posts.js";
import { renderingAvatar } from "./modules/renderingUser.js";
import {
  registration,
  login,
  addNewPost,
  logout,
  loginStatusIsValid,
  jumpToTrendingPage,
  jumpToFollowingPage,
  jumpToSearchResult,
  hideFollowingCollection,
  jumpToPostDetailPage,
  // showComments,
  // openAddPostModal,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  const localToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");

  registration(backendUrl);
  login(backendUrl);
  loginStatusIsValid(localToken, backendUrl);
  jumpToSearchResult();
  logout();

  const trending = new Posts(backendUrl, "/posts/trending");
  renderingTrendingPosts(trending, backendUrl);
});
