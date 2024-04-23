export const renderingAvatar = (userData) => {
  if (!userData) {
    return;
  } else {
    const photoData = JSON.parse(userData).avatar;
    const img = createUserAvatar(photoData);
    img.setAttribute("data-bs-toggle", "dropdown");
    img.setAttribute("aria-expanded", "false");
    const profileContainer = document.getElementById("profileContainer");
    profileContainer.appendChild(img);
    showUserAvatar(userData);
  }
};

const createUserAvatar = (photo) => {
  const photoData = photo.data;
  const uint8Array = new Uint8Array(photoData);
  const blob = new Blob([uint8Array], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  const img = document.createElement("img");
  img.src = url;
  img.alt = "userAvatar";
  img.className = "rounded-circle border border-3 border-black d-none";
  img.id = "userAvatar";
  //   img.style.height = "200px";
  //   img.style.width = "100%";
  return img;
};

const showUserAvatar = (userLoginSuccessfully) => {
  const userAvatar = document.getElementById("userAvatar");
  if (userLoginSuccessfully) {
    userAvatar.classList.remove("d-none");
  } else {
    userAvatar.classList.add("d-none");
  }
};
