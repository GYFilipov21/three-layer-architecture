// Fetch the login credentials from loginInfo.txt
fetch('../data-access-layer/loginInfo.txt')
    .then(response => response.text())
    .then(data => {
        // Split the data into username and password
        var [storedUsername, storedPassword] = data.split(',');

        // Set the credentials in localStorage
        localStorage.setItem("username", storedUsername.trim());
        localStorage.setItem("password", storedPassword.trim());
    })
    .catch(error => console.error('Error fetching loginInfo.txt:', error));

function validateLogin() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Check if stored credentials exist
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("loginMessage").className = "success";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password.";
        document.getElementById("loginMessage").className = "error";
    }
}
