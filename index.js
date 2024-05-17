var navbg = $(".navbar").css("background-color");
var navbgHide="rgba(198, 199, 164, 0)"
var navbgShow = "rgba(198, 199, 164, 0.979)";
console.log(navbg);


window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        $('.navbar').addClass("scrolled");
    }
    else {
        $('.navbar').removeClass("scrolled");
    }});
// $(".navbar").css("background-color","rgb(0,0,0,0)");

// rgba(198, 199, 164, 0.979)