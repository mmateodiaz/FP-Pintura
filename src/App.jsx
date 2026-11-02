import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const whatsappNumber = "5493513019161";

  // Estados para el formulario de presupuesto
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    tipoPropiedad: 'Casa',
    servicio: 'Pintura en Hogares y Obras',
    m2: '',
    consulta: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const mensaje = encodeURIComponent(
      `Hola! Vengo de la web de FP Pintura. Me gustaría solicitar un presupuesto:\n\n` +
      `* Nombre: ${formData.nombre}\n` +
      `* Teléfono: ${formData.telefono}\n` +
      `* Tipo de Propiedad: ${formData.tipoPropiedad}\n` +
      `* Servicio: ${formData.servicio}\n` +
      `* M² Aproximados: ${formData.m2 || 'No especificado'}\n` +
      `* Consulta: ${formData.consulta || 'Ninguna'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank');
  };

  // Efecto para activar las animaciones de scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const cards = document.querySelectorAll('.service-card, .gallery-card, .step-card');
    
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="nav-brand">
          <div className="logo-box">FP</div>
          <span>FP PINTURA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#trabajos">Trabajos</a></li>
          <li><a href="#proceso">Cómo Trabajamos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero pedir un presupuesto de pintura.")}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp-nav"
        >
          💬 WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Pintura y Mantenimiento Profesional</span>
          <h1>Confianza y calidad en <span>cada obra</span>.</h1>
          <p>
            Soluciones integrales de pintura, acabados y mantenimiento para hogares, comercios y desarrollos en Córdoba. Prolijidad y cumplimiento garantizado.
          </p>
          <div className="hero-buttons">
            <a 
              href="#contacto"
              className="btn-hero-whatsapp"
            >
              💬 Pedir Presupuesto sin Cargo
            </a>
            <a href="#servicios" className="btn-hero-outline">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

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

      <section id="trabajos" className="gallery-section">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
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
      </section>

      <section id="proceso" className="steps-section">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
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
      </section>

      {/* SECCIÓN DE CONTACTO / FORMULARIO DE PRESUPUESTO */}
      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <div className="contact-info-side">
            <span className="section-tag" style={{ color: '#93c5fd' }}>Presupuesto sin cargo</span>
            <h2>Pedí Tu Presupuesto</h2>
            <p>Completá tus datos y coordinamos por WhatsApp. Respuesta rápida y sin compromiso.</p>
            
            <div className="contact-details-box">
              <p>📞 +54 9 351 3019161</p>
              <p>📍 Córdoba Capital y Localidades Cercanas</p>
              <p>🕒 Lunes a Viernes de 9:00 a 17:30 Hs</p>
            </div>
          </div>

          <div className="contact-form-side">
            <form onSubmit={handleWhatsAppSubmit} className="budget-form">
              <div className="form-group">
                <label>Nombre Completo *</label>
                <input 
                  type="text" 
                  name="nombre" 
                  required 
                  placeholder="Tu nombre y apellido"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Teléfono *</label>
                <input 
                  type="tel" 
                  name="telefono" 
                  required 
                  placeholder="Ej: 3513019161"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Tipo de Propiedad</label>
                  <select name="tipoPropiedad" value={formData.tipoPropiedad} onChange={handleInputChange}>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Comercio / Oficina">Comercio / Oficina</option>
                    <option value="Edificio / Consorcio">Edificio / Consorcio</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Servicio</label>
                  <select name="servicio" value={formData.servicio} onChange={handleInputChange}>
                    <option value="Pintura en Hogares y Obras">Pintura en Hogares y Obras</option>
                    <option value="Efectos Especiales">Efectos Especiales</option>
                    <option value="Diseño y Ambientación">Diseño y Ambientación</option>
                    <option value="Impermeabilización">Impermeabilización</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>M² Aprox. (Opcional)</label>
                <input 
                  type="text" 
                  name="m2" 
                  placeholder="Ej: 120 m²"
                  value={formData.m2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Consulta (Opcional)</label>
                <textarea 
                  name="consulta" 
                  rows="3" 
                  placeholder="Contanos brevemente qué necesitás pintar..."
                  value={formData.consulta}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-whatsapp">
                💬 Enviar Consulta por WhatsApp
              </button>
              
              <small className="form-footer-note">Al enviar, te redirigiremos a WhatsApp con tu consulta prearmada.</small>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-brand-box">
              <div className="logo-box" style={{ width: '38px', height: '38px', fontSize: '0.95rem' }}>FP</div>
              <span>FP PINTURA Y MANTENIMIENTO</span>
            </div>
            <p className="footer-desc">
              Soluciones integrales de pintura y acabados profesionales en Córdoba Capital y zonas cercanas.
            </p>
            <div className="footer-socials">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero hacer una consulta.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn whatsapp"
                title="WhatsApp"
              >
                💬
              </a>
              <a 
                href="https://www.instagram.com/fp_pintura?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=="
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn instagram"
                title="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contacto Directo</h3>
            <p>📞 +54 9 351 3019161</p>
            <p>📍 Córdoba Capital y Alrededores</p>
            <p>🕒 Lun a Vie: 9:00 a 17:30 Hs</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 FP Pintura y Mantenimiento. Todos los derechos reservados.</p>
        </div>
      </footer>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero hacer una consulta.")}`}
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