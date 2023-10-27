import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../mascota.ts";

const updateMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { tipo, nombre, descripcion } = req.body;
    if (!tipo || !nombre || !descripcion) {
      res.status(404).send("Tipo, nombre, descripciones tienen que declararse");
      return;
    }
    if(tipo !== "perros" || tipo !== "gatos" || tipo!== "serpientes"){
        res.status(400).send("Solo pueden haber perros, gatos o serpientes");
        return;
    }

    const updateMascota = await MascotaModel.findOneAndUpdate(
      { id },
      { tipo, nombre, descripcion },
      { new: true }
    ).exec();

    if (!updateMascota) {
      res.status(404).send("Mascota no encontrada");
      return;
    }

    res.status(200).send({
      tipo: updateMascota.tipo,
      nombre: updateMascota.nombre,
      descripcion: updateMascota.descripcion,
      id: updateMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateMascota;