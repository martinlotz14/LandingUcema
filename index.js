const form = document.getElementById("form")
form.addEventListener('submit', function(event){
    event.preventDefault(); 

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value.trim();


    if(fullname == " "){
        alert("Ingresa tu nombre y apellido")
        return
    }

    if(!fullname.includes(" ")){
        alert("Ingresa tu nombre y apellido")
        return
    }


    if(!email.includes("@")){
        alert("Ingresa un mail valido")
        return
    }

    if(age < 18){
        alert("Para contactarnos debe ser mayor de edad")
        return
    }

    if(contact == ""){
        alert("Por favor, detalle su motivo de contacto")
        return
    }

    const Contacto = {
        name: fullname,
        mail: email,
        age: age,
        explanation: contact,
    }

    console.log(Contacto)



})

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}