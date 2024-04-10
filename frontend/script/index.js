import { renderingPost } from "./modules/renderingPosts.js";
import { registration, login, addNewPost } from "./modules/eventHandling.js";
import { Trending } from "./modules/trending.js";

document.addEventListener("DOMContentLoaded", () => {
  const backendUrl = "https://food-hub-oamk.vercel.app/api";
  // const backendUrl = `http://localhost:10000`;

  const trending = new Trending(backendUrl);
  renderingPost(trending);
  registration(backendUrl);
  login(backendUrl);
  addNewPost(backendUrl);
});
