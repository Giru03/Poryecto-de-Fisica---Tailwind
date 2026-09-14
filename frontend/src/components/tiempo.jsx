import { useState } from "react";

function Tiempo() {
    const [velocidad, setVelocidad] = useState(0);
    const [distancia, setDistancia] = useState(0); 
    const [resultado, setResultado] = useState(null);


    const calcularTiempo = async (e) => { e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/fisica/tiempo', {
                method: 'POST',
                headers: {
                    'content-Type' : 'application/json',
                },

                body: JSON.stringify({
                    distancia: Number(distancia),
                    velocidad: Number(velocidad)
                }),
            });

            const data = await response.json();
            setResultado(data); 
        } catch (error) {
            console.error('Error al conectar a la base de datos, arregle el codigo', error); 
        }
    };
    
    return(
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4"> Calculadora de Física - Tiempo </h1>
            <form onSubmit={calcularTiempo} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium"> Velociad (s):</label>
                    <input type="number"
                    value={velocidad}
                    onChange={(e) => setVelocidad(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium"> Distancia (m): </label>
                    <input type="number"
                    value={distancia}
                    onChange={(e) => setDistancia(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    />
                </div>

                <button type="submit" className="bg-fuchsia-900 text-white px-4 py-2 rounded">
                    Calcular Tiempo
                </button>
            </form>

            {resultado && (
                <div className="mt-6 p-4 bg-slate-100 rounded">
                    <p className="font-semibold"> {resultado.mensaje} </p>
                </div>
            )}
        </div>
    );
}

export default Tiempo