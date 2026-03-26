document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
button.addEventListener('click', () => {
console.log('Button clicked:', button.textContent);
// Add functionality for each button here
});
});
});
