import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../mascota.ts";

const borraMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const person = await MascotaModel.findOneAndDelete({ id }).exec();
    if (!person) {
      res.status(404).send("Mascota no encontrada");
      return;
    }
    res.status(200).send("Mascota borrada");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default borraMascota;