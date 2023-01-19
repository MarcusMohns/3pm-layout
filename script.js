const showToast = () => {
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
};

const startBtn = (value) => {
  window.scrollTo({
    top: value,
    behavior: 'smooth'
  });
}
