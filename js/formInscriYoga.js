document.addEventListener('DOMContentLoaded', (event) => { // DomContenLoaded para no tener poblemas con la carga del DOM
    const form = document.getElementById('yogaForm');
    const resultDiv = document.getElementById('result');
    const verInscriptosBtn = document.getElementById('verInscriptos');
    const inscriptos = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (inscriptos.length >= 2) {
            Swal.fire({
                imageUrl: '../assets/alarma_10A.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: 'Maximo permitido 10 alumnos!!! ',
                showConfirmButton: false,
                timer: 3000,
                background: '#bbf7d0',
    
            });
            return;// sin este return no corta y si bien me sale el cartel me sigue haciendo push al array inscriptos
        }

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;

        const inscripto = { // creo objeto inscripto tomando lo que entra  por el form
            nombre,
            apellido,
            direccion,
            telefono
        };

        inscriptos.push(inscripto);
        form.reset();// dejo en blanco nuevamente el form para una nueva inscpriccion

        Swal.fire({
            imageUrl: '../assets/namaste.gif',
            imageWidth: 100, 
            imageHeight: 100,
            title: 'Inscripción exitosa',
            text: `Bienvenido ${nombre} ${apellido} a YOGA  `,
            showConfirmButton: false,
            timer: 3000,
            background: '#bbf7d0',
        });
    });

    verInscriptosBtn.addEventListener('click', () => {
        if (inscriptos.length === 0) {
            Swal.fire({
                imageUrl: '../assets/alerta.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: 'Curso Vacio ',
                showConfirmButton: false,
                timer: 3000,
                background: '#bbf7d0',
    
            });
        }

        let inscriptosList = '<ul class="list-disc pl-5">';
        inscriptos.forEach((inscripto, index) => {
            inscriptosList += `<li>${index + 1}. ${inscripto.nombre} ${inscripto.apellido} - ${inscripto.direccion} - ${inscripto.telefono}</li>`;
        });
        inscriptosList += '</ul>';
        resultDiv.innerHTML = inscriptosList;
    });
});

