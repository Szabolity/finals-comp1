// Toggle Gallery Visibility
document.getElementById('toggle-button').addEventListener('click', function () {
    const gallery = document.getElementById('gallery');
    if (gallery.style.display === 'none') {
        gallery.style.display = 'grid';
        this.textContent = 'Hide Gallery';
    } else {
        gallery.style.display = 'none';
        this.textContent = 'Show Gallery';
    }
});

// Add Transition Effect for Paragraphs
const paragraphs = document.querySelectorAll('.transition');
window.addEventListener('scroll', () => {
    paragraphs.forEach(paragraph => {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            paragraph.classList.add('visible');
        }
    });
});
