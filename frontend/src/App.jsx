import { useState } from "react";
import Velocidad from "./components/velocidad";
import Distancia from "./components/distancia";
import Tiempo from "./components/tiempo";
import Fuerza from "./components/fuerza";
import Peso from "./components/peso";
import Energia from "./components/energia";
import img1 from './assets/img1.png';
import img2 from './assets/img1.png';


function App() {
  const [seccion, setSeccion] = useState('inicio');


  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-indigo-500 p-4">
        <h1 className="text-xl text-cyan-100 font-extrabold mb-6 text-center"> CALCIENFIT</h1>
        <nav>
          <button onClick={() => setSeccion('inicio')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='inicio' ? 'bg-cyan-100' : ''} `}>
            Inicio
          </button>

          <button onClick={() => setSeccion('velocidad')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='velocidad' ? 'bg-cyan-100' : ''} `}>
            Velocidad
          </button>

          <button onClick={() => setSeccion('distancia')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='distancia' ? 'bg-cyan-100' : ''} `}>
            Distancia
          </button>

          <button onClick={() => setSeccion('tiempo')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='tiempo' ? 'bg-cyan-100' : ''} `}>
            Tiempo
          </button>

          <button onClick={() => setSeccion('fuerza')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='fuerza' ? 'bg-cyan-100' : ''} `}>
            Fuercita
          </button>

          <button onClick={() => setSeccion('peso')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='peso' ? 'bg-cyan-100' : ''} `}>
            Peso
          </button>

          <button onClick={() => setSeccion('energia')} className={`w-full text-left font-bold p-2 rounded hover:bg-cyan-300 ${seccion ==='energia' ? 'bg-cyan-100' : ''} `}>
            Energía Cinética 
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {seccion === 'inicio' && (

          <div className="flex flex-col items-center justify-center h-full text-center" 
          style={{
                  backgroundImage: `url(${img1})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}>

            <h1 className="text-5xl w-full text-center font-extrabold text-cyan-900 mb-4 "> BIENVENIDA A TU CALCULADORA VIRTUALita  </h1>

            <p className="text-lg text-indigo-800 font-extrabold"> Elige una opción para realizar el calculo</p>


          </div>
        )}
        {seccion === 'velocidad' && <Velocidad/>}
        {seccion === 'distancia' && <Distancia/>}
        {seccion === 'tiempo' && <Tiempo/>}
        {seccion === 'fuerza' && <Fuerza/>}
        {seccion === 'peso' && <Peso/>}
        {seccion === 'energia' && <Energia/>}

      </main>


    </div>
  );
}

export default App;