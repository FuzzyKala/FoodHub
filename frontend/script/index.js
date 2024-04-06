import { renderingPost } from "./modules/renderingPosts.js";
import { eventHandling } from "./modules/eventHandling.js";
import { Trending } from "./modules/trending.js";

// const backendUrl = "food-hub-oamk.vercel.app";
const backendUrl = `http://localhost:10000`;

const trending = new Trending(backendUrl);
renderingPost(trending);

// const renderingPost = async () => {
//   const postList = await fetch(`${backendUrl}/posts/38`);
//   const postListJson = await postList.json();
//   console.log("postListJson:", postListJson);
//   const photoContainer = document.getElementById("photoContainer");
//   photoContainer.innerHTML = "";
//   const photoData = postListJson.photo_data;
//   console.log("photoData:", photoData);
//   console.log("Binary", photoData[0].data);
//   const uint8Array = new Uint8Array(photoData[0].data);
//   console.log("Uint8Array:", uint8Array);
//   const blob = new Blob([uint8Array], { type: "image/jpeg" });
//   console.log("Created Blob:", blob);
//   const url = URL.createObjectURL(blob);
//   console.log(url);
//   const img = document.createElement("img");
//   img.src = url;
//   img.alt = "photo";
//   img.height = "auto";
//   img.width = "100%";
//   img.className = "img-fluid rounded mx-auto d-block mb-3";
//   photoContainer.appendChild(img);
// };

// renderingPost();
