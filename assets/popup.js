const openBtn = document.querySelector('.open-btn');
const closeBtns = document.querySelectorAll('.popup__close-btn');
const popup = document.querySelector('.popup');

openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtns.forEach(closeBtn => {
	closeBtn.addEventListener('click', () => {
		popup.style.display = 'none';
	})
});

window.addEventListener('click', (event) => {
	if (event.target == popup) {
		popup.style.display = 'none';
	}
});
let doShow = localStorage.getItem("show_recent_changes");
        if (doShow == null) {
            popup.style.display = 'flex';
            localStorage.setItem("show_recent_changes", false);
        } else {
            
        }