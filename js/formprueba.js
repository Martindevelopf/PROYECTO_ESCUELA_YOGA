document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('yogaForm');
    const resultDiv = document.getElementById('result');
    const verInscriptosBtn = document.getElementById('verInscriptos');
    const inscriptos = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (inscriptos.length >= 10) {
            resultDiv.innerHTML = `<p class="text-red-500">No se pueden inscribir más de 10 personas.</p>`;
            return;
        }

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;

        const inscripto = {
            nombre,
            apellido,
            direccion,
            telefono
        };

        inscriptos.push(inscripto);
        form.reset();

        resultDiv.innerHTML = `<p class="text-green-500">Inscripción exitosa. ${nombre} ${apellido} ha sido añadido.</p>`;
        console.log(inscriptos);
    });

    verInscriptosBtn.addEventListener('click', () => {
        if (inscriptos.length === 0) {
            resultDiv.innerHTML = `<p class="text-yellow-500">No hay personas inscritas aún.</p>`;
            return;
        }

        let inscriptosList = '<ul class="list-disc pl-5">';
        inscriptos.forEach((inscripto, index) => {
            inscriptosList += `<li>${index + 1}. ${inscripto.nombre} ${inscripto.apellido} - ${inscripto.direccion} - ${inscripto.telefono}</li>`;
        });
        inscriptosList += '</ul>';
        resultDiv.innerHTML = inscriptosList;
    });
});

