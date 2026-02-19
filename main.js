onload = () => {
  document.body.classList.remove("container");

  // ================= MODAL VIDEO FUNCTIONALITY =================
  const loveBtn = document.getElementById("loveBtn");
  const videoModal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".video-modal__close");
  const videoOverlay = document.querySelector(".video-modal__overlay");
  const videoElement = document.querySelector(".video-modal__video");

  // Open modal ketika tombol hati diklik
  loveBtn.addEventListener("click", () => {
    videoModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close modal ketika X button diklik
  closeBtn.addEventListener("click", () => {
    videoModal.classList.remove("active");
    document.body.style.overflow = "auto";
    videoElement.pause();
  });

  // Close modal ketika overlay diklik
  videoOverlay.addEventListener("click", () => {
    videoModal.classList.remove("active");
    document.body.style.overflow = "auto";
    videoElement.pause();
  });

  // Close modal dengan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.classList.contains("active")) {
      videoModal.classList.remove("active");
      document.body.style.overflow = "auto";
      videoElement.pause();
    }
  });
};
