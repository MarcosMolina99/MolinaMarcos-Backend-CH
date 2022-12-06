
const chat = document.getElementById("listMessage");
const messageForm = document.getElementById("messageForm");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const sendMessage = (infoProduct) => {
  socket.emit("chat:Message", productInfo);
};

const Message = (chat) => {
  const date = new Date().toLocaleString("es-AR");
  const html = chat.map((Message) => {
    console.log(Message);
    return `<li>
              <p>${Message.email}<span>[${date}]</span>:<span>${Message.message}</span>
              </p>
            </li>`;
  });

  chat.innerHTML = html.join(" ");
};


const submitHandlerMessage = (e) => {
  e.preventDefault();

  const infoMessage = {
    email: emailInput.value,
    message: messageInput.value,
  };

  sendMessage(infoMessage);

  messageInput.value = "";
};

messageForm.addEventListener("submit", submitHandlerMessage);

socket.on("server:message", Message);