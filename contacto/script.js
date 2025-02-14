document.addEventListener('DOMContentLoaded', function() {
    // Crear calaveras flotantes
    function createSkulls() {
        for(let i = 0; i < 5; i++) {
            const skull = document.createElement('div');
            skull.className = 'skull';
            skull.style.left = Math.random() * 100 + 'vw';
            skull.style.top = Math.random() * 100 + 'vh';
            skull.style.fontSize = Math.random() * 30 + 20 + 'px';
            skull.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
            skull.textContent = Math.random() > 0.5 ? '💀' : '☠️';
            document.body.appendChild(skull);
        }
    }
    
    // Efecto de sangre al mover el mouse
    document.addEventListener('mousemove', function(e) {
        if(Math.random() > 0.97) {
            const blood = document.createElement('div');
            blood.className = 'blood-effect';
            blood.style.left = e.pageX + 'px';
            blood.style.top = e.pageY + 'px';
            blood.textContent = '🩸';
            document.body.appendChild(blood);
            
            setTimeout(() => blood.remove(), 1000);
        }
    });

    // Envío del formulario
    document.getElementById('horrorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Sonido personalizado (MODIFICAR AQUÍ)
        const audio = new Audio('https://ia601709.us.archive.org/10/items/bass_20250213/bass.wav');
        audio.play();

        // Mostrar confirmación
        setTimeout(() => {
            alert('¡Tu historia ha sido enviada al vacío...');
            e.target.submit();
        }, 2000);
    });

    // Limpiar formulario cuando la página se carga desde caché
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        document.getElementById('horrorForm').reset();
    }
});

// Limpiar campos después del envío exitoso
document.getElementById('horrorForm').addEventListener('submit', function() {
    setTimeout(() => {
        this.reset();
    }, 1000);
});

    createSkulls();
});
