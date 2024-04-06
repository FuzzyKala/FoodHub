// export const renderingPost = async (trendingPosts) => {
//   const postList = await trendingPosts.getPosts();
//   renderingPhoto(postList);
//   renderingText(postList);

//   // keep this for comment system later
//   const commentNum = document.getElementById("commentNum");
// };

// const renderingPhoto = (postList) => {
//   const postContainer = document.getElementById("postContainer");
//   postContainer.innerHTML = "";
//   if (postList != null) {
//     postList.forEach((post) => {
//       const photos = post.getPhotoData();
//       console.log("photo:", photos);

//       photos.forEach((photo) => {
//         const photoData = photo.data;
//         const uint8Array = new Uint8Array(photoData);
//         const blob = new Blob([uint8Array], { type: "image/jpeg" });
//         const url = URL.createObjectURL(blob);
//         // console.log(url);
//         const div = document.createElement("div");
//         div.className = "carousel-item";
//         div.style.height = "400px";
//         div.style.width = "100%";
//         div.style.overflow = "hidden";
//         div.style.position = "relative";

//         const img = document.createElement("img");
//         img.src = url;
//         img.alt = "photo";
//         img.height = "auto";
//         img.width = "100%";
//         img.className = "img-fluid rounded mx-auto d-block mb-3";

//         div.appendChild(img);
//         postContainer.appendChild(div);
//       });
//     });
//   }
// };

// const renderingText = (postList) => {
//   const username = document.getElementById("username");
//   const description = document.getElementById("description");
//   const rate = document.getElementById("rate");
//   const date = document.getElementById("date");
//   username.textContent = postList[0].getUsername();
//   description.textContent = postList[0].getDescription();
//   rate.textContent = postList[0].getRate();
//   date.textContent = postList[0].getDate();
// };

export const renderingPost = async (trendingPosts) => {
  const postList = await trendingPosts.getPosts();
  renderingPostContainer(postList);
};

const renderingPostContainer = (postList) => {
  const postContainer = document.getElementById("postContainer");
  postContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post, index) => {
      const postItem = createPostItem(post, index === 0);
      postContainer.appendChild(postItem);
    });
  }
};

const createPostItem = (post, isActive) => {
  const postItem = document.createElement("div");
  postItem.className = isActive ? "carousel-item active" : "carousel-item";
  const photos = post.getPhotoData();
  photos.forEach((photo) => {
    const img = createImage(photo);
    postItem.appendChild(img);
  });
  return postItem;
};

const createImage = (photo) => {
  console.log(photo);
  const photoData = photo.data;
  const uint8Array = new Uint8Array(photoData);
  const blob = new Blob([uint8Array], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = url;
  img.alt = "photo";
  img.className = "img-fluid rounded mx-auto d-block mb-3";
  img.style.height = "300px";
  img.style.width = "100%";
  return img;
};
