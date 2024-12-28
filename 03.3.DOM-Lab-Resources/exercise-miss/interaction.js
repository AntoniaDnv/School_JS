const buttonHeight = 50; // Adjust as per actual button height
const buttonWidth = 150; // Adjust as per actual button width

// Ensure the positions respect the container's dimensions
const container = document.querySelector('.phone-check-container');
const containerRect = container.getBoundingClientRect();
const maxWidth = containerRect.width - buttonWidth; // Width constraints
const maxHeight = containerRect.height - buttonHeight; // Height constraints

// Function to generate a random position within bounds
function generateRandomPosition() {
    let randomLeft, randomTop;

    // Calculate random positions within the container
    randomLeft = Math.random() * maxWidth;
    randomTop = Math.random() * maxHeight;

    return { randomLeft, randomTop };
}

// Generate random phone numbers
function generateRandomPhoneNumber() {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

const phoneNumberElement = document.getElementById('phone-number');
const noButton = document.getElementById('no-button');
const evasiveButton = document.getElementById('yes-button');

// Event: Update phone number when "No" is clicked
noButton.addEventListener('click', () => {
    const newPhoneNumber = generateRandomPhoneNumber();
    phoneNumberElement.textContent = newPhoneNumber;
});

// Event: Move "Yes" button on hover
evasiveButton.addEventListener('mouseover', () => {
    const { randomLeft, randomTop } = generateRandomPosition();

    // Apply the new positions
    evasiveButton.style.left = `${randomLeft}px`;
    evasiveButton.style.top = `${randomTop}px`;
});

evasiveButton.addEventListener('onClick', () => {
    alert('Invalid phone number!');
})