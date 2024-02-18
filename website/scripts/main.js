// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
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

