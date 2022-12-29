db.products.insert([
    {
        name: "Fideos",
        price: 500,
        type: "Comida",
    },
    {
        name: "Detergente",
        price: 200,
        type: "Limpieza",
    },
    {
        name: "Remera",
        price: 800,
        type: "Ropa",
    },
  ]);

  db.message.insert([
    {
      user_name: "MarcosM",
      message:
        "Producto a comprar",
      time: "",
    },
    {
        user_name: "MarcosM",
        message:
          "Producto a comprar",
        time: "",
    },
    {
        user_name: "MarcosM",
        message:
          "Producto a comprar",
        time: "",
    },
  ]);

  db.products.find();
db.products.estimatedDocumentCount();

db.message.find();
db.message.estimatedDocumentCount();

db.products.insertOne({
  name: "testing user",
  price: 1000,
  type:"test",
});

db.products.find({ price: { $lte: 1000 } });
db.products.find({
  $and: [{ price: { $lt: 3000 } }, { price: { $gt: 1000 } }],
});
db.products.find({
  price: { $gt: 3000 },
});

db.products.find().skip(2).limit(1).sort({ precio: -1 });

db.products.update({}, { $inc: { stock: 100 } }, { multi: true });
db.products.update(
  { price: { $gt: 4000 } },
  { $set: { stock: 0 } },
  { multi: true }
);
db.products.deleteMany({ price: { $lte: 1000 } });

db.createUser({
  user: "Prueba",
  pwd: "1234",
  roles: [{ role: "read", db: "ecommerce" }],
});