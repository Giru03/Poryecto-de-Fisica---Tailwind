import { useState } from "react";

function Fuerza() {
    const [masa, setMasa] = useState(0); 
    const [aceleracion, setAceleracion] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularFuerza = async(e) => {
        e.preventDefault();

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const  response = await fetch(`${API_URL}/fisica/velocidad`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },

                body: JSON.stringify({
                    masa: Number(masa),
                    aceleracion: Number(aceleracion)
                }),
            });

            const data = await response.json();
            setResultado(data); 
            } catch (error) {
                console.error('Error al conectar con la base de datos', error);
            }
    };


    return (
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Calculadora de Física - Fuerza </h1>
        
        <form onSubmit={calcularFuerza} className="space-y-4 max-w-md">
        <div>
            <label className="block text-sm font-medium">masa (kg):</label>
            <input 
            type="number" 
            value={masa} 
            onChange={(e) => setMasa(e.target.value)}
            className="border p-2 rounded w-full"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium">aceleración (m/s):</label>
            <input 
            type="number" 
            value={aceleracion} 
            onChange={(e) => setAceleracion(e.target.value)}
            className="border p-2 rounded w-full"
            required
        />
        </div>

        <button type="submit" className="bg-cyan-800 text-white px-4 py-2 rounded">
            Calcular Fuerza
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

export default Fuerza