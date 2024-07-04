const VerHorariosYoga = document.getElementById("BtnVerHorariosYoga");
const btnInscripcion =document.getElementById("BtnInscribirse")


//const FormYoga = document.getElementById("formularioIY")


function cargarHorarioYoga (){

    return `
                <div class="w-full p-4 overflow-auto flex items-center justify-center text-lg text-center">
                    <table class="min-w-full table-auto bg-green-200 border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-green-900 text-green-900">
                                <th class="p-2 border border-gray-300">Hora</th>
                                <th class="p-2 border border-gray-300">Lunes</th>
                                <th class="p-2 border border-gray-300">Martes</th>
                                <th class="p-2 border border-gray-300">Miércoles</th>
                                <th class="p-2 border border-gray-300">Jueves</th>
                                <th class="p-2 border border-gray-300">Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">8:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">9:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">10:00</td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">11:00</td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">12:00</td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 ">
                                <td class="p-2 border border-gray-300 ">13:00</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">14:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">15:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300">
                                <td class="p-2 border border-gray-300">16:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Yoga</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
              

            `;
        }
        // evento en el boton const VerHorariosYoga = document.getElementById("BtnVerHorariosYoga");
        // para que al apretar click muestre arriba del contenedoinfo el calendario hecho con return en
        // en la funcion mostrarcalendario

    VerHorariosYoga.addEventListener('click', () => {
            // Llamar a la función cargarHorarioYoga  agrego  el contenido al div contenedor contenedorInfo donde todo se mete ahi
            const horarioContainer = document.getElementById('contenedorInfo');
            horarioContainer.innerHTML = cargarHorarioYoga();
            VerHorariosYoga.style.display = 'none'; //con none lo oculto al boton de ver horarios
        });
    btnInscripcion.addEventListener('click', () => {

        window.location.href = '../pages/inscripcionYoga.html';
    });
    
function cargarFormulario(){
    return `
    <div   class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-green-600">Inscripción Curso Yoga</h1>
        <div class="flex items-center justify-center">
            <form id="formularioIY" class="bg-green-200 p-6 rounded-lg shadow-md w-full max-w-md">
                <div class="mb-4">
                    <label for="nombre"  class="block text-green-700 text-lg font-bold mb-2 text-left">Nombre:</label>
                    <input type="text" id="nombre" name="nombre"  placeholder="Ingrese su nombre " class="  text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="apellido" class="block text-green-700 text-lg font-bold mb-2 text-left">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido"  class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="direccion" class="block text-green-700 text-lg f font-bold mb-2 text-left">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" placeholder="Ingrese su direccion " class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="telefono" class="block text-green-700 text-lg f font-bold mb-2 text-left">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su telefono "  class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                 <div class="flex justify-center gap-10">

            <button  type= "submit" id="botonInscripcionYoga" class="border border-cyan-50 my-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-4 rounded py-2 transform transition-transform hover:scale-105">Inscripcion</button>
        </div>
               
            </form>
        </div>
        
    </div>
    `;
}

//const BtnInscripcionYoga = document.getElementById("botonInscripcionYoga")




