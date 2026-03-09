// Comprehensive Authentication System

// Initialize demo users on first load
function initializeDemoUsers() {
    let users = JSON.parse(localStorage.getItem("liveKitchenUsers")) || {};
    
    // Only add demo user if no users exist
    if (Object.keys(users).length === 0) {
        users["user@example.com"] = {
            name: "Demo User",
            email: "user@example.com",
            password: "user123",
            role: "user",
            createdAt: new Date().toISOString()
        };
        localStorage.setItem("liveKitchenUsers", JSON.stringify(users));
    }
}

// Switch between tabs
function switchTab(tabName) {
    // Hide all auth cards
    document.querySelectorAll('.auth-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Highlight active tab button
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.classList.remove('show');
        msg.textContent = '';
    });
}

// User Login Handler
function handleUserLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("user-email").value.trim();
    const password = document.getElementById("user-password").value.trim();
    const errorMessage = document.getElementById("userErrorMessage");
    
    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("liveKitchenUsers")) || {};
    
    // Validate credentials
    if (users[email] && users[email].password === password && users[email].role === "user") {
        // Store login info in sessionStorage
        sessionStorage.setItem("userLoggedIn", "true");
        sessionStorage.setItem("userRole", "user");
        sessionStorage.setItem("username", users[email].name);
        sessionStorage.setItem("userEmail", email);
        
        // Redirect to user dashboard
        window.location.href = "user-dashboard.html";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid email or password. Please try again.";
        errorMessage.classList.add("show");
        
        // Clear password field
        document.getElementById("user-password").value = "";
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 5000);
    }
}

// Admin Login Handler
function handleAdminLogin(event) {
    event.preventDefault();
    
    const adminId = document.getElementById("admin-username").value.trim();
    const password = document.getElementById("admin-password").value.trim();
    const errorMessage = document.getElementById("adminErrorMessage");
    
    // Admin credentials check
    if (adminId === "admin2222" && password === "admin123") {
        // Store login info in sessionStorage
        sessionStorage.setItem("userLoggedIn", "true");
        sessionStorage.setItem("userRole", "admin");
        sessionStorage.setItem("username", "Administrator");
        sessionStorage.setItem("adminId", adminId);
        
        // Redirect to admin dashboard
        window.location.href = "index.html";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid Admin ID or password. Please try again.";
        errorMessage.classList.add("show");
        
        // Clear password field
        document.getElementById("admin-password").value = "";
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 5000);
    }
}

// User Sign Up Handler
function handleSignUp(event) {
    event.preventDefault();
    
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const confirmPassword = document.getElementById("signup-confirm").value.trim();
    const errorMessage = document.getElementById("signupErrorMessage");
    
    // Validation
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        errorMessage.classList.add("show");
        setTimeout(() => errorMessage.classList.remove("show"), 5000);
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
        errorMessage.classList.add("show");
        setTimeout(() => errorMessage.classList.remove("show"), 5000);
        return;
    }
    
    // Get existing users
    let users = JSON.parse(localStorage.getItem("liveKitchenUsers")) || {};
    
    // Check if email already exists
    if (users[email]) {
        errorMessage.textContent = "Email already registered. Please login or use a different email.";
        errorMessage.classList.add("show");
        setTimeout(() => errorMessage.classList.remove("show"), 5000);
        return;
    }
    
    // Create new user
    users[email] = {
        name: name,
        email: email,
        password: password,
        role: "user",
        createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem("liveKitchenUsers", JSON.stringify(users));
    
    // Show success message
    const successDiv = document.createElement("div");
    successDiv.className = "success-message show";
    successDiv.textContent = "Account created successfully! Redirecting to login...";
    document.getElementById("signupForm").parentNode.insertBefore(successDiv, document.getElementById("signupForm"));
    
    // Clear form
    document.getElementById("signupForm").reset();
    
    // Redirect to user login after 2 seconds
    setTimeout(() => {
        switchTab('user-login');
        document.getElementById("user-email").value = email;
        successDiv.remove();
    }, 2000);
}

// Check if user is authenticated
function checkUserLogin() {
    const isLoggedIn = sessionStorage.getItem("userLoggedIn");
    const userRole = sessionStorage.getItem("userRole");
    
    if (!isLoggedIn) {
        window.location.href = "login.html";
        return false;
    }
    
    return true;
}

// Logout function
function logout() {
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("adminId");
    window.location.href = "login.html";
}

// Get current user info
function getCurrentUser() {
    return {
        isLoggedIn: sessionStorage.getItem("userLoggedIn") === "true",
        role: sessionStorage.getItem("userRole"),
        name: sessionStorage.getItem("username"),
        email: sessionStorage.getItem("userEmail")
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDemoUsers();
});
