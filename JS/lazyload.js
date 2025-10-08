// Lazy load video when it enters viewport
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".lazy-video");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector("source");
        source.src = source.dataset.src;
        video.load();
        video.play();
        obs.unobserve(video);
      }
    });
  }, {
    threshold: 0.5
  });

  videos.forEach(video => observer.observe(video));
});
