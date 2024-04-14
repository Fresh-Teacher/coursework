// JavaScript for login functionality
const captchaText = generateCaptcha();
document.getElementById('captcha-text').textContent = captchaText;

function login() {
  const username = document.getElementById('username').value;
  const captchaInput = document.getElementById('captcha').value;

  // Simple authentication check (replace with proper authentication logic)
  if (captchaInput === captchaText) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('user-name').textContent = username;
  } else {
    alert('Invalid CAPTCHA. Please try again.');
  }
}

function generateCaptcha() {
  const captchaLength = 13;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < captchaLength; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}
// Dynamically update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Check for remember-me cookie on page load
window.onload = function() {
    var rememberMe = getCookie("rememberMe");
    if (rememberMe === "true") {
        // If remember-me cookie exists and is set to true, auto-login
        var username = getCookie("username");
        if (username) {
            document.getElementById("username").value = username;
            document.getElementById("captcha").focus(); // Focus on captcha input
            document.getElementById("instructions").style.display = "block"; // Show instructions section
            document.getElementById("login-form").style.display = "none"; // Hide login form
            document.getElementById("user-name").textContent = username; // Update user name in instructions section
            document.getElementById("logout-button").style.display = "block"; // Show logout button
        }
    }
};

// Function to set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Login function
function login() {
    var username = document.getElementById("username").value;
    var captcha = document.getElementById("captcha").value;
    if (username.trim() !== "" && captcha.trim() !== "") {
        // Set remember-me cookie if checkbox is checked
        if (document.getElementById("remember-me").checked) {
            setCookie("rememberMe", "true", 7); // Remember for 7 days
            setCookie("username", username, 7); // Remember username for 7 days
        } else {
            setCookie("rememberMe", "false", -1); // Delete remember-me cookie
            setCookie("username", "", -1); // Delete username cookie
        }
        // Perform login logic here
        // For demonstration, let's just show instructions section and hide login form
        document.getElementById("instructions").style.display = "block";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("user-name").textContent = username;
        document.getElementById("logout-button").style.display = "block"; // Show logout button
    } else {
        alert("Please enter your name and CAPTCHA.");
    }
}

// Logout function
document.getElementById("logout-button").addEventListener("click", function() {
    // Clear authentication information
    setCookie("rememberMe", "false", -1); // Delete remember-me cookie
    setCookie("username", "", -1); // Delete username cookie
    // Redirect to login page
    window.location.href = "index.html"; // Replace "index.html" with the URL of your login screen
});

