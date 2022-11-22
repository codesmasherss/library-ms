//  Login script
function saveUserCredentials() {
   // Username
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;

   if (username.length < 8 || !username) {
      alert('Please enter a username and should be greater than 8 chars!');
      return false;
   } else if (password.length < 6 || !password) {
      alert('Please enter a password and should be greater than 6 chars!');
   } else {
      window.location.href = '/';
   }
}
