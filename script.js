// 🌸 Create floating flowers (guard if container missing)
const flowerContainer = document.querySelector('.flowers');
const flowerEmojis = ['🌸', '🌹', '🌼', '🌷', '💐'];

if (flowerContainer) {
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('span');
        flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (5 + Math.random() * 5) + 's';
        flower.style.fontSize = (20 + Math.random() * 20) + 'px';
        flowerContainer.appendChild(flower);
    }
} else {
    console.warn('No .flowers container found in DOM — skipping decorative flowers.');
}

// Popup handling with accessibility improvements
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');
const popupOpenButton = document.getElementById('open-popup');

function openPopup() {
    if (!popup) return;
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    // focus the close button for keyboard users
    if (popupClose) popupClose.focus();
}

function closePopup() {
    if (!popup) return;
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    // return focus to the button that opened it
    if (popupOpenButton) popupOpenButton.focus();
}

// Close when clicking on overlay (outside content)
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'popup') {
        closePopup();
    }
});

// Close on Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
});