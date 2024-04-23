export const renderingAvatar = (userData) => {
  if (!userData) {
    // showUserAvatar(null);
  } else {
    const photoData = JSON.parse(userData).avatar;
    const img = createUserAvatar(photoData);
    img.setAttribute("data-bs-toggle", "dropdown");
    img.setAttribute("aria-expanded", "false");
    const userAvatarButton = document.getElementById("userAvatarButton");
    userAvatarButton.appendChild(img);
    // showUserAvatar(userData);
  }
};

const createUserAvatar = (photo) => {
  const photoData = photo.data;
  const uint8Array = new Uint8Array(photoData);
  const blob = new Blob([uint8Array], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  const img = document.getElementById("userAvatar");
  img.src = url;
  // img.alt = "userAvatar";
  // img.className = "rounded-circle border border-2 border-black d-none";
  // img.id = "userAvatar";
  // img.setAttribute("data-bs-toggle", "offcanvas");
  // img.setAttribute("data-bs-target", "#navOffCanvas");
  // img.setAttribute("aria-expanded", "false");
  // img.setAttribute("role", "button");
  return img;
};

// const showUserAvatar = (userLoginSuccessfully) => {
//   const userAvatar = document.getElementById("userAvatar");
//   if (userLoginSuccessfully) {
//     userAvatar.classList.remove("d-none");
//   } else {
//     userAvatar.classList.add("d-none");
//   }
// };
