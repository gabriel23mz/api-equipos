import { Equipo } from "../models/EquipoModel.js";

export const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll();

        return res.status(200).json({
            success: true,
            data: equipos
        });

    }catch (error){
        console.error("Error getEquipos:", error);

        return res.status(500).json({
            success: false,
            message: "Error al obtener equipos"
        });
    }
}

export const getEquipoById = async (req, res) => {
    try {
        const { id } = req.params;

        const equipo = await Equipo.findByPk(id);

        if (!equipo) {
            return res.status(404).json({
                success: false,
                message: "Equipo no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            data: equipo
        });

    } catch (error) {
        console.error("Error getEquipoById:", error);

        return res.status(500).json({
            success: false,
            message: "Error al obtener equipo"
        });
    }
};