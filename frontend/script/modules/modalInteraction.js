export const openRegisterModal = () => {
  const registerModal = new bootstrap.Modal(
    document.getElementById("registerModal"),
    {
      keyboard: false,
    }
  );
  registerModal.show();
};

export const closeModalAndReload = () => {
  const registerModal = bootstrap.Modal.getInstance(
    document.getElementById("registerModal")
  );
  registerModal.hide();
  reloadHomePage(); // Reload the page to return to the home page
};
