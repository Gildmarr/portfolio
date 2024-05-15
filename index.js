

$(".menu-icon-open").click(function(){

    $(".menu-dropdown").fadeIn().css("display","flex");
    
});

$(".menu-icon-close").click(function(){
    console.log("premuto");

    $(".menu-dropdown").fadeOut();
    
})

// window.onload = function() {
//     Particles.init({
//       selector: '.hero'
//     });
//   };


