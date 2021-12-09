//IniciarSesion
const nombre = 	document.getElementById("nombreLlamar");
const contraseña = document.getElementById("contraseñaLlamar");
//Registrar
const correo = 	document.getElementById("correoLlamar");
const nombreRegistro = 	document.getElementById("nombreLlamar");
const contraseñaRegistro = document.getElementById("passwordLlamar");
const confirmarContraseñaRegistro = document.getElementById("confirmarPasswordLlamar");
//IngresoClientes
const nombreCliente = 	document.getElementById("nombreLlamar");
const apellido = 	document.getElementById("apellidoLlamar");
const cui = document.getElementById("cuiLlamar");
const departamento = document.getElementById("departamentoLlamar");
//Funciones
function IniciarSesion(){
    console.log("Nombre: "+nombre.value);
    console.log("Contraseña: "+contraseña.value)
}

function Registrar(){
    console.log("Correo: "+correo.value);
    console.log("Nombre: "+nombreRegistro.value);
    console.log("Contraseña: "+contraseñaRegistro.value);
    console.log("Contraseña confirmar: "+confirmarContraseñaRegistro.value);
}

function IngresarCliente(){
    console.log("nombre "+nombreCliente.value);
    console.log("apellido "+apellido.value);
    console.log("cui "+cui.value);
    console.log("departamento "+departamento.value);
}