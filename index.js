// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Navigation smooth scroll and runs after page loads
window.addEventListener("load", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            // Remove active class from all links
            navLinks.forEach((l) => l.classList.remove("active"));
            // Add active class to clicked link
            e.target.classList.add("active");

            // Get the section to scroll to
            const section = e.target.getAttribute("data-section");

            // Scroll to the appropriate section
            if (section === "about") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetSection = document.querySelector(
                    `.${section}-section`
                );
                if (targetSection) {
                    const headerHeight =
                        document.getElementById("header").offsetHeight;
                    const targetPosition =
                        targetSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            }
        });
    });

    // Adds animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observess all cards for animation
    const cards = document.querySelectorAll(
        ".skill-category, .project-card, .experience-card, .award-card"
    );
    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});
