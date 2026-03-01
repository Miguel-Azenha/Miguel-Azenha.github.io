


// Mobile menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// Video modal (YouTube)
const modal = document.getElementById("video-modal");
const closeBackdrop = document.getElementById("video-close");
const closeX = document.getElementById("video-x");
const frame = document.getElementById("video-frame");

function openVideo(videoId) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  // autoplay + modest branding
  frame.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
      title="YouTube video player"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
}

function closeVideo() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  frame.innerHTML = ""; // para parar o vídeo
}

document.querySelectorAll(".video-thumb").forEach((btn) => {
  btn.addEventListener("click", () => openVideo(btn.dataset.youtube));
});

closeBackdrop.addEventListener("click", closeVideo);
closeX.addEventListener("click", closeVideo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});