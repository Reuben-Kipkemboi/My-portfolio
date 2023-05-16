var typed = new Typed(".typing", {
    strings: ["A Full Stack software Engineer...", "UI/UX Enthusiast...",
        "Creating web solutions..."
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

$(document).ready(function() {
    setTimeout(function() {
      $('.navbar').addClass('animate__animated animate__backInDown'); // Add the animation classes after the delay
    }, 4); // Delay in milliseconds (adjust the value as needed)
  });




  