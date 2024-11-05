const textArray = [
    "Welcome to My Portfolio",
    "Front-End Developer",
    "Full-Stack Developer",
    "Connect With Me"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100; // Typing speed in milliseconds
const erasingSpeed = 50; // Erasing speed in milliseconds
const delayBetweenTexts = 2000; // Delay between texts when fully typed

function typeEffect() {
    const dynamicText = document.getElementById("dynamicText");
    
    // Get the current text to type
    const currentText = textArray[textIndex];
    
    if (!isDeleting) {
        // Typing effect
        dynamicText.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenTexts); // Pause before erasing
            return;
        }
    } else {
        // Erasing effect
        dynamicText.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Move to the next text
        }
    }
    
    // Set delay based on typing or erasing
    const delay = isDeleting ? erasingSpeed : typingSpeed;
    setTimeout(typeEffect, delay);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 1000));
   
