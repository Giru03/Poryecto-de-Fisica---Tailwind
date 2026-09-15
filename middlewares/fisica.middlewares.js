export const validarVelocidad=(req, res, next) => {
    
    const {distancia, tiempo}=req.body

    if(distancia===undefined || tiempo===undefined){
        return res.status(400).json({
            mensaje: "La distancia y el tiempo son datos obligatorios"
        });
    };

    if(typeof distancia!=="number" || typeof tiempo!=="number") {
        return res.status(400).json({
            mensaje: "Los datos que ingreses deben de ser números"
        });
    }

    if(distancia < 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje: "La distancia y el tiempo no pueden ser negativos"
        });
    };

    if(tiempo===0){
        return res.status(400).json({
            mensaje: "El tiempo no puede ser 0"
        });
    };

next(); 

}

export const validarDistancia=(req, res, next) => {
    const {velocidad, tiempo}=req.body

    if(velocidad===undefined || tiempo===undefined){
        return res.status(400).json({
            mensaje: "La velocidad y el tiempo son datos obligatorios"
        });
    };

    if(typeof velocidad!=="number" || typeof tiempo!=="number") {
        return res.status(400).json({
            mensaje: "Los datos que ingreses deben de ser números"
        });
    }

    if(velocidad < 0 || tiempo < 0) {
        return res.status(400).json({
            mensaje: "La velocidad y el tiempo no pueden ser negativos"
        });
    };

    if(tiempo===0){
        return res.status(400).json({
            mensaje: "El tiempo no puede ser 0"
        });
    };

next();
}

export const validarTiempo=(req, res, next) => {
    const {distancia, velocidad}=req.body

    if(distancia===undefined || velocidad===undefined){
        return res.status(400).json({
            mensaje: "La distancia y la velocidad son datos obligatorios"
        });
    };

    if(typeof distancia!=="number" || typeof velocidad!=="number") {
        return res.status(400).json({
            mensaje: "Los datos que ingreses deben de ser números"
        });
    }

    if(distancia < 0 || velocidad < 0) {
        return res.status(400).json({
            mensaje: "La distancia y la velocidad no pueden ser negativos"
        });
    };

    if(velocidad===0){
        return res.status(400).json({
            mensaje: "La velocidad no puede ser 0"
        });
    };

next();
} 

export const validarFuerza=(req,res, next) => {
    const {masa, aceleracion}=req.body
        if(masa === undefined || aceleracion === undefined) {
            return res.status(400).json({
                mensaje: "La masa y la aceleración son datos obligatorios"
            });
        };

        if (typeof masa!=="number" || typeof aceleracion!== "number") {
            return res.status(400).json ({
                mensaje: "Los datos ingresados deben de ser numericos"
            });
        };

        if (masa < 0 || aceleracion < 0) {
            return res.status(400).json({
                mensaje: "La masa y la aceleración deben der mayores a 0"
            });
        };

        if(aceleracion===0){
        return res.status(400).json({
            mensaje: "La aceleración no puede ser 0"
        });
    };

next();
}

export const validarPeso=(req,res,next)=> {
    const {masa}=req.body

    if(masa === undefined) {
        return res.status(400).json({
            mensaje: "La masa es un dato obligatorio"
        });
    };

    if(typeof masa!=="number") {
        return res.status(400).json({
            mensaje: "La masa debe de ser un dato numerico"
        });
    };

    if(masa <0) {
        return res.status(400).json({
            mensaje: "La masa debe ser mayor a 0"
        });
    };

    if(masa===0){
        return res.status(400).json({
            mensaje: "La masa no puede ser 0"
        });
    };

    next();
}

export const ValidarEnergia=(req,res,next) =>{
    const {masa, velocidad}=req.body

    if(masa === undefined || velocidad === undefined ) {
        return res.status(400).json({
            mensaje: "La masa y la velocidad, son datos obligatorios"
        });
    };

    if(typeof masa !== "number" || typeof velocidad !== "number") {
        return res.status(400).json({
            mensaje: "La masa y la velocidad son datos numericos"
        });
    };

    if(masa <0 || velocidad <0) {
        return res.status(400).json({
            mensaje: "La masa y la velocidad deben de ser mayor a 0 "
        })
    };

    if(masa===0){
        return res.status(400).json({
            mensaje: "La masa no puede ser 0"
        });
    };

next()
}