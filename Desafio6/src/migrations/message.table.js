import knex from "knex";

const config = {
    client: "sqlite3",
    connection: {
        fileName: path.resolve(__dirname, "./database/coder.sqlite"),
    },
    useNullAsDefault: true,
}

const database = knex(config);

const createMessageTable = async () =>{
    try{
        await database.schema.createTable("message", (messageTable)=> {
            messageTable.increments("id").primary();
            messageTable.string("username", 100).notNullable();
            messageTable.string("message", 500).notNullable();
            messageTable.string("time", 250).notNullable();
        })
        console.log("Tabla de mensajes creada");
    }
    catch{
        console.log(err);
    }
}