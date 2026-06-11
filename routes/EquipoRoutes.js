import { Router } from "express";
import { getEquipos, getEquipoById } from "../controllers/EquipoController.js";

const equipoRouters = Router();

equipoRouters.get("/equipos", getEquipos);
equipoRouters.get("/equipos/:id", getEquipoById);

export default equipoRouters;
