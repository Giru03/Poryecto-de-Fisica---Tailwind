export const calcularVelocidad=(req, res)=> {
    const {distancia, tiempo}=req.body;


    const velocidad = distancia/tiempo;
    res.status(200).json({
        distancia,
        tiempo, 
        velocidad, 
        mensaje: `Para recorrer una distancia ${distancia} m, en un tiempo de ${tiempo} s, se requiere un velocidad de ${velocidad} m/s`
    });
}

export const calcularDistancia=(req,res)=>{
    const {velocidad, tiempo}=req.body;

    const distancia = velocidad*tiempo;
    res.status(200).json({
        velocidad,
        tiempo,
        distancia,
        mensaje: `La distancia recorrida con la velocidad ${velocidad} m/s, y el tiempo ${tiempo} s, es de ${distancia} m`
    })
}

export const calculcarTiempo=(req,res)=>{
    const {distancia, velocidad}=req.body;

    const tiempo = distancia/velocidad;
    res.status(200).json({
        distancia,
        velocidad,
        tiempo,
        mensaje: `El tiempo en que ese recorrío la distancia ${distancia} m, con una velocidad de ${velocidad} m/s, fue de ${tiempo} s`
    })
}

export const calcularFuerza=(req,res)=>{
    const {masa, aceleracion}=req.body;

    const fuerza = masa * aceleracion;
    res.status(200).json({
        masa, 
        aceleracion,
        fuerza,
        mensaje: `La fuerza encontrada al tener una masa de ${masa} g y calcularla por ${aceleracion} m/s^2 es de ${fuerza} N`
    })
}

export const calcularPeso=(req, res)=> {
    const gravedad = 9.8;
    const { masa}=req.body;

    const peso = masa * gravedad;
    res.status(200).json({
        masa,
        gravedad,
        peso,
        mensaje: `El peso es de ${peso} N, con una masa de ${masa} g y una gravedad de ${gravedad}`
    })
}

export const calcularEnergia=(req,res)=> {
    const { masa, velocidad }=req.body;

    const energia = masa * (velocidad **2) / 2; 
    res.status(200).json({
        masa, 
        velocidad,
        energia,
        mensaje: `La energía cinetica es de ${energia} J, al calcular la masa ${masa} g, por la velocidad ${velocidad} m/s, elevada al cuadrado sobre dos`
    })
}