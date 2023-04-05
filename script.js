
/* En este ejemplo podemos escuchar eventos de los usuarios utilizando atributos como onClick y otros a traves de JavaScript con las
herramientas addEventListener.
Al estar dentro de un formulario, este utiliza el ultimo botón con la acción de submit. Submit se utiliza para el envio de los datos
del formulario y recarga la pagina. 
En este ejemplo estamos anulando la acción del submit haciendo que la acción sea la de la función*/

const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario"); // selector con el Id del formulario.
const input1 = document.querySelector("#dato1");
const input2 = document.querySelector("#dato2");
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#resultado"); // El valor de la variable se insertara dentro de las etiquetas de html que tenga el ID resultado.

form.addEventListener('submit', sumarImputValues) // Hacemos un addEventListener del formulario, escuchamos el evento de submit y ejecutamos la función de sumarImputValues.

function sumarImputValues(event){ // Recibimos como parametro un evento (event), 

    event.preventDefault(); // Así cancelamos la accion del boton submit.
    console.log(event);   // Imprime en consola las propiedades del event, dento de estas está defaultPrevent.

    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs + " melones"; 

    console.log('click del botón calcular')
    console.log(input1.value + input2.value)
}

// Todo esto se puede solucionar ponientole al boton del html el tipo, es decir ( botton type=button). 

/* Tipos de addEventListener: en el link del archivo html*/
