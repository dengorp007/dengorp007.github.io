document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            const url = image.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
