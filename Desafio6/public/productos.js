const socket = io();
const formDelProducto = document.getElementById("formDelProducto");
const productInput = document.getElementById("nombreDelProducto");
const tipoDeProducto = document.getElementById("tipoDeProducto");
const priceInput = document.getElementById("precioDelProducto")
const listProducts = document.getElementById("listProducts");

const sendProduct = (productInfo) => {
  socket.emit("product:info", productInfo);
};

const renderProduct = (dataProducto) => {
  const html = dataProducto.map((productInfo) => {
    console.log(productInfo);
    return `<ul>
                <li>
                    <h2>${productInfo.name}</h2>
                    <h3>${productInfo.type}</h3>
                    <h3>${productInfo.price}</h3>
                </li>
            </ul>`;
  });

  listProducts.innerHTML = html.join(" ");
};

const submitHandler = (event) => {
  event.preventDefault();
  const productInfo = {
    name: productInput.value,
    type: tipoDeProducto.value,
    price: priceInput.value,
  };
  sendProduct(productInfo);
  formDelProducto.reset();
};

formDelProducto.addEventListener("submit", submitHandler);

socket.on("server:product", renderProduct);