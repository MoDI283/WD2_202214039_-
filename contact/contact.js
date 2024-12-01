document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    let lastScrollY = window.scrollY;

    // 스크롤 이벤트로 푸터 보이기/숨기기
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // 스크롤 내릴 때 푸터 숨김
            footer.classList.add("hidden");
            footer.classList.remove("visible");
        } else {
            // 스크롤 올릴 때 푸터 표시
            footer.classList.add("visible");
            footer.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});
