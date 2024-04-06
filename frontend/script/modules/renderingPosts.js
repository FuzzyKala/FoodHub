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
  // rendering first photo only
  const photo = photos[0];
  const img = createImage(photo);
  postItem.appendChild(img);
  // photos.forEach((photo) => {
  //   const img = createImage(photo);
  //   postItem.appendChild(img);
  // });
  return postItem;
};

const createImage = (photo) => {
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
