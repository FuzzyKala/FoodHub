// export const openRegisterModal = () => {
//   const registerModal = new bootstrap.Modal(
//     document.getElementById("registerModal")
//   );
//   registerModal.show();
// };

export const closeModal = (currentModal) => {
  currentModal.hide();
  // reloadPage(); // Reload the page to return to the home page
};

export const reloadPage = () => {
  location.reload(); // Reload the page to return to the home page
};
