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
  // toggleCategoryButton();

  const localToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");

  const trending = new Posts(backendUrl, "/posts/trending");
  const following = new Posts(backendUrl, "/posts/following");

  // const account_id = await loginStatusIsValid(localToken, backendUrl);
  // const myPosts = new posts(backendUrl, `/posts/account/${account_id}`);
  // renderingMyPosts(myPosts);

  renderingTrending(trending);
  renderingFollowing(following);
  registration(backendUrl);
  login(backendUrl);
  loginStatusIsValid(localToken, backendUrl);
  hideFollowingCollection(userData);

  jumpToTrendingPage();
  jumpToFollowingPage();
  jumpToSearchResult();
  logout();
});
