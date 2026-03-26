// Simple form submission alert
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Order submitted successfully!");
});
