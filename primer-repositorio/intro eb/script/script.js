document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menu-toggle');
    const barritaMenu = document.getElementById('barrita-menu');
    
    if (menuToggle && barritaMenu) {
        menuToggle.addEventListener('click', function() {
            barritaMenu.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic en un elemento de la lista
        const menuItems = document.querySelectorAll('.barrita-menu li');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                barritaMenu.classList.remove('active');
            });
        });
        
        // Cerrar el menú al hacer clic fuera de la hamburguesa
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = barritaMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && barritaMenu.classList.contains('active')) {
                barritaMenu.classList.remove('active');
            }
        });
    }
    
    
    const formularioContacto = document.getElementById('formulario-contacto');
    
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault();
            
            
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            
            
            if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un email válido.');
                return;
            }
            
            
            alert(`Formulario enviado correctamente:\n\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}`);
            
            
            formularioContacto.reset();
        });
    }
});