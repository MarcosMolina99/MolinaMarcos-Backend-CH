const fs = require("fs") 

class Contenedor{
    constructor(ruta){
        this.ruta = ruta

    }

    async save(object){
        const lista = await this.getAll();

        let nuevoId;

        if(lista.length > 0 && lista.some((el) => el.title === object.title))
        {
            console.log("El producto ya se encuentra en el catalogo");
            return
        }

        if(lista.length == 0){
            nuevoId = 1
        }
        else {
            nuevoId = lista[lista.length - 1].id + 1
        }

        const nuevoObjectconId = {...object, id: nuevoId};

        lista.push(nuevoObjectconId);
        console.log(nuevoObjectconId);

        try{
            await fs.promises.writeFile(this.ruta,JSON.stringify(lista,null,2))
            return nuevoId;
        }catch(error){
            throw new Error(`Error al guardar un objeto: ${error}`)
        }
    }


    async getAll(){
        try{
            const data = await fs.promises.readFile(this.ruta, "utf8");
            return JSON.parse(data);
        }catch(error){
            return [];
        }
    }

    //CREACION OBTENER OBJETO RANDOM
    async getRandom(){
        try {
            const data = await fs.promises.readFile(this.ruta, 'utf8')
            const parsearData = JSON.parse(data)
            return parsearData[Math.floor(Math.random() * (parsearData.length))] //O 3
        } catch (error) {
            return [];
        }
    }

    async getById(id){
        try{
            const lista = await this.getAll();
            return lista.find(item => item.id ===id) ?? null
        }catch(error){
            throw new Error("El id no existe")
        }

    }

    async deleteById(id){
        const lista = await this.getAll();
        const nuevaLista = lista.filter(item => item.id != id);
        try{
            await fs.promises.writeFile(this.ruta,JSON.stringify(nuevaLista,null,2))
        }catch(error){
            throw new Error("No se guardaron los datos")
        }
    }

    async deleteAll(){
        try{
            await fs.promises.writeFile(this.ruta, JSON.stringify([],null,2))
        }catch(error){
            throw new Error("Error al borrar todos los datos")
        }
    }
}

module.exports = Contenedor;