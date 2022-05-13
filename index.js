// packages imports
import express from "express";
import session from "express-session";
import connectMongodbSession from "connect-mongodb-session";
import dotenv from "dotenv";

// other file imports
import { mongoconnection } from "./mongooseConnections.js";
import { publicRoutes } from "./routes/publicRoutes.js";
import { privateRoutes } from "./routes/authrouts.js";

// environment variable configuration
dotenv.config();

// database connection
await mongoconnection()

// server configuration
const app = express();

// Database connection for storing sessions
const mongodbStore = connectMongodbSession(session)
const store = new mongodbStore({
    uri: process.env.MONGO_URL,
    collection: "mysessions"
})

// using session middleware
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

// authorization
const auth = async (request, response, next) => {
    if (request.session.auth) {
        next()
    } else {
        response.status(400).send({ message: "Invalid autherization" })
    }
}
// server port
const port = process.env.PORT;

// server connection
app.listen(port, () => { console.log(`App is running at port:${port}`, "URL: http://localhost:7000") });

// middlewares
app.use(express.json())

// public route
app.use("/movies", publicRoutes);

// private route
app.use("/auth", auth, privateRoutes);
