const savedUser = localStorage.getItem('user');
if (savedUser) {
    // If user data is found, pre-fill the form
    const user = JSON.parse(savedUser);
    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
}

// Add event listener for form submission
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can implement your authentication logic here
    // For this example, let's just check if the username and password are not empty
    if (username && password) {
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});