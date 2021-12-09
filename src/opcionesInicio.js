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
    if(nombre.value==""||contraseña.value==""){
        console.log("Primero llena todos los datos");
    }else{
        console.log("Nombre: "+nombre.value);
        console.log("Contraseña: "+contraseña.value);
    }
    
}

function Registrar(){
    if(contraseñaRegistro.value==confirmarContraseñaRegistro.value){
        if(correo.value==""||nombreRegistro.value==""||contraseñaRegistro.value==""||confirmarContraseñaRegistro.value==""){
            console.log("Primero llena todos los datos");
        }else{
            console.log("Correo: "+correo.value);
            console.log("Nombre: "+nombreRegistro.value);
            console.log("Contraseña: "+contraseñaRegistro.value);
            console.log("Contraseña confirmar: "+confirmarContraseñaRegistro.value);
        }
        
    }else{   
        console.log("Error, contraseñas no son iguales");
    }
}

function IngresarCliente(){
    if(nombreCliente.value==""||apellido.value==""||cui.value==""||departamento.value==""){
        console.log("Primero llena todos los datos");
    }else{
        console.log("nombre "+nombreCliente.value);
        console.log("apellido "+apellido.value);
        console.log("cui "+cui.value);
        console.log("departamento "+departamento.value);
    }
    
}