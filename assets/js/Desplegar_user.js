// JavaScript para manejar el menú desplegable
document.addEventListener('DOMContentLoaded', function () {
    var userIcon = document.getElementById('userIcon');
    var dropdownMenu = document.getElementById('dropdownMenu');

    userIcon.addEventListener('click', function () {
        // Alterna la visibilidad del menú desplegable
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});