/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            if ((target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')).length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#sideNav'
    });
})(jQuery);

$(document).ready(function() {
    // Add click event listener to the circles
    $('.list-social-icons .fa-stack').click(function() {
        var $this = $(this);
        // Toggle a class to change the color to gray when clicked
        $this.toggleClass('clicked');
    });
});

$(document).ready(function() {
    // Function to hide the navbar when clicking outside
    $(document).on("click", function(event) {
        var navbar = $("#sideNav");
        // Check if the click event target is not within the navbar or its toggle button
        if (!navbar.is(event.target) && navbar.has(event.target).length === 0 && !$(".navbar-toggler").is(event.target)) {
            // Collapse the navbar if it's currently expanded
            if ($(".navbar-collapse").hasClass("show")) {
                $(".navbar-toggler").click();
            }
        }
    });

    // Function to hide the navbar when scrolling
    $(window).scroll(function() {
        var navbarCollapse = $(".navbar-collapse");
        // Check if the navbar is currently expanded
        if (navbarCollapse.hasClass("show")) {
            // Collapse the navbar
            $(".navbar-toggler").click();
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to update the counter
    async function updateCounter() {
      try {
        let response = await fetch("https://sr3qyx3ngogrh3pyy33n3mlamy0rseze.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counterElement.innerText = data;
      } catch (error) {
        console.error("Error updating counter:", error);
      }
    }
  
    // Select the counter element
    var counterElement = document.getElementById("counter-number");
  
    // Call the updateCounter function when the DOM is loaded
    updateCounter();
  });