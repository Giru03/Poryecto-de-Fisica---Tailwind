import { useState } from "react";

function Velocidad() {
    const [distancia, setDistancia] = useState(0);
    const [tiempo, setTiempo] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularVelocidad = async (e) => {
    e.preventDefault();

    try {
        const  response = await fetch('http://localhost:5000/fisica/velocidad', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            distancia: Number(distancia),
            tiempo:Number(tiempo)
        }),
    });

    const data = await response.json();
    setResultado(data); 
    } catch (error) {
        console.error('Error al conectar con la base de Datos, yucas yucas', error);
    }
};

    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Calculadora de Física - Velocidad</h1>
        
        <form onSubmit={calcularVelocidad} className="space-y-4 max-w-md">
        <div>
            <label className="block text-sm font-medium">Distancia (m):</label>
            <input 
            type="number" 
            value={distancia} 
            onChange={(e) => setDistancia(e.target.value)}
            className="border p-2 rounded w-full"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium">Tiempo (s):</label>
            <input 
            type="number" 
            value={tiempo} 
            onChange={(e) => setTiempo(e.target.value)}
            className="border p-2 rounded w-full"
            required
        />
        </div>

        <button type="submit" className="bg-indigo-900 text-white px-4 py-2 rounded">
            Calcular Velocidad
        </button>
    </form>

    {resultado && (
        <div className="mt-6 p-4 bg-slate-100 rounded">
            <p className="font-semibold">{resultado.mensaje}</p>
        </div>
    )}
    </div>
        );
}
export default Velocidad