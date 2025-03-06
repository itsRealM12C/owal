document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    let selectedIndex = 0;

    // Initialize the first icon as selected
    icons[selectedIndex].classList.add('selected');

    // Handle keydown events
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            // Move selection to the right
            icons[selectedIndex].classList.remove('selected');
            selectedIndex = (selectedIndex + 1) % icons.length;
            icons[selectedIndex].classList.add('selected');
        } else if (event.key === 'ArrowLeft') {
            // Move selection to the left
            icons[selectedIndex].classList.remove('selected');
            selectedIndex = (selectedIndex - 1 + icons.length) % icons.length;
            icons[selectedIndex].classList.add('selected');
        } else if (event.key === 'Enter') {
            // Open the selected URL
            const url = icons[selectedIndex].getAttribute('data-url');
            window.location.href = url;
        }
    });
});
