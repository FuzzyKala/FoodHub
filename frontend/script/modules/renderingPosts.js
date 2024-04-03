// renderingPosts.js
export const renderPost = async () => {
  const response = await fetch(`${backendUrl}/posts`);
  const json = await response.json();
  console.log(json);
  const photoBuffer = json[5].photo_data;
  if (photoBuffer != null) {
    const photo = photoBuffer.data;
    const uint8Array = new Uint8Array(photo);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.querySelector("img");
      img.src = event.target.result;
      img.setAttribute("width", "200");
    };
    reader.readAsDataURL(blob);
  }
};
