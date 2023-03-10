import express from 'express';
import message from './config/message.js';
import enviroment from "./config/enviroment";

const app = express();
app.set("PORT",process.env.PORT || 4000);



export default app;