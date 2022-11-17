import { render } from 'ejs';
import express from 'express'
import configViewEngine from './configs/viewEngine'
import * as dotenv from 'dotenv'
import initWebRoute from './route/web'
import connection from './configs/connectDB'
dotenv.config();
const app = express()
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})