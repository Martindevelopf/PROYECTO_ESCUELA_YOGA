const VerHorariosYoga = document.getElementById("BtnVerHorariosYoga");
const VerHorariosR = document.getElementById("BtnVerHorariosR")
const btnInscripcion =document.getElementById("BtnInscribirse")


function cargarHorarioYoga (){

    return `
                <div class="w-full p-4 overflow-auto flex items-center justify-center text-lg text-center">
                    <table class="min-w-full table-auto bg-green-200 border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-green-900 text-white">
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
function cargarFormulario(){
    return `
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-green-600">Inscripción Curso Yoga</h1>
        <div class="flex items-center justify-center">
            <form id="formInscripcion" class="bg-green-200 p-6 rounded-lg shadow-md w-full max-w-md">
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
                <div class="flex items-center justify-center">
                    <button type="button" id="botonInscripcion" class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Inscribirse
                    </button>
                </div>
            </form>
        </div>
       
    </div>
    `;
}
btnInscripcion.addEventListener('click', () => {
const formularioConteiner = document.getElementById('contenedorInfo');
formularioConteiner.innerHTML = cargarFormulario();
btnInscripcion.style.display = 'none'; 

});


VerHorariosYoga.addEventListener('click', () => {
        // Llamar a la función cargarHorarioYoga  agrego  el contenido al div contenedor contenedorInfo donde todo se mete ahi
        const horarioContainer = document.getElementById('contenedorInfo');
        horarioContainer.innerHTML = cargarHorarioYoga();
        VerHorariosYoga.style.display = 'none'; //con none lo oculto al boton de ver horarios
    });


 
    // function cargarHorarioRef(){

    //         return `<p>maaaaaa</p>`;



//     // }
// VerHorariosR.addEventListener('click',()=>{
//         const horarioContainerRef = document.getElementById('contenedorInfoR');
//         horarioContainerRef.innerHTML = cargarHorarioRef();
//         VerHorariosR.style.display = 'none'; //con none lo oculto al boton de ver horarios



//     })    

