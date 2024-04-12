export const renderingTrending = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  renderingTrendingContainer(postList);
};

const renderingTrendingContainer = (postList) => {
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

// renderingMyPosts
export const renderingMyPosts = async (PostsObj) => {
  const postList = await PostsObj.getPosts();
  renderingMyPostsContainer(postList);
};

const renderingMyPostsContainer = (postList) => {
  const myPostsContainer = document.getElementById("myPostsContainer");
  myPostContainer.innerHTML = "";
  if (postList != null) {
    postList.forEach((post) => {
      const postItem = createMyPostsItem(post);
      myPostContainer.appendChild(postItem);
    });
  }
};
const createMyPostsItem = (post) => {
  // create card header
  const headerContainer = document.createElement("div");
  headerContainer.className = "card-header";
  const headerRow = document.createElement("div");
  headerRow.className = "row";
  const titleColumn = document.createElement("div");
  titleColumn.className = "col";
  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = post.getTitle();
  const usernameColumn = document.createElement("div");
  usernameColumn.className = "col-auto";
  const username = document.createElement("small");
  username.className = "text-muted";
  username.textContent = post.getUsername();

  // create card body
  const bodyContainer = document.createElement("div");
  bodyContainer.className = "card-body";
  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = post.getDescription();

  // create category row
  const categoryContainer = document.createElement("div");
  categoryContainer.className = "card-body";
  const categoryRow = document.createElement("div");
  categoryRow.className = "row";
  const categoryColumn = document.createElement("div");
  categoryColumn.className = "col";

  post.getCategory().forEach((category) => {
    const badge = document.createElement("span");
    badge.className = "badge bg-primary me-1";
    badge.textContent = category;
    categoryColumn.appendChild(badge);
  });
  categoryRow.appendChild(categoryColumn);
  categoryContainer.appendChild(categoryRow);

  // create post footer
  const footerContainer = document.createElement("div");
  footerContainer.className = "card-footer text-muted";
  const footerRow = document.createElement("div");
  footerRow.className = "row";
  const commentColumn = document.createElement("div");
  commentColumn.className = "col";
  const commentNum = document.createElement("small");
  commentNum.className = "card-text";
  commentNum.textContent = post.getCommentNum() + " comments";
  const date = document.createElement("small");
  date.className = "card-text";
  const dateColumn = document.createElement("div");
  dateColumn.className = "col-auto";
  date.textContent = post.getDate();

  const photos = post.getPhotoData();

  // incase of no photo
  if (photos == null || photos.length === 0) {
    return postItem;
  }
  // rendering first photo only
  const photo = photos[0];

  const img = createImage(photo);

  // append to card header
  titleColumn.appendChild(title);
  usernameColumn.appendChild(username);
  headerRow.appendChild(titleColumn);
  headerRow.appendChild(usernameColumn);
  headerContainer.appendChild(headerRow);
  // append to card body
  bodyContainer.appendChild(description);
  bodyContainer.appendChild(img);
  // append to card footer
  commentColumn.appendChild(commentNum);
  dateColumn.appendChild(date);
  footerRow.appendChild(commentColumn);
  footerRow.appendChild(dateColumn);
  footerContainer.appendChild(footerRow);

  // create card
  const postItem = document.createElement("div");
  postItem.className = "card mb-3";
  postItem.appendChild(headerContainer);
  postItem.appendChild(bodyContainer);
  postItem.appendChild(categoryContainer);
  postItem.appendChild(footerContainer);
  return postItem;
};

// createImage
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
