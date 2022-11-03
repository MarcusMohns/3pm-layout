const showToast = () => {
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
};

const startBtn = () => {
  window.scrollBy({
    top: 1050,
    behavior: 'smooth'
  });
}
