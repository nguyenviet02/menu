
const body = document.querySelector("body");
const menu_items = document.querySelectorAll(".menu__container__item");

const menu_right_btn_open = document.querySelector(".menu--right__button");
const menu_right_btn_close = document.querySelector(".main-menu__btn");
const menu_right = document.querySelector(".main-menu");

const menu_bottom = document.querySelector(".menu--bottom");
const menu_bottom__close = document.querySelector(".menu--bottom__close");
const menu_bottom__open = document.querySelector(".menu--bottom__open");

const map_btn = document.querySelector(".map");
const map_iframe = document.querySelector(".map-iframe");
const map_close = document.querySelector(".map-close");

const info_btn = document.querySelector(".info");
const info_iframe = document.querySelector(".info-iframe");
const info_close = document.querySelector(".info-iframe-close");

const fullscreen_btn = document.querySelector(".fullscreen");
const fullscreen_desc = document.querySelector(".fullscreen-desc");

const video_player = document.querySelector(".video-player");
const video_close = document.querySelector(".video-close");
const main_video = document.querySelector(".main-video");
const video_player_background = document.querySelector(".video-player-background");
const video_1 = document.querySelector(".video-1");
const video_2 = document.querySelector(".video-2");
const link_video1 = "https://www.youtube.com/embed/R9At2ICm4LQ"; // Change ID to change video
const link_video2 = "https://www.youtube.com/embed/tgbNymZ7vqY";

const main_audio = document.querySelector(".main-audio");
const sound = document.querySelector(".sound");
const sound_desc = document.querySelector(".sound-desc");

// Hiện submenu menu bottom
menu_items.forEach(item => {
  item.addEventListener("click", () => {
    item.querySelector(".sub-menu").classList.toggle("active");
  })
});

// Đóng mở menu bottom
menu_bottom__close.addEventListener("click", () => {
  menu_bottom.classList.remove("active");
  menu_bottom__open.classList.add("active");
});
menu_bottom__open.addEventListener("click", () => {
  menu_bottom.classList.add("active");
  menu_bottom__open.classList.remove("active");
})

// Đóng mở menu phải
menu_right_btn_open.addEventListener("click", () => {
  menu_right.classList.add("active");
  menu_right_btn_open.style.display = "none";
});
menu_right_btn_close.addEventListener("click", () => {
  menu_right.classList.remove("active");
  menu_right_btn_open.style.display = "flex";
})

// Đóng mở map iframe
map_btn.addEventListener("click", () => {
  console.log("clicked");
  map_iframe.classList.toggle("active");
});
map_close.addEventListener("click", () => {
  map_iframe.classList.remove("active");
});
map_close.addEventListener("touchstart", () => {
  map_iframe.classList.remove("active");
});

// Đóng mở info iframe
info_btn.addEventListener("click", () => {
  info_iframe.classList.toggle("active");
});
info_close.addEventListener("click", () => {
  info_iframe.classList.remove("active");
});

// Đóng mở video player
video_1.addEventListener("click", () => {
  video_player.classList.add("active");
  main_video.src = `${link_video1}?autoplay=1`;
  main_audio.pause();
});
video_2.addEventListener("click", () => {
  video_player.classList.add("active");
  main_video.src = `${link_video2}?autoplay=1`;
  main_audio.pause();
});
video_player_background.addEventListener("click", () => {
  video_player.classList.remove("active");
  main_video.src = "";
  main_audio.play();
});
video_close.addEventListener("click", () => {
  video_player.classList.remove("active");
  main_video.src = "";
  main_audio.play();
});


// Bật tắt âm thanh
sound.addEventListener("click", () => {
  if (main_audio.paused) {
    main_audio.play();
    main_audio.muted = false;
    sound_desc.innerText = "Tắt nhạc nền";
  } else {
    main_audio.pause();
    main_audio.muted = true;
    sound_desc.innerText = "Bật nhạc nền";
  }
})

let isFullscreen = false;
function openFullscreen() {
  if (body.requestFullscreen) {
    body.requestFullscreen();
  } else if (body.webkitRequestFullscreen) { /* Safari */
    body.webkitRequestFullscreen();
  } else if (body.msRequestFullscreen) { /* IE11 */
    body.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 0);
});

// Heart
const apiURL = "https://mydtb.herokuapp.com/liked";
let value = 0;
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    value = data[0].value;
    heart_count.innerHTML = value;
  })

function change(count) {
  const data = {
    value: count
  };
  fetch(apiURL + "/0", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
};
const heart = document.querySelector(".heart");
const heart_icon = document.querySelector(".heart-icon");
const heart_count = document.querySelector(".heart-count");
heart.addEventListener("click", () => {
  heart_icon.classList.add("active");
  heart_icon.style.animationPlayState = "running";
  value++;
  heart_count.innerText = value;
  change(value);
  setTimeout(() => {
    heart_icon.classList.remove("active");
    heart_icon.style.color = "#ff0000";
    heart_icon.style.scale = "1.6";
    heart_icon.style.animationPlayState = "paused";
  }, 500);
});



