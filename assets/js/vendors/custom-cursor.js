(function ($) {
    ('use strict');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;
    if (isMobile) {
        $('body').addClass('is-mobile');
    }
    if ($('body').not('.is-mobile').hasClass('magic-cursor')) {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.follower');
        const cursorScale = document.querySelectorAll('.cursor-scale');
        document.addEventListener('pointermove', function (e) {
            positionCircle(e);
        });
        function positionCircle(e) {
            let relX = e.clientX;
            let relY = e.clientY;
            TweenMax.from(cursor, 0.3, { x: relX - 5, y: relY - 38 });
            TweenMax.to(follower, 0.3, { x: relX - 21, y: relY - 55 });
        }
        const cursorPlay = document.querySelectorAll('.cursor-play');
        cursorPlay.forEach((cursorPlay) => {
            cursorPlay.addEventListener('mouseenter', function () {
                document.querySelector('.cursor').classList.add('cursor-play');
            });
            cursorPlay.addEventListener('mouseleave', function () {
                document.querySelector('.cursor').classList.remove('cursor-play');
            });
        });
        const cursorDrag = document.querySelectorAll('.swiper-container');
        cursorDrag.forEach((cursorDrag) => {
            cursorDrag.addEventListener('mouseenter', function () {
                document.querySelector('.cursor').classList.add('cursor-drag');
            });
            cursorDrag.addEventListener('mouseleave', function () {
                document.querySelector('.cursor').classList.remove('cursor-drag');
            });
        });
        const cursorView = document.querySelectorAll('.cursor-view');
        cursorView.forEach((cursorView) => {
            cursorView.addEventListener('mouseenter', function () {
                document.querySelector('.cursor').classList.add('cursor-view');
            });
            cursorView.addEventListener('mouseleave', function () {
                document.querySelector('.cursor').classList.remove('cursor-view');
            });
        });
    } else {
        $('.cursor').remove();
        $('.follower').remove();
    }
})(jQuery);
