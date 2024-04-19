import { posts } from "./modules/posts.js";
import { renderingSearchResult } from "./modules/renderingPosts.js";
import {
  registration,
  login,
  logout,
  loginStatusIsValid,
  jumpToSearchResult,
} from "./modules/eventHandling.js";

const backendUrl = `http://localhost:10000`;

document.addEventListener("DOMContentLoaded", async () => {
  const localToken = localStorage.getItem("token");
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("keyword");
  const searchResult = new posts(backendUrl, `/posts/search/${keyword}`);
  jumpToSearchResult();
  renderingSearchResult(searchResult);
  loginStatusIsValid(localToken, backendUrl);
  registration(backendUrl);
  login(backendUrl);
  logout();
});
