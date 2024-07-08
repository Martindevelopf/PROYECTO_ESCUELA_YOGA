const formularioCon = document.getElementById("contactForm");

formularioCon.addEventListener('submit', (e) => { 
    e.preventDefault();

    Swal.fire({
        title: "¡Mensaje enviado!",
        icon: "success",
        width: 400,
        padding: "2em",
        color: "#000000",
        timer: 3000,
        showConfirmButton: false,
        background: "#fde68a",
    }).then(() => {

        window.location.href = '../index.html';
    });
});
