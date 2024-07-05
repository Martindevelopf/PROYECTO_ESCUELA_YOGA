document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('KundForm');
    const verInscriptosBtn = document.getElementById('verInscriptosKun');

    // BUSCO el curso de Kundalini en el array CURSOS
    const cursoKundalini = CURSOS.find(curso => curso.nombre === 'Kundalini');
    
    // Cargo los posibles inscriptos desde localStorage al inicio 
    const inscriptosKundaliniGuardados = localStorage.getItem('inscriptosKundalini');
    if (inscriptosKundaliniGuardados) {
        cursoKundalini.inscriptosKundalini = JSON.parse(inscriptosKundaliniGuardados); 
    }

    form.addEventListener('submit', (e) => { 
        e.preventDefault();

        if (cursoKundalini.inscriptosKundalini.length >= 10) {
            Swal.fire({
                imageUrl: '../../assets/alarma_10A.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: '¡Máximo permitido 10 alumnos!',
                showConfirmButton: false,
                timer: 3000,
                background: '#bbf7d0',
            });
            return;
        }

        // Anexo a los datos del form por el id
        const nombre = document.getElementById('nombrek').value;
        const apellido = document.getElementById('apellidok').value;
        const direccion = document.getElementById('direccionk').value;
        const telefono = document.getElementById('telefonok').value;

        if (isNaN(telefono)) {
            errorNAN();
            return;
        }

        // Creo un objeto trayendo lo que se ingresa en los campos siguientes...
        const inscripto = {
            nombre,
            apellido,
            direccion,
            telefono
        };

        cursoKundalini.inscriptosKundalini.push(inscripto); // Tomo estos datos ingresados y los ingreso al array inscriptosKundalini
        form.reset();
        
        // Después de hacer el push a inscriptosKundalini los guardo en el LS bajo el key 'inscriptosKundalini'
        localStorage.setItem('inscriptosKundalini', JSON.stringify(cursoKundalini.inscriptosKundalini));

        Swal.fire({
            imageUrl: '../../../assets/chakra.gif',
            imageWidth: 100, 
            imageHeight: 100,
            title: 'Inscripción exitosa',
            text: `Bienvenido ${nombre} ${apellido} a Kundalini`,
            showConfirmButton: false,
            timer: 3500,
            background: '#D8B4FE',
        }).then(() => {
            // Después de mostrar inscripción exitosa y 3s muestro si desea otro curso
            Swal.fire({
                title: '¿Desea inscribirse a otro curso?',
                imageUrl: '../../../assets/inscripcionNueva.gif',
                imageWidth: 100, 
                imageHeight: 100,
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                background: '#D8B4FE',
            }).then((result) => {
                if (result.isConfirmed) {
                   
                    window.location.href = '../../../index.html';
                } else {
                    Swal.fire({
                        imageUrl: '../../../assets/chakra_2.gif',
                        imageWidth: 100, 
                        imageHeight: 100,
                        title: `Gracias por inscribirse a Kundalini`,
                        showConfirmButton: false,
                        timer: 4000,
                        background: '#D8B4FE',
                        
                    }).then(function () {
                        window.location.href = '../../../index.html';
                        // AQUI SE SEGUIRIA CON EL PAGO
                    });
                }
            });
        });
    });

    verInscriptosBtn.addEventListener('click', () => {
        if (cursoKundalini.inscriptosKundalini.length === 0) {
            Swal.fire({
                imageUrl: '../../../assets/alerta.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: 'Curso Vacío',
                showConfirmButton: false,
                timer: 3000,
                background: '#D8B4FE',
            });
            return;
        }

        // Creo formato html para después usarlo en el sweet
        let inscriptosList = '<ul class="list-disc pl-5">';
        cursoKundalini.inscriptosKundalini.forEach((inscripto, index) => {
            inscriptosList += `<li>${index + 1}. ${inscripto.nombre} ${inscripto.apellido} - ${inscripto.direccion} - ${inscripto.telefono}</li>`;
        });
        inscriptosList += '</ul>';

        Swal.fire({
            title: `Inscriptos ${cursoKundalini.nombre}`, 
            html: inscriptosList,
            showConfirmButton: false,
            background: '#D8B4FE',
            timer:3000,
        });
    });

    function errorNAN(){
        Swal.fire({
            icon: "error",
            title: 'Debe ingresar un teléfono válido',
            showConfirmButton: false,
            timer: 3000,
            background: '#D8B4FE',
        });
    }
});
