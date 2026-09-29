const userBtn = document.getElementById('userBtn');
const userDropdown = document.getElementById('userDropdown');
if (userBtn && userDropdown) {
    userBtn.addEventListener('click', () => {
        userDropdown.classList.toggle('show');
    });
}
window.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu-container')) {
        userDropdown.classList.remove('show');
        }
});
