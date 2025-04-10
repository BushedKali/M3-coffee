// Interactive Metro Map
const metroMap = document.getElementById('metroMap');
const stations = document.querySelectorAll('.metro-station');

stations.forEach(station => {
    station.addEventListener('click', function() {
        const tooltip = this.querySelector('.station-tooltip');
        alert(`Ви обрали станцію: ${tooltip.textContent}`);
    });
});

// Animate menu items on scroll
const menuItems = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

menuItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.5s ease';
    observer.observe(item);
});

// Coffee cup animation
const coffeeCup = document.getElementById('coffeeCup');
let rotation = 0;

coffeeCup.addEventListener('click', function() {
    rotation += 360;
    this.style.transform = `rotate(${rotation}deg)`;
    alert('☕ Ваша кава готується! Очікуйте дзвінка від нашого баристи!');
});

// Form submission
const form = document.getElementById('reservationForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо за заявку! Ми звяжемося з вами найближчим часом.');
    form.reset();
});

// Train sound effect (optional)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        console.log('🚇 *звук метро*');
    }, 15000);
});