/* ===== SERVICE MODAL ===== */
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");
const serviceCards = document.querySelectorAll(".service-card");
const form = document.getElementById("serviceForm");
const modalBox = document.querySelector(".service-modal");

serviceCards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.querySelector("h3").textContent;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalBox.classList.remove("flipped");
    document.body.style.overflow = "auto";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modalBox.classList.add("flipped");

    setTimeout(() => {
        modal.style.display = "none";
        modalBox.classList.remove("flipped");
        form.reset();
        document.body.style.overflow = "auto";
    }, 1500);
});

/* ===== PROFILE FLIP ===== */
const profileFlip = document.querySelector(".profile-flip");
const circleWrapper = document.querySelector(".circle-wrapper");

// Toggle flip and glow on click/touch
profileFlip.addEventListener("click", () => {
    if (window.innerWidth <= 600) { // mobile glow only
        circleWrapper.classList.add("flipping");
        setTimeout(() => circleWrapper.classList.remove("flipping"), 200);
    }
    profileFlip.classList.toggle("flipped");
});

// Remove flip on desktop hover leave only
profileFlip.addEventListener("mouseleave", () => {
    if (window.innerWidth > 600) {
        profileFlip.classList.remove("flipped");
    }
});

// Automatically unflip when profile scrolls out of view (mobile)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && profileFlip.classList.contains("flipped")) {
            profileFlip.classList.remove("flipped");
        }
    });
}, { threshold: 0.1 });

observer.observe(profileFlip);
