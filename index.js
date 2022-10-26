class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(nombre,apellido){
        return `${nombre} ${apellido}`
    }

    addPet(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countPets(){
        let cantidadMascotas=0;
        return cantidadMascotas;
    }
    addBook(nombreLibro, autorLibro){
        this.libros.push(nombreLibro,autorLibro);
    }
    
    getBookNames(){
        let nombreLibros;
        // let value=0;
        // let length= this.libros.length;
        // console.log(length);
        // for(value of length){
        //     nombreLibros = nombreLibros + this.libros[value,1]
        //     value++;
        // }
        nombreLibros = this.libros[0] + this.libros[2] + this.libros[4];
        
        return nombreLibros;
    }
}
const usuario = new Usuario("Lionel","Messi");
usuario.getFullName("Lionel","Messi")
console.log(usuario.getFullName);


usuario.addPet("Simba");
usuario.addPet("Pumba");
console.log(usuario.addPet);

// let contadorMascotas = usuario.countPets();
// console.log(contadorMascotas);
usuario.addBook("Harry Potter, ", "JK Rowling");
usuario.addBook("The blood of the elves, ", "Andrzej Sapkowski");
usuario.addBook("The cather in the rye, ", "JD Salinger");

let mostrarLibros = usuario.getBookNames()
console.log(mostrarLibros);
console.log(usuario);