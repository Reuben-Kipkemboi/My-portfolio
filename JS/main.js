var typed = new Typed(".typing", {
    strings: ["A Full Stack software Engineer...", "UI/UX Enthusiast...",
        "Creating web solutions..."
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });