/*Console*/
console.log('Your index.js file is loaded correctly!');


/*Preloader*/
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

/*Smooth Scroll - was not able to properly execute
$(document).ready(function(){
    $("#backtop").on('click', function(event) {
        if (this.hash !=="") {
            event.preventDefault();
            var hash= this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            },800, function(){
                window.location.hash = hash;
            });
        }
    });
});*/