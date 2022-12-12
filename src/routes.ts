import express from "express"
import { impotControllerRoutes } from "./controllers/ImpotController/ImpotControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/impot", impotControllerRoutes)

export { routes }