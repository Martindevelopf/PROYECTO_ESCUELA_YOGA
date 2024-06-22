const VerHorariosYoga = document.getElementById("BtnVerHorariosYoga");
const VerHorariosR = document.getElementById("BtnVerHorariosR")


function cargarHorarioYoga (){

    return `
                <div class="w-full p-4 overflow-auto flex items-center justify-center text-lg text-center">
                    <table class="min-w-full table-auto bg-white border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-cyan-700 text-white">
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
                <div class="flex justify-center">
                 <button id="BtnInscripcionYoga" class="border border-cyan-50 my-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-4 rounded py-2 transform transition-transform hover:scale-105">Inscripcion</button>
    </div>

            `;
        }


VerHorariosYoga.addEventListener('click', () => {
        // Llamar a la función cargarHorarioYoga  agrego  el contenido al div contenedor contenedorInfo donde todo se mete ahi
        const horarioContainer = document.getElementById('contenedorInfo');
        horarioContainer.innerHTML = cargarHorarioYoga();
        VerHorariosYoga.style.display = 'none'; //con none lo oculto al boton de ver horarios
    });
    function cargarHorarioRef(){

            return `<p>maaaaaa</p>`;



    }
VerHorariosR.addEventListener('click',()=>{
        const horarioContainerRef = document.getElementById('contenedorInfoR');
        horarioContainerRef.innerHTML = cargarHorarioRef();
        VerHorariosR.style.display = 'none'; //con none lo oculto al boton de ver horarios



    })    

    