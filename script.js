
// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

        if (navbar.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}

// Close menu when clicking a navigation link

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
            menuBtn.textContent = "☰";
        }

    });

});


// 2. HOME PAGE TYPING ANIMATION

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "IT Student",
        "Web Developer",
        "Programmer",
        "Creative Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const word = words[wordIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typing.textContent = word.substring(0, charIndex);

        let speed = deleting ? 60 : 110;

        if (!deleting && charIndex === word.length) {

            deleting = true;
            speed = 1200;

        } else if (deleting && charIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}


// 3. CONTACT FORM DEMO

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const message = document.getElementById("formMessage");

        message.textContent =
            "Thank you " + name +
            "! Your message was entered successfully. " +
            "Connect an email service to receive it.";

        contactForm.reset();

    });

}


// 4. CURRENT YEAR

document.querySelectorAll("footer").forEach(function (footer) {

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );

});
