/* ================= MOBILE NAV ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* ================= DASHBOARD SIDEBAR ================= */

const dashboardMenu =
    document.getElementById("dashboardMenu");

const sidebar =
    document.getElementById("sidebar");

if (dashboardMenu && sidebar) {

    dashboardMenu.addEventListener("click", () => {

        sidebar.classList.toggle("show");

    });

}


/* ================= PASSWORD VISIBILITY ================= */

const passwordToggle =
    document.querySelector(".password-toggle");

if (passwordToggle) {

    passwordToggle.addEventListener("click", () => {

        const password =
            document.getElementById("loginPassword");

        if (password.type === "password") {

            password.type = "text";

            passwordToggle.textContent = "🙈";

        } else {

            password.type = "password";

            passwordToggle.textContent = "👁";

        }

    });

}


/* ================= LOGIN DEMO ================= */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        if (email && password) {

            window.location.href =
                "dashboard.html";

        }

    });

}


/* ================= REGISTER DEMO ================= */

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Account created successfully! Welcome to SchoolConnect."
        );

        window.location.href =
            "dashboard.html";

    });

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been sent."
        );

        contactForm.reset();

    });

}


/* ================= ASSIGNMENT TABS ================= */

const assignmentTabs =
    document.querySelectorAll(".assignment-tab");

assignmentTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        assignmentTabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");

    });

});


/* ================= CLOSE MOBILE SIDEBAR ================= */

document.querySelectorAll(".sidebar-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (sidebar) {

                sidebar.classList.remove("show");

            }

        });

    });


/* ================= CURRENT YEAR ================= */

document.querySelectorAll(".current-year")
    .forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });