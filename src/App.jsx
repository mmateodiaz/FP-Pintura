import React from 'react';
import './App.css';

function App() {
  const whatsappNumber = "5493513019161"; // Teléfono oficial de FP Pintura
  const whatsappMessage = encodeURIComponent("Hola, quiero pedir un presupuesto de pintura y mantenimiento.");

  return (
    <div>
      {/* BARRA DE NAVEGACIÓN */}
      <header className="navbar">
        <div className="nav-brand">
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logoentero.png" alt="FP Pintura y Mantenimiento" className="nav-logo-img" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#trabajos">Trabajos</a></li>
          <li><a href="#proceso">Cómo Trabajamos</a></li>
        </ul>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp-nav"
        >
          💬 WhatsApp
        </a>
      </header>

      {/* SECCIÓN PRINCIPAL (HERO) */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Pintura y Mantenimiento Profesional</span>
          <h1>Confianza y calidad en <span>cada obra</span>.</h1>
          <p>
            Soluciones integrales de pintura, acabados y mantenimiento para hogares, comercios y desarrollos en Córdoba. Prolijidad y cumplimiento garantizado.
          </p>
          <div className="hero-buttons">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero-whatsapp"
            >
              💬 Hablemos por WhatsApp
            </a>
            <a href="#servicios" className="btn-hero-outline">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios">
        <div className="section-header">
          <span className="section-tag">Nuestros Servicios</span>
          <h2>Soluciones completas para cada necesidad</h2>
          <p>Ofrecemos acabados de máxima calidad y asesoramiento técnico especializado en cada etapa.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Pintura en Hogares y Obras</h3>
            <p>Renovación integral de interiores y exteriores para viviendas particulares, edificios y grandes superficies.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Efectos Especiales</h3>
            <p>Aplicación especializada de microcemento, acabados símil mármol, texturas decorativas y diseño de categoría.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Diseño y Ambientación</h3>
            <p>Asesoramiento estético y cromático para transformar tus espacios con armonía, estilo y modernidad.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>Impermeabilización</h3>
            <p>Protección profesional de techos, medianeras y muros contra humedad, filtraciones y agentes climáticos.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN TRABAJOS REALIZADOS */}
      <section id="trabajos" className="gallery-section">
        <div className="gallery-container" style={{ padding: '6rem 5%' }}>
          <div className="section-header">
            <span className="section-tag">Galería</span>
            <h2>Trabajos Realizados</h2>
            <p>Un recorrido visual por las obras y acabados que realizamos para nuestros clientes.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-image-container">
                <img src="/casa.png" alt="Pintura de Casas y Obras" className="gallery-img" />
              </div>
              <div className="gallery-info">
                <h3>Pintura de Casas y Obras</h3>
                <p>Terminaciones exteriores e interiores en proyectos residenciales.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-image-container">
                <img src="/interior.png" alt="Pintura de Interiores" className="gallery-img" />
              </div>
              <div className="gallery-info">
                <h3>Renovación de Interiores</h3>
                <p>Prolijidad absoluta y cuidado de los espacios en cada ambiente.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-image-container">
                <img src="/impermeabilizacion.png" alt="Impermeabilización" className="gallery-img" />
              </div>
              <div className="gallery-info">
                <h3>Impermeabilización</h3>
                <p>Protección y sellado profesional de techos, muros y medianeras.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-image-container">
                <img src="/limpiezatejas.png" alt="Limpieza y Mantenimiento de Tejas" className="gallery-img" />
              </div>
              <div className="gallery-info">
                <h3>Limpieza y Mantenimiento de Tejas</h3>
                <p>Recuperación de cubiertas, techos y superficies exteriores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CÓMO TRABAJAMOS (PASOS) */}
      <section id="proceso" className="steps-section">
        <div className="steps-container" style={{ padding: '0 5%' }}>
          <div className="section-header" style={{ paddingTop: '4rem' }}>
            <span className="section-tag">Proceso de Trabajo</span>
            <h2>¿Cómo trabajamos?</h2>
            <p>Un método organizado para garantizar resultados impecables y sin dolores de cabeza.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Relevamos y asesoramos</h3>
              <p>Visitamos el lugar o analizamos los detalles de tu proyecto para entender tus necesidades y ofrecerte la mejor solución técnica y estética.</p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Presupuesto</h3>
              <p>Te entregamos una cotización clara y detallada con los materiales, plazos de ejecución y costos transparentes, sin sorpresas.</p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Ejecutamos la obra</h3>
              <p>Nuestro equipo capacitado lleva adelante los trabajos con prolijidad absoluta, cuidado de tus espacios y entrega en tiempo y forma.</p>
            </div>
          </div>

          {/* CTA FINAL DE PASOS */}
          <div className="steps-cta">
            <h3>¿Listo para renovar tus espacios?</h3>
            <p>Contactanos hoy mismo y coordinemos la visita para tu presupuesto sin compromiso.</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero-whatsapp"
              style={{ display: 'inline-flex', margin: '0 auto' }}
            >
              💬 Pedir Presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <img src="/logoentero.png" alt="FP Pintura" className="footer-logo-img" />
        </div>
        <p>© 2026 Todos los derechos reservados.</p>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
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