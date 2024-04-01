const backendUrl = "food-hub-oamk.vercel.app";
// const backendUrl = 'http://localhost:10000/2'

// for rendering photo testing
const renderPost = async () => {
  const response = await fetch("backendUrl");
  const json = await response.json();

  const photoData = json.photo_data.data;
  const uint8Array = new Uint8Array(photoData);
  const blob = new Blob([uint8Array], { type: "image/jpeg" });

  // Create a data URL from the Blob
  const reader = new FileReader();
  reader.onload = function (event) {
    // Set the data URL as the src attribute of the img tag
    const img = document.querySelector("img");
    img.src = event.target.result;
  };
  reader.readAsDataURL(blob);
};

renderPost();
