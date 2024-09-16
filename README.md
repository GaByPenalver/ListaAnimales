Este proyecto implementa un sistema de gestión de consultas veterinarias utilizando clases en ES6. A continuación se detallan los principales componentes y funcionalidades:

*Clases en ES6 con Herencia
Propietario: Representa al propietario de una mascota con propiedades para el nombre, dirección y teléfono. Incluye el método datosPropietario() para retornar la información del propietario.
Animal: Clase base que define el tipo de animal. Incluye el método getter getTipo() para retornar un mensaje que indica el tipo de animal.
Mascota: Hereda de la clase Animal y añade propiedades para el nombre y la enfermedad de la mascota. Incluye métodos getter y setter para Nombre y Enfermedad, y el método datosMascota() para retornar la información de la mascota.

*Métodos Get y Set en la Clase Mascota
Métodos getter y setter para las propiedades Nombre y Enfermedad.

*Método Get en la Clase Animal
El método getter getTipo() retorna el mensaje: "El tipo de animal es un: ${this.Tipo}".

*Método datosPropietario en la Clase Propietario
Permite acceder a la información del propietario desde las clases derivadas, retornando un mensaje con el nombre, dirección y teléfono del propietario.

*Captura de Elementos del Formulario con JavaScript
Se capturan los elementos del formulario para crear instancias de las clases Propietario y Mascota según el tipo de animal seleccionado (Gato, Perro, Conejo).

*Mostrar Datos en una Lista
Al hacer clic en el botón "Agregar", se muestran los datos del propietario y la mascota en una lista. Los mensajes de los métodos datosPropietario(), getTipo() y datosMascota() se concatenan para ser visualizados en la interfaz de usuario.


Para una mejor visualización, visitar el siguiente enlace: https://gabypenalver.github.io/ListaAnimales/
