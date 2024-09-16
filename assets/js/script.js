// Se Crean las clases en ES6 respetando la Herencia indicada en el diagrama de clases

class Propietario {
    constructor(Nombre, Dirección, Teléfono) {
        this.Nombre = Nombre;
        this.Dirección = Dirección;
        this.Teléfono = Teléfono;
    }
//Se crea el método “datosPropietario” en la clase correspondiente y que pueda ser accedido desde las clases inferiores
    datosPropietario() {
        return `El nombre del dueño es: ${this.Nombre}.El domicilio es: ${this.Dirección}, y el número telefónico de contacto: ${this.Teléfono}`;
    }
}

class Animal {
    constructor(Tipo) {
        this.Tipo = Tipo;
    }

//Se crea un método get para la clase Animal de la propiedad tipo para retornar el mensaje “El tipo de animal es un: ${this.tipo}”.
    
    getTipo() {
        return `El tipo de animal es un: ${this.Tipo} ,`;
    }

}

class Mascota extends Animal {
    constructor(Nombre, Enfermedad, Tipo) {
        super(Tipo);
        this._Nombre = Nombre; 
        this._Enfermedad = Enfermedad;
    }


   //Se crean los métodos get y set para la clase de mascota

    getNombre() {
        return this._Nombre;
    }

    setNombre(Nombre) {
        this._Nombre = Nombre;
    }

    getEnfermedad() {
        return this._Enfermedad;
    }

    setEnfermedad(Enfermedad) {
        this._Enfermedad = Enfermedad;
    }

    datosMascota() {
        return `mientras que el nombre de la mascota es: ${this._Nombre}, y la enfermedad es: ${this._Enfermedad}`;
    }
}

function registrarConsulta(event) {
    event.preventDefault();



    const nombrePropietario = document.getElementById("propietario").value;
    const telefonoPropietario = document.getElementById("telefono").value;
    const direccionPropietario = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipoAnimal = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;

const propietario = new Propietario(nombrePropietario, direccionPropietario, telefonoPropietario);
const mascota = new Mascota(nombreMascota, enfermedad, tipoAnimal);

const resultado = document.getElementById("resultado").querySelector("ul");
    resultado.innerHTML = `
        <li>${propietario.datosPropietario()}</li>
        <li>${mascota.getTipo()}${mascota.datosMascota()}</li>
    `;
}

document.querySelector("form").addEventListener("submit", registrarConsulta);
