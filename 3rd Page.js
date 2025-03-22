document.addEventListener("DOMContentLoaded", () => {
    const knife = document.getElementById("knife");
    const cake = document.getElementById("cake");
    const cakeLeft = document.getElementById("cake-left");
    const cakeRight = document.getElementById("cake-right");
    const customMessage = document.getElementById("customMessage");

    let isDragging = false;
    let offsetX = 0, offsetY = 0;
    let cutTimer = null;

    function startDrag(event) {
        isDragging = true;

        let clientX = event.touches ? event.touches[0].clientX : event.clientX;
        let clientY = event.touches ? event.touches[0].clientY : event.clientY;

        offsetX = clientX - knife.getBoundingClientRect().left;
        offsetY = clientY - knife.getBoundingClientRect().top;

        knife.style.position = "absolute";

        if (event.touches) event.preventDefault();
    }

    function stopDrag() {
        isDragging = false;
        clearTimeout(cutTimer);
        cutTimer = null;
    }

    function drag(event) {
        if (!isDragging) return;

        let clientX = event.touches ? event.touches[0].clientX : event.clientX;
        let clientY = event.touches ? event.touches[0].clientY : event.clientY;

        let newX = clientX - offsetX;
        let newY = clientY - offsetY;

        knife.style.left = `${newX}px`;
        knife.style.top = `${newY}px`;

        let knifeRect = knife.getBoundingClientRect();
        let cakeRect = cake.getBoundingClientRect();

        if (
            knifeRect.left >= cakeRect.left && knifeRect.right <= cakeRect.right &&
            knifeRect.top >= cakeRect.top && knifeRect.bottom <= cakeRect.bottom
        ) {
            if (!cutTimer) {
                cutTimer = setTimeout(() => {
                    cutCake();
                }, 750);
            }
        } else {
            clearTimeout(cutTimer);
            cutTimer = null;
        }

        if (event.touches) event.preventDefault();
    }

    function cutCake() {
        cake.style.display = "none";
        cakeLeft.style.display = "block";
        cakeRight.style.display = "block";

        setTimeout(() => {
            cakeLeft.classList.add("cake-split-left");
            cakeRight.classList.add("cake-split-right");
        }, 50);

        setTimeout(() => {
            window.location.href = "4th Page.html";
        }, 2000);
    }

    knife.addEventListener("mousedown", startDrag);
    knife.addEventListener("touchstart", startDrag, { passive: false });

    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag, { passive: false });

    function autoResizeTextarea() {
        customMessage.style.height = "auto";
        customMessage.style.height = customMessage.scrollHeight + "px";
    }

    customMessage.addEventListener("input", autoResizeTextarea);
    autoResizeTextarea();
});

    window.onload = function() {
      alert("Please read the text ma'am before cutting your cake. For Troubleshooting please contact your Pasandida Mard....");
    };

