const login = document.querySelector(".content-login");
const daftar = document.querySelector(".content-daftar");
const loginButton = document.querySelector(".login");
const daftarButton = document.querySelector(".daftar");

// Fungsi berganti Bar Login & Daftar
function toggleDisplay(elementToShow, elementToHide) {
  elementToShow.style.display = "block";
  elementToHide.style.display = "none";
}

loginButton.addEventListener("click", () => {
  toggleDisplay(login, daftar);
  loginButton.style.backgroundColor = "#c1121f";
  daftarButton.style.backgroundColor = "#e41c2a";
});

daftarButton.addEventListener("click", () => {
  toggleDisplay(daftar, login);
  daftarButton.style.backgroundColor = "#c1121f";
  loginButton.style.backgroundColor = "#e41c2a";
});

function berhasilLogin() {
  alert("Selamat Berhasil Login!");
}
function berhasilDaftar() {
  alert("Selamat Berhasil Daftar!");
}

// Fungsi Teks
const elementTeks = document.querySelector(".teksType");
const teksNow = "Selamat Datang Di Web Saya 😀";
const speedTeks = 100;
const teksUlang = 2000;

let index = 0;

function typeTeks() {
  if (index < teksNow.length) {
    elementTeks.innerHTML += teksNow.charAt(index);
    index++;
    setTimeout(typeTeks, speedTeks);
  } else {
    setTimeout(resetTeks, teksUlang);
  }
}

function resetTeks() {
  elementTeks.innerHTML = "";
  index = 0;
  typeTeks();
}

typeTeks();
