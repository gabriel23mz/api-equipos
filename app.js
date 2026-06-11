import express from "express";
import { sequelize } from "./db/conexion.js";
import { Equipo } from "./models/EquipoModel.js";
import equipoRouters from "./routes/EquipoRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", equipoRouters);

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        
        console.log("Connection has been established successfully.");
        app.listen(port, () => {
            console.log("Servidor corriendo en el puerto " + port);
        });
    }catch (error) {
        console.error("DB connection error:", error);
        process.exit(1);
        console.error("Error " + error);
    }
}

main();


