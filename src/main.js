// Grabbing effect in Header Start
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
// Grabbing effect in Header End

// Typewriter effect in Landing Start
const texts = ["Selamat datang diwebsite Gerakan Subsidi Buku",
                "Gerakan yang bertujuan untuk memberikan harga buku yang terjangkau",
                "Join with us"
];

let x = 0;
let y = 0;
let currentText = texts[y];
let isDeleting = false;
const speeds = 60;
const deleteSpeed = 40;
const delay = 700;

function typewriter() {
    const element = document.getElementById('typewriter');

    if (!isDeleting && x < currentText.length) {
        element.innerHTML = currentText.substring(0, x + 1);
        x++;
        setTimeout(typewriter, speeds);
    } else if (isDeleting && x > 0) {
        element.innerHTML = currentText.substring(0, x - 1);
        x--;
        setTimeout(typewriter, deleteSpeed);
    } else if (!isDeleting && x === currentText.length) {
        isDeleting = true;
        setTimeout(typewriter, delay);
    } else if (isDeleting && x === 0) {
        isDeleting = false;
        y = (y + 1) % texts.length;
        currentText = texts[y];
        setTimeout(typewriter, delay);
    }
}

document.addEventListener("DOMContentLoaded", typewriter);
