// Show a popup when the page loads
window.onload = function() {
    alert("Click on your image, My Lady! 🎉");
};

// Wait for user to click on the profile picture
document.querySelector(".profile-pic").addEventListener("click", function() {
    // Play the popper sound
    let audio = new Audio('birthday-popper.mp3');
    audio.play();

    // Start confetti explosion from the clicked image
    startConfetti();
});

// Confetti Explosion Effect
function startConfetti() {
    let canvas = document.getElementById("confetti-canvas");
    
    // Create the canvas only if it doesn't exist
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "confetti-canvas";
        document.body.appendChild(canvas);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    // Get the profile picture's position
    const profilePic = document.querySelector(".profile-pic");
    const rect = profilePic.getBoundingClientRect();
    const explosionX = rect.left + rect.width / 2; // Center X
    const explosionY = rect.top + rect.height / 2; // Center Y

    let confettiParticles = [];

    for (let i = 0; i < 500; i++) { // Increase count for a thick explosion
        let angle = Math.random() * 2 * Math.PI; // Random direction
        let speed = Math.random() * 15 + 5; // Random speed

        confettiParticles.push({
            x: explosionX,
            y: explosionY,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 8 + 2,
            speedX: Math.cos(angle) * speed, // Spread outward
            speedY: Math.sin(angle) * speed
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += 0.2; // Gravity effect

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();

    // Remove confetti after 5 seconds
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 5000);
}
document.getElementById("proceedButton").addEventListener("click", function() {
    window.location.href = "3rd Page.html";
});