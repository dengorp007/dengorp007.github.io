// Get elements
const image = document.getElementById('image');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');

// Show modal on image click
image.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal on close button click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


