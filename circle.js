document.addEventListener('mousemove', function (event) {
    var div     = document.querySelector("#circle"),
        bb      = div.getBoundingClientRect(),
        cx      = bb.left + bb.width / 2, 
        cy      = bb.top + bb.height / 2,
        angle   = Math.atan2(event.y - cy, event.x - cx);
    
    div.style.transform = "rotate(" + angle + "rad)"
})