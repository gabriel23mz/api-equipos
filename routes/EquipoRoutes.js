import { Router } from "express";
import { getEquipos } from "../controllers/EquipoController.js";

const equipoRouters = Router();

equipoRouters.get("/equipos", getEquipos);

export default equipoRouters;
