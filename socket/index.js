import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUsers = [];

const addnewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username == username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socket !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
    socket.on("newUser", (username) => {
        addnewUser(username, socket.id)
    })
  socket.on("disconnect", () => {
    removeUser(socket.id)
  });
});

io.listen(3000);
