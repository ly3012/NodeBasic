import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        res.send(`I'm Ly`)
    })
    return app.use('/', router);
}

export default initWebRoute;