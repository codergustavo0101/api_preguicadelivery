const { Router } = require("express");
const routes = Router();

const ControllerMail = require("../controllers/ControllerMail");

routes.post("/storage", (req, res) => ControllerMail.sendMail(req, res));

module.exports = routes;
