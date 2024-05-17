//navbar animation
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        $('.navbar').addClass("scrolled");
    }
    else {
        $('.navbar').removeClass("scrolled");
    }});
$(".title").hide().show(1000)


