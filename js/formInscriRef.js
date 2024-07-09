document.addEventListener('DOMContentLoaded', async(event) => { 
    await obtenerCursos()

   init()
});
function init(){    
    const form = document.getElementById('formRef');
    const verInscriptosBtn = document.getElementById('verInscriptosRef');

    // Busco el curso de Reflexología en el array CURSOS
    const cursoReflexologia = CURSOS.find(curso => curso.nombre === 'Reflexologia');

    // Cargo los posibles inscriptos desde localStorage al inicio
    const inscriptosRefGuardados = localStorage.getItem('inscriptosRef');
    if (inscriptosRefGuardados) {
        cursoReflexologia.inscriptosRef = JSON.parse(inscriptosRefGuardados);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validación si ya se alcanzó el límite de inscriptos
        if (cursoReflexologia.inscriptosRef.length >= 10) {
            Swal.fire({
                imageUrl: '../assets/alarma_10A.gif',
                imageWidth: 100,
                imageHeight: 100,
                title: '¡Máximo permitido 10 alumnos!',
                showConfirmButton: false,
                timer: 3000,
                background: '#bbf7d0',
            });
            return;
        }

        // Obtener valores del formulario
        const nombre = document.getElementById('nombrer').value;
        const apellido = document.getElementById('apellidor').value;
        const direccion = document.getElementById('direccionr').value;
        const telefono = document.getElementById('telefonor').value;

        // Validar que el teléfono sea numérico
        if (isNaN(telefono)) {
            errorNAN();
            return;
        }

        // Crear objeto de inscripto
        const inscripto = {
            nombre,
            apellido,
            direccion,
            telefono
        };

        // Agregar inscripto al array del curso de Reflexología
        cursoReflexologia.inscriptosRef.push(inscripto);
        form.reset();

        // Guardar inscriptos en localStorage
        localStorage.setItem('inscriptosRef', JSON.stringify(cursoReflexologia.inscriptosRef));

        // Mostrar mensaje de inscripción exitosa
        Swal.fire({
            imageUrl: '../assets/huella.gif',
            imageWidth: 100,
            imageHeight: 100,
            title: 'Inscripción exitosa',
            text: `Bienvenido ${nombre} ${apellido} a Reflexología`,
            showConfirmButton: false,
            timer: 3500,
            background: '#A2F5E7',
        }).then(() => {
            // Preguntar si desea inscribirse a otro curso
            Swal.fire({
                title: '¿Desea inscribirse a otro curso?',
                imageUrl: '../assets/inscripcionNueva.gif',
                imageWidth: 100,
                imageHeight: 100,
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                background: '#bbf7d0',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redireccionar al index si desea inscribirse a otro curso
                    window.location.href = '../index.html';
                } else {
                    // Mostrar mensaje de agradecimiento y redireccionar al index
                    Swal.fire({
                        imageUrl: '../assets/tobillo.gif',
                        imageWidth: 100,
                        imageHeight: 100,
                        title: `Gracias por inscribirse a Reflexología`,
                        showConfirmButton: false,
                        timer: 4000,
                        background: '#A2F5E7',
                    }).then(() => {
                        window.location.href = '../index.html';
                    });
                }
            });
        });
    });

    // Event listener para ver inscriptos
    verInscriptosBtn.addEventListener('click', () => {
        // Verificar si hay inscriptos en el curso de Reflexología
        if (cursoReflexologia.inscriptosRef.length === 0) {
            Swal.fire({
                imageUrl: '../assets/alerta.gif',
                imageWidth: 100,
                imageHeight: 100,
                title: 'Curso Vacío',
                showConfirmButton: false,
                timer: 3000,
                background: '#A2F5E7',
            });
            return;
        }

        // Crear lista de inscriptos en formato HTML
        let inscriptosList = '<ul class="list-disc pl-5">';
        cursoReflexologia.inscriptosRef.forEach((inscripto, index) => {
            inscriptosList += `<li>${index + 1}. ${inscripto.nombre} ${inscripto.apellido} - ${inscripto.direccion} - ${inscripto.telefono}</li>`;
        });
        inscriptosList += '</ul>';

        // Mostrar ventana con los inscriptos
        Swal.fire({
            title: `Inscriptos en Reflexología`,
            html: inscriptosList,
            showConfirmButton: true,
            background: '#A2F5E7',
        });
    });

    // Función para mostrar error si el teléfono no es numérico
    function errorNAN() {
        Swal.fire({
            icon: "error",
            title: 'Debe ingresar un teléfono válido',
            showConfirmButton: false,
            timer: 3000,
            background: '#A2F5E7',
        });
    }
};
