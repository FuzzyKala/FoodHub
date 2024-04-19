export const renderingTrending = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  const trendingContainer = document.getElementById("trendingPostsContainer");
  trendingContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post, index) => {
      const postItem = createTrendingItem(post, index === 0);
      trendingContainer.appendChild(postItem);
    });
  }
};

const createTrendingItem = (post, isActive) => {
  const postItem = document.createElement("div");
  postItem.className = isActive ? "carousel-item active" : "carousel-item";
  const photos = post.getPhotoData();
  // incase of no photo
  if (photos == null || photos.length === 0) {
    return postItem;
  }
  // rendering first photo only
  const photo = photos[0];

  const img = createImage(photo);
  postItem.appendChild(img);

  return postItem;
};

export const renderingFollowing = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  const trendingContainer = document.getElementById("followingPostsContainer");
  trendingContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post, index) => {
      const postItem = createFollowingItem(post, index === 0);
      trendingContainer.appendChild(postItem);
    });
  }
};

const createFollowingItem = (post, isActive) => {
  const postItem = document.createElement("div");
  postItem.className = isActive ? "carousel-item active" : "carousel-item";
  const photos = post.getPhotoData();
  // incase of no photo
  if (photos == null || photos.length === 0) {
    return postItem;
  }
  // rendering first photo only
  const photo = photos[0];

  const img = createImage(photo);
  postItem.appendChild(img);

  return postItem;
};

// renderingMyPosts
export const renderingMyPosts = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  const myPostsContainer = document.getElementById("myPostsContainer");
  myPostsContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post) => {
      const postItem = createMyPostsItem(post);
      myPostsContainer.appendChild(postItem);
    });
  }
};

export const renderingSearchResult = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  console.log("postList", postList);
  const searchResultContainer = document.getElementById(
    "searchResultContainer"
  );
  searchResultContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post) => {
      const postItem = createMyPostsItem(post);
      searchResultContainer.appendChild(postItem);
    });
  }
};

// const createMyPostsItem = (post) => {
//   // create card header
//   const headerContainer = document.createElement("div");
//   headerContainer.className = "card-header";
//   const headerRow = document.createElement("div");
//   headerRow.className = "row";
//   const titleColumn = document.createElement("div");
//   titleColumn.className = "col";
//   const title = document.createElement("h4");
//   title.className = "card-title";
//   title.textContent = post.getTitle();
//   // append to card header
//   titleColumn.appendChild(title);
//   headerRow.appendChild(titleColumn);
//   headerContainer.appendChild(headerRow);

//   // create card body
//   const bodyContainer = document.createElement("div");
//   bodyContainer.className = "card-body";
//   const description = document.createElement("p");
//   description.className = "card-text description";
//   description.textContent = post.getDescription();

//   // append to card body
//   bodyContainer.appendChild(description);

//   // create category row
//   // const categoryContainer = document.createElement("div");
//   // categoryContainer.className = "card-body";
//   // const categoryRow = document.createElement("div");
//   // categoryRow.className = "row";
//   // const categoryColumn = document.createElement("div");
//   // categoryColumn.className = "col";

//   if (post.getCategory() != null) {
//     post.getCategory().forEach((category) => {
//       const badge = document.createElement("span");
//       badge.className = "badge bg-success me-1";
//       badge.textContent = category;
//       bodyContainer.appendChild(badge);
//     });
//   }

//   // categoryRow.appendChild(categoryColumn);
//   // categoryContainer.appendChild(categoryRow);

//   // create card footer
//   const footerContainer = document.createElement("div");
//   footerContainer.className = "card-footer text-muted";
//   const footerRow = document.createElement("div");
//   footerRow.className = "row";

//   // comments column part
//   const commentsColumn = document.createElement("div");
//   commentsColumn.className = "col-auto d-flex align-items-center";

//   const commentsIcon = document.createElement("span");
//   commentsIcon.className = "material-icons";
//   commentsIcon.textContent = " comment ";

//   const commentsNum = document.createElement("span");
//   commentsNum.className = "card-text";
//   commentsNum.id = "commentsNum";
//   commentsNum.textContent = post.getCommentNum();

//   const userAvatar = document.createElement("img");
//   userAvatar.className = "userAvatar";
//   userAvatar.src = "https://www.w3schools.com/howto/img_avatar.png";
//   userAvatar.alt = "userAvatar";
//   userAvatar.style.width = "30px";
//   userAvatar.style.height = "30px";

//   const userName = document.createElement("span");
//   userName.className = "card-text m-2";
//   userName.id = "userName";
//   userName.textContent = post.getUsername();

//   // rate column part
//   const rateColumn = document.createElement("div");
//   rateColumn.className = "col-auto d-flex align-items-center";

//   const rateIcon = document.createElement("span");
//   rateIcon.className = "material-icons";
//   rateIcon.textContent = " star ";

//   const rateNum = document.createElement("span");
//   rateNum.className = "card-text";
//   rateNum.id = "rateNum";
//   rateNum.textContent = post.getRate();

//   // date column part
//   const dateColumn = document.createElement("div");
//   dateColumn.className = "col text-end";

//   const date = document.createElement("small");
//   date.className = "card-text";
//   date.textContent = post.getDate();

//   // append to card footer
//   commentsColumn.appendChild(commentsIcon);
//   commentsColumn.appendChild(commentsNum);
//   rateColumn.appendChild(rateIcon);
//   rateColumn.appendChild(rateNum);
//   dateColumn.appendChild(userAvatar);
//   dateColumn.appendChild(userName);
//   dateColumn.appendChild(date);
//   footerRow.appendChild(commentsColumn);
//   footerRow.appendChild(rateColumn);
//   footerRow.appendChild(dateColumn);
//   footerContainer.appendChild(footerRow);

