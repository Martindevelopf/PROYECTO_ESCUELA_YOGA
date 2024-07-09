const btnHorariosRef =document.getElementById("BtnVerHorariosR")
const BtnIRef =document.getElementById("botonInscripcionR")



function cargarHorarioReflexologia (){

    const contenidoR =  `
        <div class="w-full p-4 overflow-auto flex items-center justify-center text-lg text-center">
            <table class="min-w-full table-auto bg-cyan-300 border-collapse rounded-lg overflow-hidden">
                <thead>
                    <tr class=" text-cyan-700">
                        <th class="p-2 border border-gray-300">Hora</th>
                        <th class="p-2 border border-gray-300">Lunes</th>
                        <th class="p-2 border border-gray-300">Martes</th>
                        <th class="p-2 border border-gray-300">Miércoles</th>
                        <th class="p-2 border border-gray-300">Jueves</th>
                        <th class="p-2 border border-gray-300">Viernes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t  text-cyan-700  border-gray-300">
                        <td class="p-2 border border-gray-300">8:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                    </tr>
                    <tr class="border-t text-cyan-700  border-gray-300">
                        <td class="p-2 border border-gray-300">9:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                    </tr>
                    <tr class="border-t text-cyan-700  border-gray-300">
                        <td class="p-2 border border-gray-300">10:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                    </tr>
                    <tr class="border-t text-cyan-700  border-gray-300">
                        <td class="p-2 border border-gray-300">11:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                    </tr>
                    <tr class="border-t text-cyan-700 border-gray-300">
                        <td class="p-2 border border-gray-300">12:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                    </tr>
                    <tr class="border-t text-cyan-700 border-gray-300 ">
                        <td class="p-2 border border-gray-300 ">13:00</td>
                        <td class="p-2 border border-gray-300">DESCANSO</td>
                        <td class="p-2 border border-gray-300">DESCANSO</td>
                        <td class="p-2 border border-gray-300">DESCANSO</td>
                        <td class="p-2 border border-gray-300">DESCANSO</td>
                        <td class="p-2 border border-gray-300">DESCANSO</td>
                    </tr>
                    <tr class="border-t text-cyan-700 border-gray-300">
                        <td class="p-2 border border-gray-300">14:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                    </tr>
                    <tr class="border-t text-cyan-700 border-gray-300">
                        <td class="p-2 border border-gray-300">15:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                    </tr>
                    <tr class="border-t text-cyan-700 border-gray-300">
                        <td class="p-2 border border-gray-300">16:00</td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300"></td>
                        <td class="p-2 border border-gray-300">Reflexologia</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    `;
    return contenidoR;
}

function cargarFormularioRef (){

    const formularioRefflexologia =  `<div   class="container mx-auto p-4">
<h1 class="text-3xl font-bold text-center mb-6 text-green-600">Inscripción Curso Yoga</h1>
<div class="flex items-center justify-center">
    <form id="formularioIR" class="bg-green-200 p-6 rounded-lg shadow-md w-full max-w-md">
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

    <button  type= "submit" id="botonInscripcionR" class="border border-cyan-50 my-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-4 rounded py-2 transform transition-transform hover:scale-105">Inscripcion</button>
</div>
       
    </form>
</div>

</div>
    `;
    return formularioRefflexologia;
}
function initForm (){
    btnHorariosRef.addEventListener('click', () => {
        const horarioContainerRef = document.getElementById('contenedorInfoR');
        horarioContainerRef.innerHTML = cargarHorarioReflexologia();
        btnHorariosRef.style.display = 'none';

        
    });
    botonInscripcionR.addEventListener('click', () => {

        window.location.href = '../pages/inscripcionR.html';
    });

    BtnIRef.addEventListener('click', () => {
        const formInscripcionR = document.getElementById('contenedorInfoR');
        formInscripcionR.innerHTML = cargarFormularioRef;
        BtnIRef.style.display = 'none';

        
    });
}

initForm()