// const backendUrl = "food-hub-oamk.vercel.app";
const backendUrl = `http://localhost:10000`;

// Fetch the post data from the backend
const renderPost = async () => {
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

// Function to open the registration modal
const openRegisterModal = () => {
  const registerModal = new bootstrap.Modal(
    document.getElementById("registerModal"),
    {
      keyboard: false,
    }
  );
  registerModal.show();
};

// Get the register button
const registerButton = document.querySelector("#registerButton");

// Add event listener to the register button
registerButton.addEventListener("click", openRegisterModal);

// Function to reload the page
const reloadHomePage = () => {
  location.reload(); // Reload the page to return to the home page
};

// Attach event listener to the modal's "hidden.bs.modal" event
const registerModalElement = document.getElementById("registerModal");
registerModalElement.addEventListener("hidden.bs.modal", reloadHomePage);

// Function to close the modal and reload the page
const closeModalAndReload = () => {
  const registerModal = bootstrap.Modal.getInstance(
    document.getElementById("registerModal")
  );
  registerModal.hide();
  reloadHomePage(); // Reload the page to return to the home page
};

// Get the submit button inside the registration form modal
const registrationForm = document.getElementById("registrationForm");
const submitButton = registrationForm.querySelector("button[type='submit']");
// Add event listener to the submit button
submitButton.addEventListener("click", closeModalAndReload);

renderPost();
