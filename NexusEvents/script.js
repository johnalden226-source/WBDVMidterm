let cart = [];

function scrollToEvents() {
document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
}

function orderTicket(eventName) {
cart = [{ name: eventName, price: 49, quantity: 1 }];
updateCartDisplay();
document.getElementById('cartModal').style.display = 'block';
}

function addToCart(ticketType, price) {
const existingItem = cart.find(item => item.name === ticketType);

if (existingItem) {
existingItem.quantity += 1;
} else {
cart.push({ name: ticketType, price, quantity: 1 });
}

updateCartDisplay();
document.getElementById('cartModal').style.display = 'block';
}

function joinGuestlist() {
const name = prompt('Enter your name for guestlist:');
if (name) {
document.getElementById('successMessage').textContent = `Welcome to the guestlist, ${name}! Arrive before 11PM for free entry.`;
document.getElementById('successModal').style.display = 'block';
}
}

function updateCartDisplay() {
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

if (cart.length === 0) {
cartItems.innerHTML = '
Your cart is empty
';
cartTotal.textContent = '0';
return;
}

cartItems.innerHTML = cart.map(item => `


${item.name}

$${item.price} x ${item.quantity}

Remove

`).join('');

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
cartTotal.textContent = total;
}

function removeFromCart(ticketName) {
cart = cart.filter(item => item.name !== ticketName);
updateCartDisplay();
}

function checkout() {
if (cart.length === 0) return;

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
document.getElementById('successMessage').textContent = `Order successful! Total: $${total}. Check your email for tickets.`;
document.getElementById('successModal').style.display = 'block';
cart = [];
}

function closeModal() {
document.getElementById('cartModal').style.display = 'none';
document.getElementById('successModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
const cartModal = document.getElementById('cartModal');
const successModal = document.getElementById('successModal');

if (event.target === cartModal) {
cartModal.style.display = 'none';
}
if (event.target === successModal) {
successModal.style.display = 'none';
}
}

window.addEventListener('scroll', function() {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 100) {
navbar.style.background = 'rgba(255, 255, 255, 0.98)';
navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
} else {
navbar.style.background = 'rgba(255, 255, 255, 0.95)';
navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
}
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector

