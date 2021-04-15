//! Needs to commented at production
// import * as dotenv from 'dotenv';
// dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from 'helmet';
import routes from './routes';
import './services/mongo/database';
//! Needs to commented at production

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send(`API is running at http://localhost:5000`));
app.use(routes);

app.listen(5000, () => {
    console.log("Node server started.");
});