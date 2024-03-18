const { Router } = require("express");
const routes = Router();

const mailRoutes = require("./Mail.routes")


routes.use("/mail", mailRoutes);


module.exports = routes
