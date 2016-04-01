'use strict';

var mapOpen  = document.querySelector('.btn_open-map'),
    mapPopup = document.querySelector('.map'),
    mapclose = document.querySelector('.map_close');

mapOpen.addEventListener('click', function(e) {
    e.preventDefault();
    mapPopup.classList.add('map_show');
});

mapclose.addEventListener('click', function(e) {
    e.preventDefault();
    mapPopup.classList.remove('map_show');
});

window.addEventListener( 'keydown', function(e) {
    if (e.keyCode === 27 && mapPopup.classList.contains('map_show')) {
        mapPopup.classList.remove('map_show');
    }
});


