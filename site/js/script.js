//p5
var yoff = 0.0;
var canvas;
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

}
function draw() {
    tint(100, 10);
    stroke(180, 20);
    noFill();

    line(random(0,windowWidth), 0, random(0,windowWidth), windowHeight);

    if(mouseIsPressed){
        setup();
    }

}

//JQuery
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.one-principle').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){

                $(this).animate({'opacity':'1'}, 500);
                console.log("yes");

            }
        });
    });
});
