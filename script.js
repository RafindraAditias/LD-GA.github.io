// Navbar start

const countDownClock = (number = 100, format = "seconds") => {
  const d = document;
  const daysElement = d.querySelector(".days");
  const hoursElement = d.querySelector(".hours");
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
      case "days":
        return timer(number * 60 * 60 * 24);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

/*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
countDownClock(20, "days");

// Navbar End

// GROOM AND BRIDE START

let image = document.querySelector("#image");
let images = ["img/10.jpg", "img/11.jpg", "img/12.jpg"];
let currentIndex = 0;

setInterval(function () {
  currentIndex = (currentIndex + 1) % images.length;
  let nextImage = new Image();
  nextImage.src = images[currentIndex];

  nextImage.onload = function () {
    // Mengatur opacity menjadi 0 untuk fadeOut
    image.style.opacity = 0.5;

    // Mengganti gambar setelah transisi selesai
    setTimeout(function () {
      image.src = nextImage.src;
      // Mengatur opacity kembali menjadi 1 untuk fadeIn
      image.style.opacity = 1;
    }, 100); // Menunggu 500ms (setengah dari waktu transisi) sebelum mengganti gambar
  };
}, 4000); // Mengganti gambar setiap 3 detik

let image2 = document.querySelector("#image2");
let images2 = ["img/13.jpg", "img/14.jpg", "img/15.jpg"];
let currentIndex2 = 0;

setInterval(function () {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  let nextImage2 = new Image();
  nextImage2.src = images2[currentIndex2];

  nextImage2.onload = function () {
    // Mengatur opacity menjadi 0 untuk fadeOut
    image2.style.opacity = 0.5;

    // Mengganti gambar setelah transisi selesai
    setTimeout(function () {
      image2.src = nextImage2.src;
      // Mengatur opacity kembali menjadi 1 untuk fadeIn
      image2.style.opacity = 1;
    }, 100); // Menunggu 500ms (setengah dari waktu transisi) sebelum mengganti gambar
  };
}, 4000); // Mengganti gambar setiap 3 detik

// GROOM AND BRIDE END

// FITUR CHAT
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-komentar");
  const komentarDiv = document.getElementById("komentar");

  form.addEventListener("submit", function(e) {
      e.preventDefault();

      const namaInput = document.getElementById("nama").value;
      const pesanInput = document.getElementById("pesan").value;

      if (namaInput && pesanInput) {
          const komentar = document.createElement("div");
          komentar.classList.add("komentar-item");
          komentar.innerHTML = `<strong>${namaInput}</strong>: ${pesanInput}`;
          komentarDiv.appendChild(komentar);

          document.getElementById("nama").value = "";
          document.getElementById("pesan").value = "";
      }
  });
});

// FITUR CHAT


