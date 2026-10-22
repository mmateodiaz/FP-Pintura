import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappNumber = "5493513019161"; // Teléfono extraído de su IG

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* BARRA DE NAVEGACIÓN */}
      <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-blue-600/30">
              FP
            </div>
            <span className="font-bold text-xl tracking-wide">FP PINTURA</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
            <a href="#nosotros" className="hover:text-blue-400 transition">Nosotros</a>
            <a href="#galeria" className="hover:text-blue-400 transition">Trabajos</a>
            <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
          </nav>

          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hola,%20estoy%20interesado%20en%20pedir%20un%20presupuesto%20de%20pintura.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition shadow-lg shadow-blue-600/20 items-center gap-2"
          >
            Pedir Presupuesto
          </a>
        </div>
      </header>

      {/* HERO SECTION (PRINCIPAL) */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Pintura y Mantenimiento Profesional
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Transformamos tus espacios con <span className="text-blue-500">calidad y precisión</span>.
            </h1>
            <p className="text-slate-400 text-lg">
              Especialistas en pintura para hogares, comercios y grandes obras. Contamos con un equipo capacitado para cumplir en tiempo y forma con cada proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola,%20quisiera%20coordinar%20un%20presupuesto.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl text-center transition shadow-lg shadow-blue-600/30"
              >
                Cotizar por WhatsApp
              </a>
              <a 
                href="#galeria" 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-8 py-4 rounded-xl text-center transition border border-slate-700"
              >
                Ver Trabajos
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 md:h-[450px] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative flex items-center justify-center">
              {/* Contenedor visual representativo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              <div className="text-center p-8 z-10">
                <div className="text-6xl font-black text-blue-500 mb-2">FP</div>
                <p className="text-slate-300 font-medium tracking-widest text-sm uppercase">Pintura en Hogares y Obras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
            <p className="text-slate-400">Soluciones integrales de pintura y acabados tanto para residencias como para desarrollos comerciales u oficinas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-bold text-xl">01</div>
              <h3 className="text-xl font-semibold mb-3">Pintura Residencial</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Renovación de interiores y exteriores en casas y departamentos. Prolijidad absoluta y cuidado de tus muebles y pisos durante toda la obra.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-bold text-xl">02</div>
              <h3 className="text-xl font-semibold mb-3">Efectos Especiales</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aplicación de microcemento, acabados símil mármol, texturas decorativas de categoría y diseño de ambientación a medida.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-bold text-xl">03</div>
              <h3 className="text-xl font-semibold mb-3">Obras y Oficinas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trabajos en conjunto con constructoras y arquitectos. Mantenimiento, pintura de fachadas e impermeabilización de techos y muros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN GALERÍA / TRABAJOS */}
      <section id="galeria" className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trabajos Realizados</h2>
            <p className="text-slate-400">Calidad comprobada en obras de categoría, viviendas particulares y espacios comerciales[cite: 7, 8].</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition"></div>
              <span className="text-slate-400 font-medium z-10">Fachadas y Obras</span>
            </div>
            <div className="h-64 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition"></div>
              <span className="text-slate-400 font-medium z-10">Interiores y Ambientes</span>
            </div>
            <div className="h-64 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition"></div>
              <span className="text-slate-400 font-medium z-10">Locales y Oficinas</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACTO */}
      <footer id="contacto" className="bg-slate-950 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">FP</div>
            <span className="font-bold tracking-wide">FP PINTURA Y MANTENIMIENTO</span>
          </div>
          <p className="text-slate-400 text-sm">© 2026 Todos los derechos reservados. Diseñado para potenciar el negocio.</p>
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hola,%20necesito%20consultar%20por%20un%20presupuesto%20de%20pintura.`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition z-50 text-2xl"
        title="Escribinos por WhatsApp"
      >
        💬
      </a>

    </div>
  );
}

export default App;