import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import routes from "./routers/index.js";

const server = express();
server.use(json());
server.use(cors());
server.use(routes);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));


