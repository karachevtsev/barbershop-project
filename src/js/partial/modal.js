'use strict';

var link     = document.querySelector('.login__link'),
    popup    = document.querySelector('.modal'),
    close    = document.querySelector('.modal__close'),
    login    = popup.querySelector('[name = login]'),
    password = popup.querySelector('[name = password]'),
    form     = popup.querySelector('form'),
    storage  = localStorage.getItem('login');

link.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('modal_show');
    login.focus();

    if (!storage) {
        login.focus();
    } else {
        login.value = storage;
        password.focus();
    }
});

close.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('modal_show');
    popup.classList.remove('modal_error');
});

form.addEventListener('submit', function(e) {
    if ( !(login.value && password.value) ) {
        e.preventDefault();
        popup.classList.add('modal_error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

window.addEventListener( 'keydown', function(e) {
    if (e.keyCode === 27 && popup.classList.contains('modal_show')) {
        popup.classList.remove('modal_show');
        popup.classList.remove('modal_error');
    }
});


