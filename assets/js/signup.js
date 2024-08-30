document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para manejar el registro
    alert('Sign Up form submitted!');
});
 
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age < 16) {
        alert('You must be at least 16 years old to register.');
        return;
    }
    window.location.href = "index.html";
});
function mostrarContrasena() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
