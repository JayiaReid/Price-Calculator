onload=alert("Welcome to the Price calculator form! Please fill out all fields and remember the products are the prices of each product!")
function calculateTotal() {
    // Retrieve form values
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var prod1 = parseFloat(document.getElementById("prod1").value);
    var prod2 = parseFloat(document.getElementById("prod2").value);
    var prod3 = parseFloat(document.getElementById("prod3").value);

    // Validating form fields
    if (lastName === "" || firstName === "" || phoneNumber === "" || isNaN(prod1) || isNaN(prod2) || isNaN(prod3)) {
        alert("Please ensure all fields are filled out! Thank you. :)");
        return;
    }

    // Calculate total
    var total = prod1 + prod2 + prod3;
    var totalWithTax = total + (total * 0.13);

    //display total without tax
    document.getElementById("total").value = total.toFixed(2);

    // Display total with tax
    document.getElementById("totalWithTax").value = totalWithTax.toFixed(2);
}