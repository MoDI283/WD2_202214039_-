document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const overlay = document.querySelector(".overlay");
    const overlayImg = document.querySelector(".overlay-img");
    const footer = document.querySelector("footer");
    let lastScrollY = window.scrollY;

    // 이미지 클릭 시 확대
    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            overlay.style.display = "flex"; // 오버레이 표시
            overlayImg.src = item.src; // 클릭한 이미지의 src 설정
        });
    });

    // 오버레이 클릭 시 닫기
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        overlayImg.src = ""; // 확대된 이미지 src 초기화
    });

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
