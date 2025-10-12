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
const speed = 80;
const deleteSpeed = 50;
const delay = 1000;
