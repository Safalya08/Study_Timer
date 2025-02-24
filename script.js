document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        button.style.transform = "scale(0.95)"; // Click effect
        button.style.opacity = "0.8"; // Slight fade effect

        setTimeout(() => {
            button.style.transform = "scale(1)"; // Restore size
            button.style.opacity = "1"; 

            // Redirect after clicking (optional)
        window.location.href = "nextpage.html"; // Change this to your desired URL
        }, 200);
    });
});
