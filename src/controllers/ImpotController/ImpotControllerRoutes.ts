import { ImpotController } from "./ImpotController" 
import express from "express" 

let impotControllerRoutes = express.Router()

//put your routes here

impotControllerRoutes.get("/:cin", (request, response) => ImpotController.getImpot(parseInt(request.params.cin)).then(result => response.send(result)))

export { impotControllerRoutes }