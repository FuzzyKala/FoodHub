import {
  renderingTrending,
  renderingFollowing,
  renderingMyPosts,
} from "./modules/renderingPosts.js";
import { Posts } from "./modules/posts.js";
import { renderingAvatar } from "./modules/renderingUser.js";
import {
  toggleCategoryButton,
  registration,
  login,
  addNewPost,
  logout,
  loginStatusIsValid,
  jumpToTrendingPage,
  jumpToFollowingPage,
  jumpToSearchResult,
  hideFollowingCollection,
  // showComments,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  const localToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const userDataObj = JSON.parse(userData);
  const account_id = userDataObj.account_id;
  const myPosts = new Posts(backendUrl, `/posts/account/${account_id}`);

  renderingMyPosts(myPosts);
  registration(backendUrl);
  login(backendUrl);
  loginStatusIsValid(localToken, backendUrl);
  jumpToSearchResult();
  logout();
});
