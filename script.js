class Gaseosa {
    constructor(marca, cantidad, precio) {
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

let arrayGaseosas = [];
let miFormulario = document.querySelector("#formulario");
let inputGaseosa = document.querySelector("iMarca");

let marcaI = formulario.children[1].value;
let cantidadI = formulario.children[3].value;
let precioI = formulario.children[5].value;

let contenedor = document.querySelector("#gaseosaIngresada");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarGaseosa);
btnMostrar.addEventListener("click", MostrarTodasGaseosas);

inputGaseosa.focus();

function validarForm() {
    marcaI = formulario.children[1].value;
    cantidadI = formulario.children[3].value;
    precioI = formulario.children[5].value;
    console.log(marcaI);
    console.log(cantidadI);
    console.log(precioI);

    if (marcaI == "" || cantidadI == "" || precioI == "") {
        Swal.fire('Todos los campos son requeridos');
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarGaseosa(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = Swal.fire(
            'Estas seguro?',
            'Si estas seguro, dale OK',
            '');
        if (opcion == true) {
            let formulario = e.target
            arrayGaseosas.push(new Gaseosa(marcaI, cantidadI, precioI));
        } else {
            alert ("Quiere continuar?");
        }
        formulario.children[1].value = "";
        formulario.children[3].value = "";
        formulario.children[5].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        inputGaseosa.focus();
    } else {
        inputGaseosa.focus();
    }
}

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo producto ingresado:</h3>
    <p><strong> marca: </strong> ${marcaI}</p>
    <p><strong> cantidad: </strong> ${cantidadI}</p>
    <p><strong> precio: </strong> ${precioI}</p>
    <hr>`;
}

function MostrarTodasGaseosas(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = "<h3> Listado de todos los productos:</h3>";
    for (const gaseosa of arrayGaseosas) {
        displayTodos.innerHTML += `
        <p><strong> Marca: </strong> ${marcaI}</p>
        <p><strong> cantidad: </strong> ${cantidadI}</p>
        <p><strong> Precio: </strong> ${precioI}</p>
        <hr>`
    }
}