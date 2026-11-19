import React, { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

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

  // Estados para la sección de reseñas (Supabase)
  const [resenas, setResenas] = useState([]);
  const [cargandoResenas, setCargandoResenas] = useState(true);
  const [enviandoResena, setEnviandoResena] = useState(false);
  const [resenaEnviada, setResenaEnviada] = useState(false);
  const [nuevaResena, setNuevaResena] = useState({
    nombre: '',
    zona: '',
    estrellas: 5,
    comentario: ''
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

  // Cargar reseñas desde Supabase
  const obtenerResenas = async () => {
    setCargandoResenas(true);
    const { data, error } = await supabase
      .from('resenas')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setResenas(data);
    }
    setCargandoResenas(false);
  };

  useEffect(() => {
    obtenerResenas();
  }, []);

  // Enviar nueva reseña a Supabase
  const handleResenaSubmit = async (e) => {
    e.preventDefault();
    if (!nuevaResena.nombre.trim() || !nuevaResena.comentario.trim()) return;

    setEnviandoResena(true);
    const { error } = await supabase
      .from('resenas')
      .insert([
        {
          nombre: nuevaResena.nombre.trim(),
          zona: nuevaResena.zona.trim() || 'Córdoba',
          estrellas: nuevaResena.estrellas,
          comentario: nuevaResena.comentario.trim()
        }
      ]);

    setEnviandoResena(false);

    if (!error) {
      setNuevaResena({ nombre: '', zona: '', estrellas: 5, comentario: '' });
      setResenaEnviada(true);
      obtenerResenas(); // Recarga la lista al instante
      setTimeout(() => setResenaEnviada(false), 5000);
    } else {
      alert('Hubo un error al publicar la reseña. Por favor intentá nuevamente.');
    }
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
          <li><a href="#resenas">Reseñas</a></li>
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
      
      {/* SECCIÓN: ¿POR QUÉ ELEGIRNOS? */}
      <section className="why-section">
        <div className="section-header">
          <span className="section-tag">¿Por qué elegir FP Pintura?</span>
          <h2>Orden, prolijidad y compromiso real</h2>
          <p>Nos encargamos de cada detalle para que renovar tus espacios sea una experiencia sin dolores de cabeza.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Protección y limpieza</h3>
            <p>Cuidamos pisos, muebles y detalles de terminación para que el trabajo quede impecable de principio a fin.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">📍</div>
            <h3>Cobertura local</h3>
            <p>Atendemos trabajos en toda Córdoba Capital y alrededores, con fuerte presencia en barrios, countries y zonas residenciales.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">📋</div>
            <h3>Presupuesto claro</h3>
            <p>Cotizaciones detalladas y transparentes. Evaluamos tu proyecto con rapidez para ofrecerte el mejor costo.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⭐</div>
            <h3>Experiencia comprobada</h3>
            <p>Amplia trayectoria en pintura interior, exterior, fachadas e impermeabilización de techos y medianeras.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: RESEÑAS DE CLIENTES (CONECTADA A SUPABASE) */}
      <section id="resenas" className="reviews-section">
        <div className="section-header">
          <span className="section-tag">Testimonios</span>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>La satisfacción de quienes ya confiaron en nuestro equipo para renovar sus espacios.</p>
        </div>

        {/* Grilla de reseñas cargadas */}
        {cargandoResenas ? (
          <p className="reviews-status">Cargando opiniones de clientes...</p>
        ) : resenas.length === 0 ? (
          <p className="reviews-status">Todavía no hay reseñas publicadas. ¡Sé el primero en dejar tu opinión!</p>
        ) : (
          <div className="reviews-grid">
            {resenas.map((item) => (
              <div key={item.id} className="review-card">
                <div className="review-stars">
                  {'★'.repeat(item.estrellas)}
                  <span className="review-stars-empty">{'★'.repeat(5 - item.estrellas)}</span>
                </div>
                <p className="review-comment">"{item.comentario}"</p>
                <div className="review-author">
                  <strong>{item.nombre}</strong>
                  {item.zona && <span>📍 {item.zona}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Formulario para que el cliente deje su reseña */}
        <div className="review-form-wrapper">
          <h3>¿Trabajamos en tu propiedad? Dejanos tu opinión</h3>
          <p>Tu comentario ayuda a otros vecinos de Córdoba a conocernos.</p>

          {resenaEnviada && (
            <div className="review-success-banner">
              ✅ ¡Muchas gracias! Tu reseña ya se publicó en la página.
            </div>
          )}

          <form onSubmit={handleResenaSubmit} className="review-form">
            <div className="review-form-row">
              <div className="form-group">
                <label>Tu Nombre *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Martín Gómez"
                  value={nuevaResena.nombre}
                  onChange={(e) => setNuevaResena({ ...nuevaResena, nombre: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Barrio / Zona (Opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Cerro de las Rosas"
                  value={nuevaResena.zona}
                  onChange={(e) => setNuevaResena({ ...nuevaResena, zona: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Calificación</label>
              <div className="star-selector">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    type="button"
                    key={num}
                    className={`star-btn ${num <= nuevaResena.estrellas ? 'active' : ''}`}
                    onClick={() => setNuevaResena({ ...nuevaResena, estrellas: num })}
                    aria-label={`${num} estrellas`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Tu Experiencia *</label>
              <textarea
                rows="3"
                required
                placeholder="Contanos cómo quedó el trabajo, la prolijidad y el trato del equipo..."
                value={nuevaResena.comentario}
                onChange={(e) => setNuevaResena({ ...nuevaResena, comentario: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-review" disabled={enviandoResena}>
              {enviandoResena ? 'Publicando...' : 'Publicar Reseña'}
            </button>
          </form>
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
          <div className="footer-col brand-col">
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
                className="social-logo-btn"
                title="WhatsApp"
              >
                <img src="/whatsapp-logo.png" alt="WhatsApp" className="social-img" />
              </a>
              <a 
                href="https://www.instagram.com/fp_pintura?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=="
                target="_blank" 
                rel="noopener noreferrer"
                className="social-logo-btn"
                title="Instagram"
              >
                <img src="/instagram-logo.png" alt="Instagram" className="social-img" />
              </a>
            </div>
          </div>

          <div className="footer-col info-col">
            <h3>Comunícate con nosotros</h3>
            <p>
              📞 <a href="tel:+5493513019161" className="footer-phone-link">+54 9 351 3019161</a>
            </p>
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