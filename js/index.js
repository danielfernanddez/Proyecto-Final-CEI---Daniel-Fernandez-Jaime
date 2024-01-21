fetch("/components/header.html")// Llamo al método fetch dándole cómo argumento la dirección del archivo a importar

.then(response => response.text())// Se recupera la respuesta y se procesa como texto plano utilizando el objeto de respuesta.

.then(data => {
    document.querySelector("header").innerHTML = data;

    //VARIABLES PARA HEADER
    let menuBtn = document.querySelector(".barra-menu__hamburger"); //Variable icono hamburguesa
    let mobileMenu = document.querySelector(".container__mobile-menu"); // Variable lista vertical de secciones
    let body = document.querySelector("body"); //variable body

    //FUNCION PARA HEADER
    menuBtn.addEventListener("click", function(){  //funcion para menu desplegable
        menuBtn.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
        body.classList.toggle("is-closed");
    })
})// Entonces: utilizamos los datos importantes ya procesados utilizando el objeto de datos para ejecutar una función


//Fetch para el FOOTER, mismo procedimiento que fetch de Header.
fetch("/components/footer.html")
.then(response => response.text())
.then(data => {
    document.querySelector("footer").innerHTML = data;
})


//VARIABLES PARA GRID ACTIVITIES
let plusBtn = document.querySelectorAll(".plus-btn");

//FUNCION PARA GRID ACTIVITIES
plusBtn.forEach(function (btn, index) { 

    //Función de retorno de llamada del forEach.
    btn.addEventListener("click", function () { //Añado un event listener para que funcione el clic en todos los botones (+).
        btn.classList.toggle("is-open"); //añado toggle para que se active y desactive la clase al pulsar en los botones.

        let reverso = btn.closest(".container__activities--box"); //Uso closest para obtener el elemento padre más cercano y de esta manera que funcione el popup al pulsar en todos los botones.

        // Alterna la clase 'is-open' para mostrar/ocultar el reverso
        reverso.classList.toggle("is-open");
    });
});



//VARIABLES PARA COMPROBAR FORMULARIO
let nombre = document.querySelector("#nombre");
let lastName = document.querySelector("#lastName");
let company = document.querySelector("#company");
let email = document.querySelector("#email");
let info = document.querySelector("#info");

function comprobarFormulario(){ //Función en la que aplico la condición = Si no se rellenan todos los siguientes campos no se da por completo el formulario.
    if(nombre.value != "" && lastName.value != "" && company.value != "" && email.value != "" && info.value != ""){
        alert("Form Submited!");
    }else{
        alert("Finish the Form!");
    }
};
