/*global console, alert, prompt, $ */

$(document).ready(function () {
        
    "use strict";
    
    // Nice Scroll
    
    $("html").niceScroll({
    
        cursorcolor: "#e61302",
        cursorwidth: "7px",
        cursorborder: "1px solid #61302"
    
    });
        
    $(".icon-box").click(function () {
        
        $(".box").fadeToggle();
        
    });
    
    // Scroll to Link
    
    $('.nav li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top - 50
            
        }, 1000);
        
    });
    
});