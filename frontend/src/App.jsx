import { useState } from "react";
import Velocidad from "./components/velocidad";
import Distancia from "./components/distancia";

function App() {
  const [seccion, setSeccion] = useState('velocidad');


  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      
      {/* MENÚ LATERAL */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-xl font-black text-white mb-8 tracking-wide">Proyecto Física</h2>
          <nav className="space-y-2">
            <button 
              onClick={() => setSeccion('velocidad')}
              className={`w-full text-left py-3 px-4 rounded-xl font-medium transition ${seccion === 'velocidad' ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800'}`}
            >
              Velocidad
            </button>
            <button 
              onClick={() => setSeccion('distancia')}
              className={`w-full text-left py-3 px-4 rounded-xl font-medium transition ${seccion === 'distancia' ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800'}`}
            >
              Distancia
            </button>
            <button 
              onClick={() => setSeccion('fuerza')}
              className={`w-full text-left py-3 px-4 rounded-xl font-medium transition ${seccion === 'fuerza' ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800'}`}
            >
              Fuerza
            </button>
          </nav>
        </div>
        <div className="text-xs text-slate-500 text-center">ADSO • 2026</div>
      </aside>

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {seccion === 'velocidad' && <Velocidad />}
          {seccion === 'distancia' && <Distancia />}
          {seccion === 'fuerza' && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">Formulario de Fuerza</h2>
              <p className="text-slate-500 mt-2">Aquí montaremos el formulario de fuerza pronto.</p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}

export default App;