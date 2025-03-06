document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    let selectedIndex = 0;

    icons[selectedIndex].classList.add('selected');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            icons[selectedIndex].classList.remove('selected');
            selectedIndex = (selectedIndex + 1) % icons.length;
            icons[selectedIndex].classList.add('selected');
        } else if (event.key === 'ArrowLeft') {
            icons[selectedIndex].classList.remove('selected');
            selectedIndex = (selectedIndex - 1 + icons.length) % icons.length;
            icons[selectedIndex].classList.add('selected');
        } else if (event.key === 'Enter') {
            const url = icons[selectedIndex].getAttribute('data-url');
            window.location.href = url;
        }
    });
});