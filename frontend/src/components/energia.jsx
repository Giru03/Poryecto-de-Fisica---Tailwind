import { useState } from "react";

function Energia() {
    const [masa, setMasa] = useState();
    const [velocidad, serVelocidad] = useState();
    const [resultado, serResultado] = useState(null);

    const calcularEnergia = async(e) => { e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/fisica/energia', {
                method: 'POST',
                headers: {
                    'content-Type' : 'application/json',
                },

                body: JSON.stringify({
                    masa: Number(masa),
                    velocidad: Number(velocidad),
                }),
            });

            const data = await response.json();
            serResultado(data);
        } catch (error) {
            console.error('Error en la base de datos', error);
        }
    };

    return(
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4"> Calculadora de Física - Peso </h1>
            <form onSubmit={calcularEnergia} className="space-y-4 max-w-md">
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
                    <label className="block text-sm font-medium"> velocidad </label>
                    <input type="number"
                    value={velocidad}
                    onChange={(e) => serVelocidad(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    />
                </div>

                <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">
                    Calcular Energía Cinética
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

export default Energia