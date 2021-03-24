//! Needs to commented at production
import * as dotenv from 'dotenv';

import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from 'helmet'
import { podcastRoutes } from './routes';

//! Needs to commented at production
dotenv.config();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send(`API is running at http://localhost:${process.env.PORT}`));
app.use('/api', podcastRoutes)

app.listen(process.env.PORT, () => {
    console.log("Node server started.");
});