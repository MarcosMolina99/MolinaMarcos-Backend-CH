import database from "../../server";

const createTable = async () => {
    try{
        await database.schema.createTable("product", (productTable) =>{
            productTable.increments("id").primary();
            productTable.string("name", 50).notNullable();
            productTable.string("title", 50).notNullable();
            productTable.integer("price").notNullable();

            console.log("Tabla de productos creada");
            database.destroy();
        })
    }catch{
        console.log("Error", err);
        database.destroy();
    }
}

createTable();