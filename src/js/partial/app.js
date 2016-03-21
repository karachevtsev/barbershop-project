// write your code here
$(function () { 
    $('.menu__link').each(function () {
        var location = window.location.href; 
        var link = this.href;
        if(location == link) {
            $(this).addClass('menu__link_current'); 
        }
    });
});

