const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server , {
    cors : {
        origin : "http://localhost:3000",
    }
});

// Socket.io
io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on('joinRoom' , (whoJoins) => {
        socket.join(whoJoins.chatid)
        console.log(whoJoins.member ,' has joined the room ' ,whoJoins.chatid )
    })

    socket.on("message", (message) => {
        console.log(message)
        io.to(message.chatid).emit("user-message", message);
        console.log('emitted to ',message.chatid)
        console.log('sent a message')
    });

    socket.on("disconnect", (reason) => {
        socket.leaveAll()
        console.log(reason , 'so its disconnected')
      });
});


// app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/chat", (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', '/chat/chat.html'));
});

app.get("/allchats", (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', '/allchats/allchats.html'));
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));
