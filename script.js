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

/* Toggle flip on click */
profileFlip.addEventListener("click", (e) => {
    profileFlip.classList.toggle("flipped");
});

/* Remove flip on hover leave (desktop) */
profileFlip.addEventListener("mouseleave", () => {
    // Only remove if not on mobile
    if (window.innerWidth > 600) {
        profileFlip.classList.remove("flipped");
    }
});

/* Optional: prevent swipe/scroll interference on mobile */
profileFlip.addEventListener("touchstart", (e) => {
    profileFlip.classList.toggle("flipped");
});
