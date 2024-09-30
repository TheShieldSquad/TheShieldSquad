document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("agreement-popup");
    const acceptButton = document.getElementById("accept-button");
    const checkbox = document.getElementById("checkbox");

    if (!localStorage.getItem("agreementAccepted")) {
        showPopup(); 
    }

    checkbox.addEventListener("change", function () {
        toggleAcceptButton();
    });

    acceptButton.addEventListener("click", function () {
        acceptAgreement();
    });

    function showPopup() {
        popup.style.display = "flex";
    }

    function toggleAcceptButton() {
        acceptButton.disabled = !checkbox.checked;
    }


    function acceptAgreement() {
        localStorage.setItem("agreementAccepted", "true");
        popup.style.display = "none"; // Hide the popup after acceptance
    }
});
