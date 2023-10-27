import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../mascota.ts";

const crearMascota = async (req: Request, res: Response) => {
  try {
    const { tipo, nombre, descripcion } = req.body;
    if (!tipo || !nombre|| !descripcion) {
      res.status(400).send("Tipo, nombre, descripciones tienen que crearse");
      return;
    }
    if(tipo != "perros" ){
        res.status(400).send("Solo pueden haber perros, gatos o serpientes");
        return;
    }

    const newMascota = new MascotaModel({ tipo, nombre, descripcion });
    await newMascota.save();

    res.status(200).send({
      name: newMascota.tipo,
      age: newMascota.nombre,
      dni: newMascota.descripcion,
      id: newMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default crearMascota;