// for rendering photo testing
// const getPhoto = async () => {
//   const response = await fetch("http://localhost:3000/72");
//   const json = await response.json();

//   const photoData = json[0].photo_data.data;
//   const uint8Array = new Uint8Array(photoData);
//   const blob = new Blob([uint8Array], { type: "image/jpeg" });

//   // Create a data URL from the Blob
//   const reader = new FileReader();
//   console.log(reader);
//   reader.onload = function (event) {
//     // Set the data URL as the src attribute of the img tag
//     const imgElement = document.querySelector("img");
//     imgElement.src = event.target.result;
//     console.log(imgElement);
//   };
//   reader.readAsDataURL(blob);
// };

// getPhoto();
