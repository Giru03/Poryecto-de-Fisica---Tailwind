import { Router } from "express";
import { ValidarEnergia, validarFuerza, validarPeso, validarVelocidad } from "../middlewares/fisica.middlewares.js";
import { calcularEnergia, calcularFuerza, calcularPeso, calcularVelocidad } from "../controllers/fisica.controller.js";
import { validarDistancia } from "../middlewares/fisica.middlewares.js";
import { calcularDistancia } from "../controllers/fisica.controller.js";
import { validarTiempo } from "../middlewares/fisica.middlewares.js";
import { calculcarTiempo } from "../controllers/fisica.controller.js";

const router = Router(); 

router.post("/velocidad", validarVelocidad, calcularVelocidad);
router.post("/distancia", validarDistancia, calcularDistancia);
router.post("/tiempo", validarTiempo, calculcarTiempo);

router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/peso", validarPeso, calcularPeso)

router.post("/energia", ValidarEnergia, calcularEnergia)

export default router;