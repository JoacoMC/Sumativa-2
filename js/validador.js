//Validaciones
function validar() {
    const retValidarNombre = validarNombre();
    const retValidadContra = validarContra();
    const retValidarTelefono = validarTelefono();
    const retValidadAficiones = validarAficiones();
    const retValidarRegion = validarRegion();
    const retValidarComuna = validarComuna();
    const retValidarPagina = validarPagina();

    return retValidarNombre &&
           retValidarTelefono &&
           retValidadContra &&
           retValidadAficiones &&
           retValidarRegion &&
           retValidarComuna &&
           retValidarPagina;
}
//Nombre
function validarNombre() {
    const inputNombre = document.getElementById("nombre");
    const divErrNombre = document.getElementById("err-nombre");
    const nombre = inputNombre.value.trim();

    const regex = /^[a-zA-Z]{1}[a-zA-Z]{3,8}[0-9]*$/;

    if (nombre === "") {
        divErrNombre.innerText = "El nombre es obligatorio.";
        divErrNombre.className = "text-danger small";
        return false;
    }

    if (nombre.length < 5 || nombre.length > 10) {
        divErrNombre.innerText = "El nombre debe tener entre 5 y 10 caracteres.";
        divErrNombre.className = "text-danger small";
        return false;
    }

    if (!regex.test(nombre)) {
        divErrNombre.innerText =
            "El nombre debe comenzar con una letra, puede tener dígitos solo al final y no puede incluir símbolos o acentos.";
        divErrNombre.className = "text-danger small";
        return false;
    }

    divErrNombre.innerText = "OK";
    divErrNombre.className = "text-success small";
    return true;
}

//Contraseña
function validarContra() {
    const inputContra = document.getElementById("contra");
    const divErrContra = document.getElementById("err-contra");
    const inputConfirm = document.getElementById("confirm");
    const divErrConfirm = document.getElementById("err-confirm");
    const inputNombre = document.getElementById("nombre");

    let nombre = inputNombre.value;
    let contra = inputContra.value;
    let confirm = inputConfirm.value;

    var numero = false;
    var letra = false;

    for (var i = 0; i<contra.length+1; i++){
        if (!isNaN(parseInt(contra[i]))){
            var numero = true;
        }
    }

    for (var i = 0; i<contra.length+1; i++){
        const c = contra.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            letra = true;
        }
    }

    if (contra == "") {
        divErrContra.innerText = "La contraseña es obligatoria";
        divErrContra.className = "text-danger small";
        return false;
    } else if (contra.length > 6 || contra.length < 3) {
        divErrContra.innerText = "La contraseña debe tener entre 3 y 6 carácteres";
        divErrContra.className = "text-danger small";
        return false;
    } else if (contra != confirm) {
        divErrConfirm.innerText = "Contraseñas no coinciden";
        divErrConfirm.className = "text-danger small";
        return false;
    } else if (contra.includes(nombre)){
        divErrContra.innerText = "La contraseña no puede contener el nombre de usuario";
        divErrContra.className = "text-danger small";
        return false;
    } else if (!numero || !letra) {
        divErrContra.innerText = "La contraseña debe contener al menos una letra y un número";
        divErrContra.className = "text-danger small";
        return false;
    }
    else {
        divErrContra.innerText = "OK";
        divErrContra.className = "text-success small";
        return true;
    }
}

//Telefono
function validarTelefono() {
    const inputFono = document.getElementById("fono");
    const divErrFono = document.getElementById("err-fono");
    let strFono = inputFono.value;

    if ( isNaN(strFono) ) {
        divErrFono.innerText = "El teléfono debe ser un número";
        divErrFono.className = "text-danger small";
        return false;
    }

    if (strFono.length != 8) {
        divErrFono.innerText = "El teléfono debe tener 8 dígitos";
        divErrFono.className = "text-danger small";
        return false;
    }

    divErrFono.innerText = "OK";
    divErrFono.className = "text-success small";
    return true;
}

//Aficiones
let aficiones = [];

function agregarAficion() {
    const aficion = document.getElementById("aficion");
    const valor = aficion.value.trim();

    if (valor && !aficiones.includes(valor)) {
        aficiones.push(valor);
        mostrarAficiones();
        aficion.value = "";
    }
}

function quitarAficion(index) {
    aficiones.splice(index, 1);
    mostrarAficiones();
}

function mostrarAficiones() {
    const lista = document.getElementById("listaAficiones");
    lista.innerHTML = "";
    aficiones.forEach((aficion, index) => {
        const li = document.createElement("li");
        li.textContent = aficion + " ";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-primary my-3";
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        btn.onclick = () => quitarAficion(index);
        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function validarAficiones(){
    const divErrAficion = document.getElementById("err-aficion");
    if (aficiones.length < 2) {
        divErrAficion.innerText = "Debes agregar por lo menos 2 aficiones";
        divErrAficion.className = "text-danger small";
        return false;
    } else {
        return true;
    }
}

//pagina
function validarPagina() {
    const pagina = document.getElementById("pagina");
    const divErrPagina = document.getElementById("err-pagina");
    const valor = pagina.value.trim();
    const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    

    if (valor && !regex.test(valor)) {
        divErrPagina.innerText = "Debe ingresar una url que empiece en hhtps://";
        divErrPagina.className = "text-danger small";
        return false;
    }
    return true;
}

//region y comuna
function validarRegion() {
    const region = document.getElementById("region");
    const divErrReg = document.getElementById("err-region");

    if (!region.value || region.selectedIndex === 0) {
        divErrReg.innerText = "Debe seleccionar una región.";
        divErrReg.className = "text-danger small";
        return false;
    }
    return true;
}

function validarComuna() {
    const comuna = document.getElementById("comuna");
    const divErrComuna = document.getElementById("err-comuna");

    if (!comuna.value || comuna.selectedIndex === 0) {
        divErrComuna.innerText = "Debe seleccionar una comuna.";
        divErrComuna.className = "text-danger small";
        return false;
    }
    return true;
}
