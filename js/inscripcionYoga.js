
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

function initForm (){

    const VerHorariosYoga = document.getElementById("BtnVerHorariosYoga");
    const btnInscripcion =document.getElementById("BtnInscribirse")

    VerHorariosYoga.addEventListener('click', () => {
        // Llamar a la función cargarHorarioYoga  agrego  el contenido al div contenedor contenedorInfo donde todo se mete ahi
        const horarioContainer = document.getElementById('contenedorInfo');
        horarioContainer.innerHTML = cargarHorarioYoga();
        VerHorariosYoga.style.display = 'none'; //con none lo oculto al boton de ver horarios
    });
    btnInscripcion.addEventListener('click', () => {
        window.location.href = '../pages/inscripcionYoga.html';
    }); 
    
}
initForm();