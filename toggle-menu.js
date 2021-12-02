var btn             = document.getElementById('toggle-menu'),
    btnOpen         = document.getElementById('btn-open'),
    btnClose        = document.getElementById('btn-close'),
    btnCloseReverse = document.getElementById('btn-close-reverse'),
    menuSlideOut    = document.getElementById('menu-slide-out'),
    navContent      = document.getElementById('nav-content'),
    guideText       = document.getElementById('guide-text'),
    circleContainer = document.querySelector('.main-object');

btn.addEventListener("click", function() {
    if (btn.click) {
        btn.classList.toggle("toggled-menu");
        if(btn.className==="toggled-menu") {
            btnOpen.style.opacity='0';
            btnOpen.style.transition='opacity .35s';
            btnClose.style.opacity='1';
            btnClose.style.transition='opacity .25s';
            btnCloseReverse.style.opacity='0';
            menuSlideOut.style.left='0';
            circleContainer.style.filter='blur(10px)';
            circleContainer.style.transition='0.6s 0.7s';
            navContent.style.opacity='1';
            navContent.style.transition='0.6s 1.6s';
            guideText.style.opacity='0';
        }
        else {
            btnClose.style.opacity='0';
            btnCloseReverse.style.opacity='1';
            btnOpen.style.opacity='1';
            btnOpen.style.transition='opacity .35s';
            menuSlideOut.style.left='-100%';
            circleContainer.style.filter='blur(0)';
            circleContainer.style.transition='0.6s 0.7s';
            navContent.style.opacity='0';
            navContent.style.transition='0.4s';
            menuSlideOut.style.transition='0.8s 0.8s';
            guideText.style.opacity='1';
        }
    }
 }, false);