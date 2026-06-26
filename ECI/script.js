console.log("Script Loaded");
document.addEventListener("DOMContentLoaded", function () {

    // Scroll Animation
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(
        ".hero-content, .welcome-text, .page-header, .about-box, .stat-box, .card, .step, .contact-info, .contact-form"
    ).forEach(function (element) {

        element.classList.add("hidden");
        observer.observe(element);

    });


    // Dark Mode
    const darkBtn = document.getElementById("darkBtn");

    if (darkBtn) {

        darkBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                darkBtn.innerHTML = "☀️";
            } else {
                darkBtn.innerHTML = "🌙";
            }

        });

    }


    // Contact Form Validation
    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your feedback has been submitted.");

            form.reset();

        });

    }

});