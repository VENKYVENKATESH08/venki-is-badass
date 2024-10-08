document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if username is "venki" and password is "123"
    if (username === "venki" && password === "123") {
        errorMessage.textContent = "";
        // Redirect to the new page after successful login
        window.location.href = "welcome.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
