import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getLista from "./resolvers/getLista.ts";
import getMascota from "./resolvers/getMascota.ts";
import crearMascota from "./resolvers/crearMascota.ts";
import updateMascota from "./resolvers/updateMascota.ts";
import borraMascota from "./resolvers/borraMascota.ts";



if (!await mongoose.connect("mongodb+srv://jdomenechp:1234@clustermascotas.ydlnaez.mongodb.net/?retryWrites=true&w=majority")) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect("mongodb+srv://jdomenechp:1234@clustermascotas.ydlnaez.mongodb.net/?retryWrites=true&w=majority");
const app = express();
app.use(express.json());
app
  .get("/api/mascotas", getLista)
  .get("/api/mascotas/:id", getMascota)
  .post("/api/mascotas", crearMascota)
  .put("/api/mascotas/:id", updateMascota)
  .delete("/api/mascotas/:id", borraMascota);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});