// about.js
document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.querySelectorAll(".about-me p");
    aboutText.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = 1;
            text.style.transform = "translateY(0)";
        }, index * 300);
    });
});
