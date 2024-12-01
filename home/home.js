// 드롭다운 메뉴 외부 클릭 시 닫기 기능
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const isDropdown = event.target.closest('.dropdown');

    if (!isDropdown && dropdown) {
        dropdown.style.display = 'none';
    } else if (isDropdown) {
        dropdown.style.display = 'block';
    }
});
