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
const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;
        const state = document.getElementById("state").value;
        const address = document.getElementById("address").value;
        const proof = document.getElementById("proof").files[0];

        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms").checked;

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (!terms) {
            alert("Please accept the Terms & Conditions.");
            return;
        }

    
        const voterData = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            dob: dob,
            gender: gender.value,
            state: state,
            address: address,
            proof: proof ? proof.name : "Not Uploaded"
        };

    
        localStorage.setItem("voterDetails", JSON.stringify(voterData));
        document.getElementById("successMessage").innerHTML = `
    <div class="success-box">
        ✅ Registration Successful!<br>
        Thank you for registering with the Election Commission of India.
    </div>
`;

        const resultCard = document.getElementById("resultCard");

        resultCard.innerHTML = `
            <div class="result-card">
                <h2>Voter Registration Details</h2>

                <p><strong>Name:</strong> ${voterData.name}</p>
                <p><strong>Email:</strong> ${voterData.email}</p>
                <p><strong>Mobile:</strong> ${voterData.phone}</p>
                <p><strong>Date of Birth:</strong> ${voterData.dob}</p>
                <p><strong>Gender:</strong> ${voterData.gender}</p>
                <p><strong>State:</strong> ${voterData.state}</p>
                <p><strong>Address:</strong> ${voterData.address}</p>
                <p><strong>Identity Proof:</strong> ${voterData.proof}</p>
            </div>
        `;

    });

}