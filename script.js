let isOpened = false;

function handleClick() {
  const envelope = document.querySelector('.envelope');
  if (!isOpened) {
    // Jika amplop belum terbuka, buka amplop
    envelope.classList.add('open');
    isOpened = true;
  } else {
    // Jika amplop sudah terbuka, pindah ke halaman2.html
    window.location.href = 'halaman2.html';
  }
}