//   // create card
//   const postItem = document.createElement("div");
//   postItem.className = "card";
//   postItem.appendChild(headerContainer);
//   postItem.appendChild(bodyContainer);
//   // postItem.appendChild(categoryContainer);
//   postItem.appendChild(footerContainer);
//   // get photo data
//   const photos = post.getPhotoData();
//   // incase of no photo
//   if (photos == null) {
//     return postItem;
//   }
//   // rendering first photo only
//   const photo = photos[0];
//   const img = createImage(photo);
//   bodyContainer.appendChild(img);
//   return postItem;
// };

// createImage

const createMyPostsItem = (post) => {
  console.log("post", post);
  // create card header
  const headerContainer = document.createElement("div");
  headerContainer.className = "card-header";
  // header row
  const headerRow = document.createElement("div");
  headerRow.className =
    "row  d-flex justify-content-between align-items-center";
  // user avatar column
  const userAvatarColumn = document.createElement("div");
  userAvatarColumn.className = "col-1";
  // user name column
  const userNameColumn = document.createElement("div");
  userNameColumn.className = "col-6";
  // post time column
  const postTimeColumn = document.createElement("div");
  postTimeColumn.className = "col-auto ";
  // user avatar
  const userAvatar = document.createElement("img");
  userAvatar.className = "userAvatar img rounded-circle";
  userAvatar.src = "https://www.w3schools.com/howto/img_avatar.png";
  userAvatar.alt = "userAvatar";
  userAvatar.style.width = "30px";
  userAvatar.style.height = "30px";
  // user name
  const userName = document.createElement("span");
  userName.className = "card-text m-2";
  userName.id = "userName";
  userName.textContent = post.getUsername();
  // post time
  const postTime = document.createElement("small");
  postTime.className = "card-text";
  postTime.textContent = post.getDate();

  // append to header row
  userAvatarColumn.appendChild(userAvatar);
  userNameColumn.appendChild(userName);
  postTimeColumn.appendChild(postTime);
  headerRow.appendChild(userAvatarColumn);
  headerRow.appendChild(userNameColumn);
  headerRow.appendChild(postTimeColumn);
  headerContainer.appendChild(headerRow);

  // create card body
  const bodyContainer = document.createElement("div");
  bodyContainer.className = "card-body";
  const description = document.createElement("p");
  description.className = "card-text description";
  description.textContent = post.getDescription();

  // append to card body
  bodyContainer.appendChild(description);

  // create category row
  // const categoryContainer = document.createElement("div");
  // categoryContainer.className = "card-body";
  // const categoryRow = document.createElement("div");
  // categoryRow.className = "row";
  // const categoryColumn = document.createElement("div");
  // categoryColumn.className = "col";

  if (post.getCategory() != null) {
    post.getCategory().forEach((category) => {
      const badge = document.createElement("span");
      badge.className = "badge bg-success me-1";
      badge.textContent = category;
      bodyContainer.appendChild(badge);
    });
  }

  // categoryRow.appendChild(categoryColumn);
  // categoryContainer.appendChild(categoryRow);

  // create card footer
  const footerContainer = document.createElement("div");
  footerContainer.className = "card-footer text-muted";
  const footerRow = document.createElement("div");
  footerRow.className = "row";

  // comments column part
  const commentsColumn = document.createElement("div");
  commentsColumn.className = "col-auto d-flex align-items-center";

  const commentsIcon = document.createElement("span");
  commentsIcon.className = "material-icons";
  commentsIcon.textContent = " comment ";

  const commentsNum = document.createElement("span");
  commentsNum.className = "card-text";
  commentsNum.id = "commentsNum";
  commentsNum.textContent = post.getCommentNum();

  // const userAvatar = document.createElement("img");
  // userAvatar.className = "userAvatar";
  // userAvatar.src = "https://www.w3schools.com/howto/img_avatar.png";
  // userAvatar.alt = "userAvatar";
  // userAvatar.style.width = "30px";
  // userAvatar.style.height = "30px";

  // rate column part
  const rateColumn = document.createElement("div");
  rateColumn.className = "col-auto d-flex align-items-center";

  const rateIcon = document.createElement("span");
  rateIcon.className = "material-icons";
  rateIcon.textContent = " star ";

  const rateNum = document.createElement("span");
  rateNum.className = "card-text";
  rateNum.id = "rateNum";
  rateNum.textContent = post.getRate();

  // append to card footer
  commentsColumn.appendChild(commentsIcon);
  commentsColumn.appendChild(commentsNum);
  rateColumn.appendChild(rateIcon);
  rateColumn.appendChild(rateNum);

  footerRow.appendChild(commentsColumn);
  footerRow.appendChild(rateColumn);

  footerContainer.appendChild(footerRow);

  // create card
  const postItem = document.createElement("div");
  postItem.className = "card";
  postItem.appendChild(headerContainer);
  postItem.appendChild(bodyContainer);
  // postItem.appendChild(categoryContainer);
  postItem.appendChild(footerContainer);
  // get photo data
  const photos = post.getPhotoData();
  // incase of no photo
  if (photos == null) {
    return postItem;
  }
  // rendering first photo only
  const photo = photos[0];
  const img = createImage(photo);
  bodyContainer.appendChild(img);
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
  img.className = "img-fluid rounded-3";
  img.style.height = "200px";
  img.style.width = "100%";
  return img;
};
