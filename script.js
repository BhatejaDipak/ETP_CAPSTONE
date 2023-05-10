// Get button and message elements by their IDs
const button = document.getElementById("btn-click");
const message = document.getElementById("click-message");

// Add click event listener to the button
button.addEventListener("click", function() {
	// Show the message when the button is clicked
	message.style.display = "block";
});
