// on scroll down add the class bg-light-shadow-transparent-gradient-shadow to #navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('bg-light-shadow-transparent-gradient-shadow');
    } else {
        $('#navbar').removeClass('bg-light-shadow-transparent-gradient-shadow');
    }
})