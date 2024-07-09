const VerHorariosKun = document.getElementById("BtnVerHorariosKund");
const btnInscripcionKun =document.getElementById("BtnInscribirseKund")

function cargarHorarioKun (){

    return `
                <div class="w-full p-4 overflow-auto flex items-center justify-center text-lg text-center">
                    <table class="min-w-full table-auto bg-purple-200 border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-purple-700 text-purple-700">
                                <th class="p-2 border border-gray-300">Hora</th>
                                <th class="p-2 border border-gray-300">Lunes</th>
                                <th class="p-2 border border-gray-300">Martes</th>
                                <th class="p-2 border border-gray-300">Miércoles</th>
                                <th class="p-2 border border-gray-300">Jueves</th>
                                <th class="p-2 border border-gray-300">Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">8:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Kundalini</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300  text-purple-700">
                                <td class="p-2 border border-gray-300">9:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300">Kundalini</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">10:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">11:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">12:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700 ">
                                <td class="p-2 border border-gray-300 ">13:00</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                                <td class="p-2 border border-gray-300">DESCANSO</td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">14:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">15:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                            <tr class="border-t border-gray-300 text-purple-700">
                                <td class="p-2 border border-gray-300">16:00</td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                                <td class="p-2 border border-gray-300"></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
              

            `;
        }
function initForm (){
    VerHorariosKun.addEventListener('click', () => {
        const horarioContainerK = document.getElementById('contenedorInfoK');
        horarioContainerK.innerHTML = cargarHorarioKun();
        VerHorariosKun.style.display = 'none'; //con none lo oculto al boton de ver horarios
    });
    btnInscripcionKun.addEventListener('click', () => {
        window.location.href = '../KundaliniWebs/inscripcionKun.html';
    });
}
initForm()
    
