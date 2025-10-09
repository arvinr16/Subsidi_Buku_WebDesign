const bg = document.querySelector('.navbar-img');

bg.addEventListener('mousedown', () => {
    bg.style.cursor = 'grabbing';
});

bg.addEventListener('mouseup', () => {
    bg.style.cursor = 'grab';
});

bg.addEventListener('mouseleave', () => {
    bg.style.cursor = 'grab';
});
