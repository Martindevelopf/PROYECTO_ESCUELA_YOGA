const selectCurso = document.querySelector("select#curso");


const CURSOS = [];
//const URLCursos = "js/cursos.json"; // supuesta app backend
const URLCursos = "https://668c29a80b61b8d23b0c9c4e.mockapi.io/CURSOS";

///////////////////////////////////////////////////////////////////////////////////////////////////
async function obtenerCursos() {
    // petición fetch para traer los cursos
    let data = await fetch(URLCursos)
    let cursos = await data.json()

    
    CURSOS.push(...cursos)
        cargarCursos()
  
}
function cargarCursos() {
    if (selectCurso === null ) return;

    selectCurso.innerHTML = '<option selected disabled>Seleccionar...</option>';
    CURSOS.forEach((curso) => {
        selectCurso.innerHTML += `<option value="${curso.codigo}">${curso.nombre}</option>`;
    });
}
