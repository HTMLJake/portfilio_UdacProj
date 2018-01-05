let img = document.getElementById('logo');

function PlayAnimation() {
    bodymovin.destroy();
    bodymovin.loadAnimation({
        container: img, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'json/data.json' // the path to the animation json
    });
}

$(img).hover(function () {
    //PlayAnimation();
    bodymovin.setDirection(-1);
    bodymovin.play();
}, function () {
    bodymovin.setDirection(1);
    PlayAnimation();
});

PlayAnimation();