const scrollContainer = document.querySelector('.scroll-wrapper');

// Untuk drag dengan mouse
let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  scrollContainer.classList.add('dragging');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollContainer.classList.remove('dragging');
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollContainer.classList.remove('dragging');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // Atur kecepatan scroll
  scrollContainer.scrollLeft = scrollLeft - walk;
});

// Untuk swipe di mobile
let touchStartX = 0;
let touchScrollLeft = 0;

scrollContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX - scrollContainer.offsetLeft;
  touchScrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener(
  'touchmove',
  (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - touchStartX) * 1.5;
    scrollContainer.scrollLeft = touchScrollLeft - walk;
  },
  { passive: false }
);

// Smooth scroll dengan mouse wheel
scrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollContainer.scrollBy({ left: e.deltaY * 2, behavior: 'smooth' });
});

// kontak
document.getElementById('year').innerText = new Date().getFullYear();

// login dan register
function toggleForm() {
  let loginForm = document.getElementById('login-form');
  let registerForm = document.getElementById('register-form');
  let formTitle = document.getElementById('form-title');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    formTitle.innerText = 'Login';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    formTitle.innerText = 'Register';
  }
}

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form submit default
  window.location.href = 'form_pengaduan.html'; // Redirect ke form pengaduan
});

// tabel pengaduan
document.addEventListener("DOMContentLoaded", function () {
  // Simulasi role pengguna ('user' atau 'admin')
  let role = "admin"; // Ubah ke "user" jika ingin tombol muncul

  let btnTambah = document.getElementById("btnTambah");

  if (role === "admin" && btnTambah) {
      btnTambah.style.display = "none";
  }
});
