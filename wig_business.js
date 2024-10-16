function submitToWhatsApp() {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let wigSelect = document.getElementById('wig-select').value;
    let nameError = document.getElementById('name-error');
    let numberError = document.getElementById('number-error');
    let formError = document.getElementById('form-error');
    let valid = true;

    nameError.style.display = "none";
    numberError.style.display = "none";
    formError.style.display = "none";

    // Validate the form fields
    if (!name.includes(" ") || name.split(" ").length < 2) {
        nameError.style.display = "block";
        valid = false;
    }

    if (number.length !== 10 || isNaN(number)) {
        numberError.style.display = "block";
        valid = false;
    }

    if (wigSelect === "") {
        formError.style.display = "block";
        valid = false;
    }

    // If form is valid, redirect to WhatsApp
    if (valid) {
        var phoneNumber = "+27835974095";
        var message = `Hi, I am ${name}. Contact me on ${number}. I am interested in buying a ${wigSelect}.`;
        
        var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    return false;
}


