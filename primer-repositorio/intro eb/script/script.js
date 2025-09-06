document.addEventListener('DOMContentLoaded', function() {
    // Código existente para el menú hamburguesa
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
    
    // Navegación con desplazamiento suave
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si el enlace es el de inicio (href="#"), no hacemos nada especial
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcular la posición de la sección teniendo en cuenta la barra de navegación fija
                const navHeight = document.querySelector('nav.barrita').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                // Desplazamiento suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Código existente para el formulario de contacto
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