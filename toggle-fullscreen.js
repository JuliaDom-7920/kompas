/* Отримати documentElement (<html>) для відображення сторінки в повноекранному режимі */
var elem    = document.documentElement,

/* Кнопка "Перейти в повноекранний режим" */
    btn     = document.getElementById('toggle-fullscreen'),
    full    = document.getElementById('full'),
    nonFull = document.getElementById('non-full');

/* Перегляд в повноекранному режимі */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Вийти з повноекранного режиму */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

btn.addEventListener("click", function() {
    if (elem.requestFullscreen) {
        openFullscreen();
        btn.classList.toggle("toggled");
        if(btn.className==="toggled") {
            full.style.opacity='0';
            full.style.transition='opacity .35s';
            nonFull.style.opacity='1';
            nonFull.style.transition='opacity .35s';
        }
        else {
            full.style.opacity='1';
            full.style.transition='opacity .35s';
            nonFull.style.opacity='0';
            nonFull.style.transition='opacity .35s';
        }
    }
    if (document.exitFullscreen) {
        closeFullscreen();
    }
 }, false);