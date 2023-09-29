const anim = lottie;
let isSecondAnimationPlayed = false;

anim.loadAnimation({
    container: document.querySelector('#lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/PLINKO_1.json'
});

function startNewAnimation() {
    if (!isSecondAnimationPlayed) {
        const newAnimation = bodymovin.loadAnimation({
            container: document.querySelector('#lottie-animation_red'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: './js//PLINKO_red_salut.json'
        });

        newAnimation.addEventListener('complete', function() {
            newAnimation.removeEventListener('complete', this);
        });

        isSecondAnimationPlayed = true;
    }
}

document.getElementById("registerButton").addEventListener("click", function() {
    startNewAnimation();
});


function redirectToLink() {
    setTimeout(function() {
        window.location.href = "http://sloterra.com";
    }, 3500);
}

document.getElementById("registerButton").addEventListener("click", redirectToLink);