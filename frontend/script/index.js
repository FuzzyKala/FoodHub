import { renderingPost } from "./modules/renderingPosts.js";
import { eventHandling } from "./modules/eventHandling.js";
import { Trending } from "./modules/trending.js";

// const backendUrl = "food-hub-oamk.vercel.app";
const backendUrl = `http://localhost:10000`;

const trending = new Trending(backendUrl);
renderingPost(trending);
