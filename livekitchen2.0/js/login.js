// Login Page Functions

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    
    // Validate credentials
    if (username === "2222" && password === "1234") {
        // Store login info in sessionStorage
        sessionStorage.setItem("userLoggedIn", "true");
        sessionStorage.setItem("username", username);
        
        // Redirect to main page
        window.location.href = "index.html";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.classList.add("show");
        
        // Clear password field
        document.getElementById("password").value = "";
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 5000);
    }
}

// Prevent going to index.html without login
document.addEventListener("DOMContentLoaded", function() {
    // This script only runs on login.html, so nothing special needed here
});
