import React from 'react';
import './App.css';

function App() {
  const whatsappNumber = "5493513019161"; // Teléfono oficial extraído de su perfil[cite: 7]

  return (
    <div>
      {/* BARRA DE NAVEGACIÓN */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="logo-box">FP</div>
          <span>FP PINTURA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Trabajos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hola,%20estoy%20interesado%20en%20pedir%20un%20presupuesto.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Pedir Presupuesto
        </a>
      </header>

      {/* SECCIÓN PRINCIPAL (HERO) */}
      <section className="hero">
        <div className="hero-text">
          <span className="hero-badge">Pintura y Mantenimiento Profesional</span>
          <h1>Transformamos tus espacios con <span>calidad y precisión</span>.</h1>
          <p>
            Especialistas en pintura para hogares, comercios y grandes obras. Contamos con un equipo capacitado para cumplir en tiempo y forma con cada proyecto[cite: 7].
          </p>
          <div className="hero-buttons">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola,%20quisiera%20coordinar%20un%20presupuesto.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Cotizar por WhatsApp
            </a>
            <a href="#galeria" className="btn-secondary">
              Ver Trabajos
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h2>FP</h2>
          <p>Pintura en Hogares y Obras[cite: 7]</p>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales de pintura y acabados para residencias, comercios y oficinas.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">01</div>
            <h3>Pintura Residencial</h3>
            <p>Renovación de interiores y exteriores en casas y departamentos con prolijidad absoluta y cuidado de tus espacios.</p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <h3>Efectos Especiales</h3>
            <p>Aplicación de microcemento, acabados símil mármol, texturas decorativas de categoría y diseño de ambientación[cite: 7].</p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>
            <h3>Obras y Mantenimiento</h3>
            <p>Trabajos en conjunto con constructoras, pintura de fachadas e impermeabilización de techos y muros[cite: 7].</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN GALERÍA */}
      <section id="galeria">
        <div className="section-title">
          <h2>Trabajos Realizados</h2>
          <p>Calidad comprobada en obras de categoría y proyectos recientes[cite: 7, 8].</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">Fachadas y Obras</div>
          <div className="gallery-item">Interiores y Ambientes</div>
          <div className="gallery-item">Locales y Oficinas[cite: 8]</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto">
        <div className="nav-brand">
          <div className="logo-box">FP</div>
          <span>FP PINTURA Y MANTENIMIENTO[cite: 7]</span>
        </div>
        <p>© 2026 Todos los derechos reservados.</p>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Escribinos
        </a>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hola,%20necesito%20consultar%20por%20un%20presupuesto%20de%20pintura.`}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Escribinos por WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

export default App;