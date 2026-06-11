import { Router } from "express";
import { getEquipos, getEquipoById, createEquipo } from "../controllers/EquipoController.js";

const equipoRouters = Router();

equipoRouters.get("/equipos", getEquipos);
equipoRouters.get("/equipos/:id", getEquipoById);
equipoRouters.post("/equipos", createEquipo);

export default equipoRouters;
