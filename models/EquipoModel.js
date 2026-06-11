import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const Equipo = sequelize.define("equipos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estadio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anioFundacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: "equipos",
    timestamps: false
});