// Función para manejar el click en el botón de inscripción (asumiendo que se genera dinámicamente)


     // Función para inscribir en el curso de YOGA
        // Función para inscribir en el curso de YOGA
        
        /// desde aca importante
        
        
        // function inscribirEnYoga(inscrito) {
        //     const cursoYoga = CURSOS.find(curso => curso.codigo === 1);
        //     if (cursoYoga) {
        //         cursoYoga.inscriptos.push(inscrito);
        //         console.log(`Inscripción exitosa: ${inscrito.nombre} ${inscrito.apellido} en ${cursoYoga.nombre}`);
        //     }
        // }

        // document.getElementById('BtnInscribirse').addEventListener('click', () => {
        //     const formularioConteiner = document.getElementById('contenedorInfo');
        //     formularioConteiner.innerHTML = cargarFormulario();
        //     document.getElementById('BtnInscribirse').style.display = 'none'; 

        //     // Añadir un pequeño retardo para asegurarse de que el DOM se haya actualizado
        //     setTimeout(() => {
        //         const botonInscripcion = document.getElementById('botonInscripcion');
        //         if (botonInscripcion) {
        //             botonInscripcion.addEventListener('click', () => {
        //                 const nombre = document.getElementById('nombre').value;
        //                 const apellido = document.getElementById('apellido').value;
        //                 const direccion = document.getElementById('direccion').value;
        //                 const telefono = document.getElementById('telefono').value;

        //                 // Inscribir en el curso de YOGA
        //                 const inscrito = { nombre, apellido, direccion, telefono };
        //                 inscribirEnYoga(inscrito);

        //                 // Mostrar mensaje de bienvenida con los datos ingresados
        //                 formularioConteiner.innerHTML = `
        //                     <h2 class="text-2xl font-bold text-center mt-6 text-green-600">Bienvenido ${nombre} ${apellido} al curso de Yoga</h2>
        //                     <p class="text-center mt-4">Dirección: ${direccion}</p>
        //                     <p class="text-center mt-2">Teléfono: ${telefono}</p>`;
        //             });
        //         }
        //     }, 100);
        // });
    // function cargarHorarioRef(){

    //         return `<p>maaaaaa</p>`;

    ////https://formsubmit.co/

  
//     // }
// VerHorariosR.addEventListener('click',()=>{
//         const horarioContainerRef = document.getElementById('contenedorInfoR');
//         horarioContainerRef.innerHTML = cargarHorarioRef();
//         VerHorariosR.style.display = 'none'; //con none lo oculto al boton de ver horarios



//     })    


// btnInscripcion.addEventListener('click', () => {
//     const nombre = document.getElementById('nombre').value;
//     const apellido = document.getElementById('apellido').value;
//     const direccion = document.getElementById('direccion').value;
//     const telefono = document.getElementById('telefono').value;

//     const formularioConteiner = document.getElementById('contenedorInfo');
//     formularioConteiner.innerHTML = `
//         <div class="container mx-auto p-4">
//             <h1 class="text-3xl font-bold text-center mb-6 text-green-600">Gracias por inscribirte</h1>
//             <p class="text-lg text-center">Gracias ${nombre} ${apellido} por inscribirte en nuestro curso de yoga.</p>
//             <p class="text-lg text-center">Tu dirección es: ${direccion}</p>
//             <p class="text-lg text-center">Tu teléfono es: ${telefono}</p>
//         </div>
//     `;
// });

// VerHorariosYoga.addEventListener('click', () => {
//     const horarioContainer = document.getElementById('contenedorInfo');
//     horarioContainer.innerHTML = cargarHorarioYoga();
//     VerHorariosYoga.style.display = 'none';
// });

// // Función para cargar contenido inicial (puedes mantenerla si necesitas cargar algo al inicio)
// function cargarContenidoInicial() {
//     const contenedorInfo = document.getElementById('contenedorInfo');
//     contenedorInfo.innerHTML = cargarFormulario();
// }

// // Cargar contenido inicial al cargar la página
// window.onload = cargarContenidoInicial;

// async function accederAwebCam() {
//     const videoStreaming = document.querySelector("video")

//     const stream = await navigator.mediaDevices.getUserMedia({video: true})
//     videoStreaming.srcObject = stream
// }
//     navigator.mediaDevices.getUserMedia({video: true})
//     .then((stream)=> videoStreaming.srcObject = stream)
//     .catch((error)=> console.error("El usuario rechazó el acceso a la webcam."), error)    
// }


// document.getElementById('BtnInscribirse').addEventListener('click', () => {
//     const formularioConteiner = document.getElementById('divFormYoga');
//    formularioConteiner.innerHTML = cargarFormulario();
//    document.getElementById('BtnInscribirse').style.display = 'none'; 
//    document.getElementById('BtnVerHorariosYoga').style.display = 'none'; 


// });
// const BtnInscripcionYoga = document.getElementById("formularioIY")