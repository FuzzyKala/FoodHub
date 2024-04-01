const backendUrl = "food-hub-oamk.vercel.app";
// const backendUrl = `http://localhost:10000`;

// for rendering photo testing
const renderPost = async () => {
  const response = await fetch(`${backendUrl}/posts`);
  const json = await response.json();
  const photoBuffer = json[8].photo_data;

  if (photoBuffer != null) {
    const photo = photoBuffer.data;

    const uint8Array = new Uint8Array(photo);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });

    // Create a data URL from the Blob
    const reader = new FileReader();
    reader.onload = (event) => {
      // Set the data URL as the src attribute of the img tag
      const img = document.querySelector("img");
      img.src = event.target.result;
    };
    reader.readAsDataURL(blob);
  }
};

renderPost();
