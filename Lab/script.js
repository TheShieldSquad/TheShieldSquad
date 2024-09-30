// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("agreement-popup");
    const acceptButton = document.getElementById("accept-button");
    const checkbox = document.getElementById("checkbox");

    // Check if the user has already accepted the agreement
    if (!localStorage.getItem("agreementAccepted")) {
        showPopup(); // Show the popup if not accepted
    }

    // Event listener to enable the accept button only when the checkbox is checked
    checkbox.addEventListener("change", function () {
        toggleAcceptButton();
    });

    // Event listener for the accept button
    acceptButton.addEventListener("click", function () {
        acceptAgreement();
    });

    // Function to show the popup
    function showPopup() {
        popup.style.display = "flex";
    }

    // Function to enable/disable the accept button based on the checkbox
    function toggleAcceptButton() {
        acceptButton.disabled = !checkbox.checked;
    }

    // Function to handle acceptance of the agreement
    function acceptAgreement() {
        localStorage.setItem("agreementAccepted", "true");
        popup.style.display = "none"; // Hide the popup after acceptance
    }
});
