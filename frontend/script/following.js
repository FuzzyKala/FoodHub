import {
  renderingTrendingCollection,
  renderingFollowingCollection,
  renderingMyPosts,
  renderingTrendingPosts,
  renderingFollowingPosts,
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

  if (userData) {
    const userDataObj = JSON.parse(userData);
    const account_id = userDataObj.account_id;
    const following = new Posts(backendUrl, `/posts/following/${account_id}`);
    renderingFollowingPosts(following);
  }
});
