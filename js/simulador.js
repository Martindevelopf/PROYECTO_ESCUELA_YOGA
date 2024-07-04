
//// anexo a DOM
const selectCurso = document.querySelector("select#curso");
const notificarPrecio = document.querySelector("div#notificarprecio");
const botonCotizar = document.querySelector("button#btnCotizarCurso");
const selectCuotas = document.querySelector("select#cuotas");
const divPrecioTotal = document.getElementById("precioTotal"); 
const divErrorFCampos = document.getElementById("errorFCampos"); 
const botonultimaCot = document.querySelector("button#btnUltimacot");
const botonInscripcion = document.getElementById('inscripcionYoga');
const btnInscripcionRef = document.getElementById("inscripcionRef")
const btnInscripcionK = document.getElementById("inscripcionKun")


///////////////////////////////////////////////////////////////////////////////////////////////////

function alertFaltaCampos() {
    Swal.fire({
      title: "Debe ingresar todos los campos!",
    imageUrl: '../assets/yogagif_.gif',
      width: 400,
      padding: "2em",
      color: "#000000",
      timer: 4000,
      showConfirmButton: false,
      background: "#fde68a ",
      
    });
  }
  
    // en ves de usar un <a> href html , hacerlo con un evento click
botonInscripcion.addEventListener('click', () => {

            window.location.href = './pages/yoga.html';

    });
btnInscripcionRef.addEventListener("click",()=>{

        window.location.href = './pages/reflexologia.html';

});

btnInscripcionK.addEventListener("click",()=>{


window.location.href ='./pages/kundalini.html'

})

/////////////////////////////////////////////////////////////////////////////////////////////////
// Fn para recorrer el array de CURSOS EN DATOSCURSOS.JS y va agregando el nombre y el value.
function cargarCursos() {
    CURSOS.forEach((curso) => {
        selectCurso.innerHTML += `<option value="${curso.codigo}">${curso.nombre}</option>`;
    });
}


function mostrarPrecio() {
    const cursoSeleccionado = CURSOS.find(curso => curso.codigo == selectCurso.value);
    if (cursoSeleccionado) {
        notificarPrecio.textContent = `El valor del curso  ${cursoSeleccionado.nombre } es de : $${cursoSeleccionado.precio}`;
    }
}
function recuperarUltimaCotizacion() {
    return JSON.parse(localStorage.getItem("ultimaCotizacion"))// trae con el get lo que esta el el LS
    // devuelve cotización ó null (si no hubo)
}
function guardarCotizacionUltimoCursoLS() {
    const ultimaCotizacion = { 
        fecha: new Date(),
        btnUltimacot: botonultimaCot.textContent 
    }

    localStorage.setItem("ultimaCotizacion", JSON.stringify(ultimaCotizacion))// 
}

function cotizarCurso() {
    const cursoSeleccionado = CURSOS.find(curso => curso.codigo == selectCurso.value);
    const numeroCuotas = parseInt(selectCuotas.value);
    if (cursoSeleccionado && numeroCuotas ) {
        const precioTotal = cursoSeleccionado.precio / numeroCuotas;
        divPrecioTotal.textContent = `Precio por cuota (${numeroCuotas} ): $${precioTotal.toFixed(2)}`;
        guardarCotizacionUltimoCursoLS();
    }
    else  {
       // mostrarSweet();
       alertFaltaCampos();
    }
       

    }



selectCurso.addEventListener("change", mostrarPrecio); //Si el usuario selecciona una opción diferente a seleccione... llama a mostrar
botonCotizar.addEventListener("click", cotizarCurso);

cargarCursos();

botonultimaCot.addEventListener("click", ()=> {
    const ultimaCotizacion = recuperarUltimaCotizacion()

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
})


/////////////////////// para el futuro los demas cursos
/*
//btn inscripcion Reflexologia

function redirigir_btn(url) {
    window.location.href = url;
}
const inscripcionRefBtn = document.getElementById('inscripcionRef');
inscripcionRefBtn.addEventListener('click', function() {
            redirigir_btn("pages/reflexologia.html"); 
});
    
//btn inscripcion Kundalini

function redirigir_btn(url) {
    window.location.href = url;
}
const inscripcionKunBtn = document.getElementById('inscripcionKun');
inscripcionKunBtn.addEventListener('click', function() {
            redirigir_btn("pages/kundalini.html"); 
});*/