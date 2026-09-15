import { useState } from "react";

function Peso() {
    const [masa, setMasa] = useState(0);
    const [gravedad ] = useState(9.80665);
    const [resultado, setResultado] = useState(null);

    const calcularPeso = async(e) => { e.preventDefault();
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const  response = await fetch(`${API_URL}/fisica/velocidad`, {
                method: 'POST',
                headers: {
                    'content-Type' : 'application/json',
                },

                body: JSON.stringify({
                    masa: Number(masa),
                }),
            });

            const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error('Error al conectar a la base de datos', error); 
        }
    };

    return(
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4"> Calculadora de Física - Peso </h1>
            <form onSubmit={calcularPeso} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium"> Masa (kg):</label>
                    <input type="number"
                    value={masa}
                    onChange={(e) => setMasa(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium"> Gravedad </label>
                    <input type="number"
                    value={gravedad}
                    readOnly
                    className="border p-2 rounded w-full"
                    />
                </div>

                <button type="submit" className="bg-emerald-800 text-white px-4 py-2 rounded">
                    Calcular Peso
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

export default Peso