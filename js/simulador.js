document.addEventListener('DOMContentLoaded', async(event) => { 

    //// anexo a DOM
    const notificarPrecio = document.querySelector("div#notificarprecio");
    const botonCotizar = document.querySelector("button#btnCotizarCurso");
    const divPrecioTotal = document.getElementById("precioTotal"); 
    const divErrorFCampos = document.getElementById("errorFCampos"); 
    const botonultimaCot = document.querySelector("button#btnUltimacot");

    // conexión a botones del index de fotos que se agrandan estos tres de abajo
    const botonInscripcion = document.getElementById('inscripcionYoga');
    const btnInscripcionRef = document.getElementById("inscripcionRef");
    const btnInscripcionK = document.getElementById("inscripcionKun");

    //////////////////////////////////////////////////////////////////////////////


    await obtenerCursos()
    botonInscripcion.addEventListener('click', () => {
        window.location.href = './pages/yoga.html';
    });
    
    btnInscripcionRef.addEventListener("click", () => {
        window.location.href = './pages/reflexologia.html';
    });
    
    btnInscripcionK.addEventListener("click", () => {
        window.location.href = './pages/KundaliniWebs/kundalini.html';
    });
    
    botonCotizar.addEventListener("click", cotizarCurso);

    botonultimaCot.addEventListener("click", () => {
        const ultimaCotizacion = recuperarUltimaCotizacion();

        if (ultimaCotizacion !== null) {
            // Si hay una cotización previa, mostrar con SweetAlert
            Swal.fire({
                title: 'Última cotización',
                text: 'Su última cotización fue el: ' + ultimaCotizacion.fecha,
                imageUrl: '../assets/reloj-de-arena_.gif',
                showConfirmButton: false,
                timer: 3000,
                imageWidth: 100, // seteo medidas largo/ancho
                imageHeight: 100,
                background: '#fde68a',
            });
        } else {
            Swal.fire({
                imageUrl: '../assets/alerta.gif',
                imageWidth: 100, 
                imageHeight: 100,
                title: 'No se ha realizado cotizaciones ',
                showConfirmButton: false,
                timer: 3000,
                background: '#fde68a',
            });
        }
    });

})

function alertFaltaCampos() {
    Swal.fire({
        title: "¡Debe ingresar todos los campos!",
        imageUrl: '../assets/yogagif_.gif',
        width: 400,
        padding: "2em",
        color: "#000000",
        timer: 4000,
        showConfirmButton: false,
        background: "#fde68a",
    });
}

// en vez de usar un <a> href html , hacerlo con un evento click

function recuperarUltimaCotizacion() {
    return JSON.parse(localStorage.getItem("ultimaCotizacion")); // trae con el get lo que está en el LS
    // devuelve cotización o null (si no hubo)
}

function guardarCotizacionUltimoCursoLS() {
    const botonultimaCot = document.querySelector("button#btnUltimacot");

    const ultimaCotizacion = {
        fecha: new Date(),
        btnUltimacot: botonultimaCot.textContent,
    };

    localStorage.setItem("ultimaCotizacion", JSON.stringify(ultimaCotizacion));
}

function cotizarCurso() {
    const selectCuotas = document.querySelector("select#cuotas");

    const cursoSeleccionado = CURSOS.find(curso => curso.codigo == selectCurso.value);
    const numeroCuotas = parseInt(selectCuotas.value);

    if (cursoSeleccionado && numeroCuotas) {
        const precioTotal = cursoSeleccionado.precio / numeroCuotas;
        Swal.fire({
            title: `Cotización para ${cursoSeleccionado.nombre}`,
            html: `El precio de ${cursoSeleccionado.nombre} es ${cursoSeleccionado.precio} <br> Precio por cuota (${numeroCuotas}): $${precioTotal.toFixed(2)}`,
            imageUrl: '../assets/geld.gif',
            imageWidth: 100,
            imageHeight: 100,
            confirmButtonText: `Desea inscribirse en ${cursoSeleccionado.nombre}`,
            background: '#fde68a',
            timer: 9000,
        }).then((result) => {
            // Voy preguntando si el código es tal para redireccionar a la inscripción correspondiente
            if (result.isConfirmed) {
                if (cursoSeleccionado.codigo === "1") {
                    window.location.href = './pages/yoga.html';
                } else if (cursoSeleccionado.codigo === "2") {
                    window.location.href = './pages/reflexologia.html';
                } else if (cursoSeleccionado.codigo === "3") {
                    window.location.href = './pages/KundaliniWebs/kundalini.html';
                } else {
                    window.location.href = './index.html'; // si pasa el timer se queda en index
                }
            }
        });
        guardarCotizacionUltimoCursoLS();
    } else {
        alertFaltaCampos();
    }
}


