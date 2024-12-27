function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('123123') === 'El campo solo acepta Letras',
        'ValidarNombre no valido que el campo solo acepte letras',
  );

  console.assert(
    validarNombre('Santiago') === '',
    'validarNombre fallo con un nombre valido',
  );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === "Este campo no puede estar vacio",
        'validarCiudad no validó que la ciudad no sea vacía',
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'validarDescripcionRegalo no validó que descripción regalo no sea vacío',
    );

    console.assert(
        validarDescripcionRegalo(
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
            'Este campo debe tener menos de 50 caracteres',
            'validarDescripcionRegalo no validó que descripción regalo sea menor a 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('regalo') === '',
        'validarDescripcionRegalo fallo con un texto válido'
    )

    console.assert(
        validarDescripcionRegalo(',,,,,,,') === 'El campo descripción regalo solo acepta números y letras',
        'la función validarDescripcionRegalo no validó que que solo se acepten números y letras',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();