$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass('active');
        $("ul.navbar-links li").slideToggle('fast');
    })
})
