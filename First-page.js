document.getElementById("unboxButton").addEventListener("click", function () {
    let mailImage = document.getElementById("mailimage");

    // Change the image with animation
    mailImage.style.transition = "transform 0.5s ease-in-out";
    mailImage.style.transform = "scale(1.1) rotate(-5deg)";

    setTimeout(() => {
        mailImage.src = "mail-open.png"; // Change to open mail
        mailImage.style.transform = "scale(1) rotate(0deg)";
    }, 500);

    // Redirect after animation
    setTimeout(() => {
        window.location.href = "2nd Page.html"; // Correct redirection path
    }, 1500); // Adjust timing to match animation duration
});
