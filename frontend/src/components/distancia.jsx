import { useState } from "react";

function Distancia() {
    const [velocidad, setVelocidad] = useState(0);
    const [tiempo, setTiempo] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularDistancia = async (e) => {
        e.preventDefault();

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const  response = await fetch(`${API_URL}/fisica/velocidad`, {
                method:'POST',
                headers: {
                    'Content-Type':'application/json', 
            },

                body: JSON.stringify({
                    velocidad: Number(velocidad),
                    tiempo: Number(tiempo),
                }),
            });

            const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error('Error al conectar a la base de datos, intentelo cuando arregle el código, gracias', error)
        }
    }; 

    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Calculadora de Física - Distancia </h1>
        
        <form onSubmit={calcularDistancia} className="space-y-4 max-w-md">
        <div>
            <label className="block text-sm font-medium">Distancia (m):</label>
            <input 
            type="number" 
            value={velocidad} 
            onChange={(e) => setVelocidad(e.target.value)}
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

        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded">
            Calcular Distancia
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

export default Distancia