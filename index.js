class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombreLibro, autorLibro){
        this.libros.push(nombreLibro,autorLibro);
    }
    
    getBookNames(){
        let nuevoArray = [];
        for(let i=0; i<this.libros.length; i++){
            if(i % 2 ==0){
             nuevoArray.push(this.libros[i]);   
            }
            
        }
        console.log(nuevoArray);
        
        // return nombreLibros;
        return nuevoArray;
    }
}
const usuario = new Usuario("Lionel","Messi");
usuario.getFullName();
console.log(usuario.getFullName);

usuario.addMascota("Simba");
usuario.addMascota("Pumba");
console.log(usuario.addMascota);

let contadorMascotas = usuario.countMascotas();
console.log(`La cantidad de mascotas es de: ${contadorMascotas}`);
// usuario.addBook([{nombreLibro: "Harry Potter", autorLibro:"JK Rowling"}]);
// console.log(usuario);
// usuario.addBook([{nombreLibro: "The blood of the elves", autorLibro:"Andrzej Sapkowski"}]);
// console.log(usuario);
// usuario.addBook([{nombreLibro: "The catcher in the rye", autorLibro:"JD Salinger"}]);
// console.log(usuario);
// usuario.addBook = [{nombreLibro: "Harry Potter", autorLibro:"JK Rowling"},{nombreLibro: "The blood of the elves", autorLibro:"Andrzej Sapkowski"}]
usuario.addBook("Harry Potter", "JK Rowling");
usuario.addBook("Blood of the elves", "Andzej Sapkowski");
console.log(usuario);
let mostrarLibros = [];
mostrarLibros = usuario.getBookNames()
console.log(`Los nombres de los libros son: ${mostrarLibros}`);