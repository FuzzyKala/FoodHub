// export const openRegisterModal = () => {
//   const registerModal = new bootstrap.Modal(
//     document.getElementById("registerModal")
//   );
//   registerModal.show();
// };

export const closeModalAndReload = (currentModal) => {
  currentModal.hide();
  reloadHomePage(); // Reload the page to return to the home page
};

export const reloadHomePage = () => {
  location.reload(); // Reload the page to return to the home page
};
