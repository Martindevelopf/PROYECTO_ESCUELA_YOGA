document.addEventListener('DOMContentLoaded', (event) => { 
    const form = document.getElementById('yogaForm');
    const verInscriptosBtn = document.getElementById('verInscriptos');

    // BUSCO el curso de Yoga en el array CURSOS
    const cursoYoga = CURSOS.find(curso => curso.nombre === 'Yoga');

    form.addEventListener('submit', (e) => { 
        e.preventDefault();

        if (cursoYoga.inscriptosYoga.length >= 10) {
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
// anexo a los datos del form por el id
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;

        if (isNaN(telefono)) {
            errorNAN();
            return;
        }
// creo un objeto trayendo lo que se ingresa en los campos siguientes...
        const inscripto = {
            nombre,
            apellido,
            direccion,
            telefono
        };

        cursoYoga.inscriptosYoga.push(inscripto);// tomo estos datos ingresados y los ingreso al array inscriptosYoga
        form.reset();

        Swal.fire({
            imageUrl: '../assets/namaste.gif',
            imageWidth: 100, 
            imageHeight: 100,
            title: 'Inscripción exitosa',
            text: `Bienvenido ${nombre} ${apellido} a YOGA`,
            showConfirmButton: false,
            timer: 3000,
            background: '#bbf7d0',
        });
    });

    verInscriptosBtn.addEventListener('click', () => {
        if (cursoYoga.inscriptosYoga.length === 0) {
            Swal.fire({
                imageUrl: '../assets/alerta.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: 'Curso Vacío',
                showConfirmButton: false,
                timer: 3000,
                background: '#bbf7d0',
            });
            return;
        }

         // creo formato html para depsues usarlo en el sweet
         let inscriptosList = '<ul class="list-disc pl-5">';
         cursoYoga.inscriptosYoga.forEach((inscripto, index) => {
             inscriptosList += `<li>${index + 1}. ${inscripto.nombre} ${inscripto.apellido} - ${inscripto.direccion} - ${inscripto.telefono}</li>`;
         });
         inscriptosList += '</ul>';
 
         Swal.fire({
             title: `Inscriptos ${cursoYoga.nombre}`, 
             html: inscriptosList,
             showConfirmButton: true,
             background: '#bbf7d0',
         });
     });

    function errorNAN(){
        Swal.fire({
            icon: "error",
            title: 'Debe ingresar un teléfono válido',
            showConfirmButton: false,
            timer: 3000,
            background: '#bbf7d0',
        });
    }
});
