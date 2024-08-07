document.addEventListener('DOMContentLoaded', async(event) => { 
     await obtenerCursos()

    init()
});
function init(){
    const form = document.getElementById('yogaForm');
    const verInscriptosBtn = document.getElementById('verInscriptos');
    
    // BUSCO el curso de Yoga en el array CURSOS
    const cursoYoga =  CURSOS.find(curso => curso.nombre === "Yoga");
    // Cargo los posibles inscriptos desde localStorage al inicio 
    const inscriptosYogaGuardados = localStorage.getItem('inscriptosYoga');
    if (inscriptosYogaGuardados) {
        cursoYoga.inscriptosYoga = JSON.parse(inscriptosYogaGuardados); 
    }

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
        // despues de hacer el push a inscriptosyoga los guardo en el LS bajo el k 'inscriptosYoga'
        localStorage.setItem('inscriptosYoga', JSON.stringify(cursoYoga.inscriptosYoga));

        Swal.fire({
            imageUrl: '../assets/namaste.gif',
            imageWidth: 100, 
            imageHeight: 100,
            title: 'Inscripción exitosa',
            text: `Bienvenido ${nombre} ${apellido} a YOGA`,
            showConfirmButton: false,
            timer: 3500,
            background: '#bbf7d0',
        }).then(() => {
            // Después de mostrar inscripcion exitosa y 3s muestro sidesea otro curso
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
                    // si pone si mando al index
                    window.location.href = '../index.html';
                } else {
                    Swal.fire({
                        imageUrl: '../assets/pose-de-yoga.gif',
                        imageWidth: 100, 
                        imageHeight: 100,
                        title: `Gracias por inscribirse a YOGA  `,
                        showConfirmButton: false,
                        timer: 4000,
                        background: '#bbf7d0',
                        
                    }).then(function () {
                        window.location.href = '../index.html';
//AQUI SE SEGUIRIA CON EL PAGO
                    } );
                }
            });
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
} 
    

//     const CURSOS1 = [];
// //const URLCursos = "js/cursos.json"; // supuesta app backend
// const URLCursos1 = "https://668c29a80b61b8d23b0c9c4e.mockapi.io/CURSOS";
//     function obtenerCursos1() {
//         // petición fetch para traer los cursos
//         fetch(URLCursos1)
//         .then((response) => response.json()) // haría como un parseo
//         .then((data) => CURSOS1.push(...data)) // se guardan los objetos guardados en data
//         .catch((error) => {
//             console.error("Error al obtener los cursos:", error);
//         });
//     }
//     obtenerCursos1() 