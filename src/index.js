import dotenv from "dotenv";
import express from 'express';
import cors from "cors";
import todoRoutes from "./todo/routes/index.js"
import morgan from "morgan";
import mongoose from "mongoose"


dotenv.config()
    
    const app = express();
    app.use(cors("*"));

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(morgan("dev"));

    app.use("/health_check", (req, res) => {
        res.send("Server healthy")
    })

    app.use("/api/v1", todoRoutes)

    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.TEST_DB, {
                useNewUrlParser: false,
                useUnifiedTopology: false,
            }).then(
                () => {
                    console.log("Data base connected!")
                    console.log(`Database loaded - url - ${process.env.TEST_DB}`);
                },
                (err) => {
                    log.error(err);
                    throw err;
                },
            );

    const port = process.env.NODE_ENV === "test" ? process.env.TEST_PORT : process.env.PORT;
    app.listen(port, () => console.log(`server started at Port ${port}`));
    