
const consultasDeClientes = [];

const consultaDelUsusario = {
    nombre: "",
    email: "",
    telefono: "",
    consulta: ""
};

const seccionFormulario = document.querySelector("#formulario");

const inputNombre = document.querySelector("#contacto_inputNombre");
const inputEmail = document.querySelector("#contacto_inputEmail");
const inputTelefono = document.querySelector("#contacto_inputTelefono");
const inputTextarea = document.querySelector("#contacto_inputTextarea");
const botonEnviar = document.querySelector("#contacto_botonEnviar");

inputNombre.addEventListener("change", event =>{
    if(event.target.name === "nombre"){
        consultaDelUsusario.nombre = event.target.value
    }
});
inputEmail.addEventListener("change", event =>{
    if(event.target.name === "email"){
        consultaDelUsusario.email = event.target.value
    }
});
inputTelefono.addEventListener("cahnge", event =>{
    if(event.target.name === "telefono"){
        consultaDelUsusario.telefono = event.target.value
    }
});
inputTextarea.addEventListener("change", event =>{
    if(event.target.name === "textarea"){
        consultaDelUsusario.consulta = event.target.value
    }
});


const consultaHecha = nombre => {
    seccionFormulario.innerHTML = 
    `<p style="
    color: #dd3400;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.2rem;">
Gracias por su consulta <strong style="color: #FFD600">${nombre}</strong>, buscamos siempre dar la mejor experiencia :)
</p>

<button style="
display: inline-block;
background-color: rgb(20, 20, 20);
color: #c5541b;
border-radius: 10%;
border-color: #c5541b;
padding: 5px;
font-family: 'Barlow', sans-serif;
" id="boton_verConsulta">
Ver mi consulta
</button> `
}


botonEnviar.addEventListener("click", ()=>{
    const peticiones = {
        nombre: consultaDelUsusario.nombre,
        email: consultaDelUsusario.email, 
        telefono: consultaDelUsusario.telefono, 
        consulta: consultaDelUsusario.consulta
    };
        consultasDeClientes.push(peticiones);

    
    if(peticiones.nombre.trim() === '' || peticiones.email.trim() === '' ||peticiones.telefono.trim() === '' && peticiones.consulta.trim() === ''){
        Swal.fire('Debe completar los campos')
    }
    else{
        consultaHecha(consultaDelUsusario.nombre);
        localStorage.setItem("consulta", JSON.stringify(consultasDeClientes));

        const botonVerConsulta = document.querySelector("#boton_verConsulta");
        botonVerConsulta.addEventListener("click", ()=>{
            
            const verDetalles= JSON.parse(localStorage.getItem("consulta"));
            verDetalles.forEach(usuario => Swal.fire(usuario.consulta));
        })
    }
})