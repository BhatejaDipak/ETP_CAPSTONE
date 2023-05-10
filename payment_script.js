












document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var vehicleNumber = document.getElementById("vehicle-number").value;
    var tollPlaza = document.getElementById("toll-plaza").value;
    var mobileNumber = document.getElementById("mobile-number").value;
    var email = document.getElementById("email").value;
    var cardNumber = document.getElementById("card-number").value;
    var cardExpiry = document.getElementById("card-expiry").value;
    var cardCVV = document.getElementById("card-cvv").value;

    // Perform validation
    if (vehicleNumber.trim() === "" || tollPlaza === "" || mobileNumber.trim() === "" || email.trim() === "" ||
        cardNumber.trim() === "" || cardExpiry.trim() === "" || cardCVV.trim() === "") {
        alert("Please fill in all the required fields.");
    } else {
        // Form data is valid, proceed with payment
        alert("Payment successful! Thank you for using our service.");
        // Reset form
        document.getElementById("payment-form").reset();
    }
});

document.getElementById("back-to-homepage").addEventListener("click", function() {
    // Redirect to homepage
    window.location.href = "index.html";
});
const vehicleNumberInput = document.getElementById('vehicle-number');
vehicleNumberInput.placeholder = 'Enter Vehicle Number';
const tollPlazaInput = document.getElementById('toll-plaza');
tollPlazaInput.placeholder = 'Select Toll Plaza';
const mobileNumberInput = document.getElementById('mobile-number');
mobileNumberInput.placeholder = 'Enter Mobile Number';
const emailAddressInput = document.getElementById('email');
emailAddressInput.placeholder = 'Enter Email Address';
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.placeholder = 'Enter Card Number';
const expiryDateInput = document.getElementById('card-expiry');
expiryDateInput.placeholder = 'Enter Expiry Date (MM/YY)';
const cvvInput = document.getElementById('card-cvv');
cvvInput.placeholder = 'Enter CVV';
