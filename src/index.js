// forma actual de importar -> requiere babel
import app from "./app";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets";
import { connectMongo } from "./db";

connectMongo();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);


console.log("Server is running on port 3000");
sockets(io);