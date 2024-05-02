import {
  renderingTrendingCollection,
  renderingFollowingCollection,
  renderingMyPosts,
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
  // showComments,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  // toggleCategoryButton();

  const localToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const following_id = localStorage.getItem("following_id");

  const trending = new Posts(backendUrl, "/posts/trending");

  renderingTrendingCollection(trending);
  registration(backendUrl);
  login(backendUrl);
  loginStatusIsValid(localToken, backendUrl);
  hideFollowingCollection(userData);

  jumpToTrendingPage();
  jumpToFollowingPage();
  jumpToSearchResult();
  logout();

  if (userData) {
    const userDataObj = JSON.parse(userData);
    const account_id = userDataObj.account_id;
    const following = new Posts(backendUrl, `/posts/following/${account_id}`);
    renderingFollowingCollection(following);
  }
});
