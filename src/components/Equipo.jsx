import React, { useState } from 'react';

const fotosEquipo = [
  {
    src: '/Empleado1.jpg',
    titulo: 'Equipo FP Pintura',
    descripcion: 'Personal propio capacitado y comprometido con cada proyecto en Córdoba.',
  },
  {
    src: '/Empleado2.jpg',
    titulo: 'Capacitación y Primeras Marcas',
    descripcion: 'Actualización constante junto a proveedores líderes como Alba y Pintecord.',
  },
  {
    src: '/Empleado3.jpg',
    titulo: 'Terminaciones al Detalle',
    descripcion: 'Recortes precisos y protección completa de zócalos y aberturas.',
  },
  {
    src: '/Empleado4.jpg',
    titulo: 'Preparación en Exteriores',
    descripcion: 'Lijado, tratamiento de maderas y pintura en altura con seguridad.',
  },
  {
    src: '/Empleado5.jpg',
    titulo: 'Prolijidad y Limpieza',
    descripcion: 'Enmascarado profesional para cuidar cada rincón de tu hogar o local.',
  },
];

export default function Equipo() {
  const [fotoActiva, setFotoActiva] = useState(null);

  return (
    <section id="equipo" className="team-section">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <span className="section-tag">Quiénes Somos</span>
        <h2>Conocé a nuestro equipo</h2>
        <p>Trabajamos con personal propio, capacitado y de confianza, cuidando el orden, los tiempos y cada detalle de tu propiedad.</p>
      </div>

      <div className="team-grid">
        {fotosEquipo.map((foto, index) => (
          <div
            key={index}
            className={`gallery-card team-card ${index < 2 ? 'team-card-featured' : ''}`}
            onClick={() => setFotoActiva(foto)}
            style={{ cursor: 'pointer' }}
          >
            <div className="gallery-image-container team-image-container">
              <img src={foto.src} alt={foto.titulo} className="gallery-img" loading="lazy" />
            </div>
            <div className="gallery-info">
              <h3>{foto.titulo}</h3>
              <p>{foto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {fotoActiva && (
        <div className="team-lightbox" onClick={() => setFotoActiva(null)}>
          <div className="team-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="team-lightbox-close"
              onClick={() => setFotoActiva(null)}
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img src={fotoActiva.src} alt={fotoActiva.titulo} />
            <div className="team-lightbox-caption">
              <h3>{fotoActiva.titulo}</h3>
              <p>{fotoActiva.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}