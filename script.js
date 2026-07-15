const API_URL = "http://localhost:5000"; // server run wenawa nam

async function loadVideos() {
  try {
    const res = await fetch(`${API_URL}/videos`);
    const videos = await res.json();

    const container = document.getElementById("video-list"); // oya video penwana div eka
    container.innerHTML = "";

    videos.forEach(video => {
      container.innerHTML += `
        <div class="video-card">
          <video width="300" controls src="${video.url}"></video>
          <p>${video.name}</p>
        </div>
      `;
    });
  } catch (err) {
    console.log("Server off da?", err);
  }
}

loadVideos();
