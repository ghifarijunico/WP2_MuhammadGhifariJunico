document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById("loginForm").classList.remove("hidden");
  });
  
  document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password);
  });