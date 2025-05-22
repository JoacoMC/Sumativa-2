# Sumativa-2
Se nos pidió realiazar la siguiente actividad.

Crea un formulario de registro HTML que permita el ingreso del nombre de usuario, la contraseña
y la confirmación de la contraseña. También debe permitir el ingreso de datos personales, como la
dirección postal (dirección y comuna), un número de teléfono, una página web personal (URL de
la página) y un conjunto de aficiones o pasatiempos.
Debe diseño del formulario (distribución de controles, estilo) queda a su criterio y creatividad. Sin
embargo, debe permitir la elección de la comuna mediante un control select. También debe
permitir el ingreso de las aficiones a una lista a partir de un input con la entrada de datos.

Crea una rutina de validación usando JavaScript que compruebe las siguientes reglas:
Los campos para el nombre de usuario, la contraseña, la dirección y el número de teléfono
deben ser obligatorios.
Debe validar el formato de la URL de la página web personal y el número de teléfono.
El nombre de usuario debe comenzar con una letras, puede tener uno o más dígitos pero
solo al final. Debe tener un mínimo de 5 y máximo de 10 caracteres y no puede tener
caracteres especiales (símbolos o acentos).
La contraseña debe tener de 3 a 6 caracteres y al menos un dígito y una letra. No puede
contener el nombre de usuario.
La confirmación debe coincidir con la contraseña.
El usuario debe ingresar al menos 2 aficiones.
El usuario debe seleccionar una comuna y no puede haber una comuna preseleccionada.

Considera además que el formulario debe estar estilizado con CSS o Bootstrap por completo y las
validaciones deben realizarse con JavaScript únicamente (mandatorio). Los mensajes de error deben
mostrarse en la proximidad del campo de ingreso (no en un cuadro emergente o alert). Y está
absolutamente prohibido emplear las validaciones de HTML (por ejemplo, required).
