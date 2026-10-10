document.querySelectorAll(".popup-art").forEach(btn => {
    const popup = btn.nextElementSibling;
    const closeBtn = popup.querySelector(".close");

    btn.onclick = function() {
        popup.style.display = "flex"; // Changed to flex to center the modal
    }

    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});