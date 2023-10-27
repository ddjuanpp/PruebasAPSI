import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../mascota.ts";

const getLista = async (_req: Request, res: Response) => {
  try {
    const mascotas = await MascotaModel.findOne().exec();
    res.status(200).send(mascotas);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getLista;