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
        background: "#60A5FA",
    }).then(() => {

        window.location.href = '../index.html';
    });
});
