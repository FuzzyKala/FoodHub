// export const renderingPost = async (trendingPosts) => {
//   const postList = await trendingPosts.getPosts();
//   console.log(postList);
//   renderingPhoto(postList);
//   renderingText(postList);

//   // keep this for comment system later
//   const commentNum = document.getElementById("commentNum");
// };

export const renderingPost = async (trendingPosts) => {
  try {
    const postList = await trendingPosts.getPosts();
    console.log(postList);
    if (postList.length === 0) {
      console.log("No trending posts found.");
      return;
    }
    renderingPhoto(postList);
    renderingText(postList);
  } catch (error) {
    console.error("Error rendering posts:", error);
  }
};

const renderingPhoto = (postList) => {
  const photoContainer = document.getElementById("photoContainer");
  photoContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post, i) => {
      const photo = post.getPhotoData();
      const uint8Array = new Uint8Array(photo);
      const blob = new Blob([uint8Array], { type: "image/*" });
      console.log(blob);
      const url = URL.createObjectURL(blob);
      // console.log(url);
      const img = document.createElement("img");
      img.src = url;
      img.alt = "photo";
      img.height = "auto";
      img.width = "100%";
      img.className = "img-fluid rounded mx-auto d-block mb-3";
      photoContainer.appendChild(img);
    });
  }
};
// const renderingPhoto = (postList) => {
//   const photoContainer = document.getElementById("photoContainer");
//   photoContainer.innerHTML = "";
//   if (postList != null) {
//     postList.forEach((post, i) => {
//       const photo = post.getPhotoData();
//       const uint8Array = new Uint8Array(photo);
//       const blob = new Blob([uint8Array], { type: "image/*" });
//       console.log("Created Blob:", blob); // Log created Blob object
//       const url = URL.createObjectURL(blob);
//       // console.log(url);
//       const img = document.createElement("img");
//       img.src = url;
//       img.alt = "photo";
//       img.height = "auto";
//       img.width = "100%";
//       img.className = "img-fluid rounded mx-auto d-block mb-3";
//       photoContainer.appendChild(img);
//     });
//   }
// };

const renderingText = (postList) => {
  const username = document.getElementById("username");
  const description = document.getElementById("description");
  const rate = document.getElementById("rate");
  const date = document.getElementById("date");
  username.textContent = postList[0].getUsername();
  description.textContent = postList[0].getDescription();
  rate.textContent = postList[0].getRate();
  date.textContent = postList[0].getDate();
};
