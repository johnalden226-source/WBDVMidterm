let cart = [];
let guestlistEvent = '';

function scrollToEvents() {
  document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
}

function orderTicket(name, price) {
  addToCart(name, price);
  openCart();
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function joinGuestlist(eventName) {
  guestlistEvent = eventName;
  document.getElementById('guestEventName').textContent =
    'Event: ' + eventName;
  openGuestModal();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} – ₱${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }
  alert('Checkout successful! Thank you for booking with NexusEvents.');
  cart = [];
  updateCartDisplay();
  closeModal();
}

function openCart() {
  document.getElementById('cartModal').style.display = 'flex';
}

function openGuestModal() {
  document.getElementById('guestModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('cartModal').style.display = 'none';
  document.getElementById('guestModal').style.display = 'none';
}

function addToGuestlist() {
  const name = document.getElementById('guestName').value.trim();
  const email = document.getElementById('guestEmail').value.trim();

  if (!name || !email) {
    alert('Please enter your name and email.');
    return;
  }

  alert(`You have been added to the guestlist for ${guestlistEvent}!`);
  document.getElementById('guestName').value = '';
  document.getElementById('guestEmail').value = '';
  closeModal();
}

// Open cart when clicking top cart button
document.getElementById('cartButton').onclick = openCart;
