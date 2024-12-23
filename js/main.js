const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre){
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (nombre.length > 50) {
        return 'Este campo debe tener menos de 50 caracteres';
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
    } else if (descripcionRegalo > 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }  else {
        return '';
    }
}

