function validarNombre(nombre){
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo solo acepta Letras';
    }
    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Este campo no puede estar vacio';
    } else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } 
    if (descripcionRegalo.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    if (!/^[a-z]/i.test(descripcionRegalo)) {
        return 'El campo descripción regalo solo acepta números y letras';
    } else {
        return '';
    }
}

function validarForm(e){
    e.preventDefault();
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };


    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = "oculto";
        document.querySelector('#exito').className = "";
        setTimeout(() => {
            window.location.href = 'wishlist.html';
          }, 2000);
    }
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];
        
        if (error) {
            cantidadErrores++;
            $form[key].className = "error";

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = "";
        }

        
    })
    return cantidadErrores;
}

const $form = document.querySelector('#carta-a-santa');
$form.addEventListener('submit', validarForm);
