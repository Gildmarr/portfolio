//navbar animation
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        $('.navbar').addClass("scrolled");
        console.log("scrolled")
    }
    else {
        $('.navbar').removeClass("scrolled");
    }});
$(".title").hide().show(1000)

$(".relma-img").waypoint(function(){
    $(".relma-img").addClass("animate__animated animate__fadeInLeft");
    $(".relma-parag").addClass("animate__animated animate__fadeInRight");
}, {offset:"80%"});

