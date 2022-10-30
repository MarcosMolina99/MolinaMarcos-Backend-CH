class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.libros.autor = [];
        this.libros.nombre = [];
        this.mascotas = [];
    }

    getFullName(nombre,apellido){
        return `${nombre} ${apellido}`
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        // let cantidadMascotas=0;
        // return cantidadMascotas;
        return this.mascotas.length;
    }
    addBook(nombreLibro, autorLibro){
        this.libros.nombre.push(nombreLibro);
        this.libros.autor.push(autorLibro);
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
        // nombreLibros = this.libros[0] + this.libros[2] + this.libros[4];
        
        // return nombreLibros;
        return this.libros.nombre;
    }
}
const usuario = new Usuario("Lionel","Messi");
usuario.getFullName("Lionel","Messi")
console.log(usuario.getFullName);


usuario.addMascota("Simba");
usuario.addMascota("Pumba");
console.log(usuario.addMascota);

let contadorMascotas = usuario.countMascotas();
console.log(`La cantidad de mascotas es de: ${contadorMascotas}`);
usuario.addBook("Harry Potter, ", "JK Rowling");
usuario.addBook("The blood of the elves ", "Andrzej Sapkowski");
usuario.addBook("The cather in the rye, ", "JD Salinger");

let mostrarLibros = [];
mostrarLibros = usuario.getBookNames()
console.log(`Los nombres de los libros son: ${mostrarLibros}`);
// console.log(usuario);