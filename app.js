import express from "express"; // Importamos la dependencia de express
import fisicaRoutes from "./routes/fisica.routes.js"
const app = express(); // Asignamos la dependencia a una constante
const port = 5000; // Indicamos el puerto

app.use(express.json()); // Se especifica el formato de trabajo  

app.use("/fisica",fisicaRoutes)

app.listen(port,() => {
    console.log(`La aplicación está corriendo en el purto ${port}`)
}) // Se indica el puerto por el que va a salir la aplicación y mostramos un mensaje

