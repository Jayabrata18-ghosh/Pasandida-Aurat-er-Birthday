document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let text = document.querySelector(".pop-up-text");
        text.style.opacity = "1"; // Show text

        setTimeout(() => {
            text.style.opacity = "0"; // Hide text after 7 seconds
        }, 10000); // Text stays for 7 seconds

    }, 7000); // Wait for background animation to finish (4 seconds)
});