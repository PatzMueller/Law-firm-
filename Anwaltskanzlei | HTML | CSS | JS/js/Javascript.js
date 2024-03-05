
// Loader 
var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });

TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-100%",
    ease: Expo.easeInOut
});

// SVG Line
let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll' , () => {
 var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

 var drawLength = pathLength * scrollPercentage;

 path.style.strokeDashoffset = pathLength - drawLength;


})


