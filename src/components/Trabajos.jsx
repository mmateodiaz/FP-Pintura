import React, { useState, useEffect } from 'react';

const categoriasTrabajos = [
  {
    id: 'casas',
    titulo: 'Pintura de Casas y Obras',
    descripcion: 'Terminaciones exteriores e interiores en proyectos residenciales.',
    portada: '/casa.png',
    fotos: [
      {
        src: '/casa.png',
        subtitulo: 'Pintura integral de fachada residencial con revestimiento texturado.',
      },
      {
        src: '/Casa1.jpg',
        subtitulo: 'Hidrolavado y preparación profunda de muros exteriores antes de pintar.',
      },
      {
        src: '/Casa2.jpeg',
        subtitulo: 'Recortes precisos en molduras y detalles arquitectónicos de frente.',
      },
      {
        src: '/Casa3.jpg',
        subtitulo: 'Terminación prolija en aberturas, rejas y marcos exteriores.',
      },
      {
        src: '/Casa4.jpg',
        subtitulo: 'Fachada terminada y limpieza completa de veredas y espacios exteriores.',
      },
    ],
  },
  {
    id: 'interiores',
    titulo: 'Renovación de Interiores',
    descripcion: 'Prolijidad absoluta y cuidado de los espacios en cada ambiente.',
    portada: '/interior.png',
    fotos: [
      {
        src: '/interior.png',
        subtitulo: 'Renovación completa de ambientes interiores con terminación impecable.',
      },
      {
        src: '/Interior1.jpg',
        subtitulo: 'Aplicación con rodillo en nichos, estantes y paredes con terminación uniforme.',
      },
      {
        src: '/Interior2.jpg',
        subtitulo: 'Terminaciones detalladas junto a aberturas y ventanales interiores.',
      },
      {
        src: '/Interior3.jpg',
        subtitulo: 'Trabajo en equipo y organización en ambientes amplios y luminosos.',
      },
      {
        src: '/Interior4.jpg',
        subtitulo: 'Aplicación de pintura gris en paredes y cielorrasos con cobertura pareja.',
      },
    ],
  },
 {
    id: 'impermeabilizacion',
    titulo: 'Impermeabilización',
    descripcion: 'Protección y sellado profesional de techos, muros y medianeras.',
    portada: '/impermeabilizacion.png',
    fotos: [
      {
        src: '/impermeabilizacion.png',
        subtitulo: 'Impermeabilización de muros, medianeras y cubiertas contra filtraciones.',
      },
      {
        src: '/Impermeabilizacion1.jpg',
        subtitulo: 'Retiro completo de membrana vieja deteriorada para preparar la base.',
      },
      {
        src: '/Impermeabilizacion3.jpg',
        subtitulo: 'Hidrolavado a presión de la losa para eliminar hongos, polvo y material suelto.',
      },
      {
        src: '/Impermeabilizacion2.jpg',
        subtitulo: 'Aplicación de membrana líquida elastomérica y refuerzo en juntas de cubierta.',
      },
      {
        src: '/Impermeabilizacion4.jpg',
        subtitulo: 'Sellado con venda geotextil en babetas y encuentros con cargas perimetrales.',
      },
    ],
  },
  {
    id: 'tejas',
    titulo: 'Limpieza y Mantenimiento de Tejas y Maderas',
    descripcion: 'Recuperación de cubiertas, tejas, aberturas y superficies de madera.',
    portada: '/limpiezatejas.png',
    fotos: [
      {
        src: '/limpiezatejas.png',
        subtitulo: 'Limpieza profunda, hidrolavado y protección de techos de tejas.',
      },
      {
        src: '/Madera2.jpg',
        subtitulo: 'Preparación, lijado y restauración de pisos y estructuras de madera.',
      },
      {
        src: '/Madera3.jpg',
        subtitulo: 'Aplicación de protector y lasur en puertas de madera con piso protegido.',
      },
      {
        src: '/Madera4.jpg',
        subtitulo: 'Tratamiento y detalles en celosías y postigos exteriores.',
      },
      {
        src: '/Madera1.jpg',
        subtitulo: 'Terminación final con veta realzada y protección duradera en aberturas.',
      },
    ],
  },
];

export default function Trabajos() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [indiceFoto, setIndiceFoto] = useState(0);

  const abrirGaleria = (categoria) => {
    setCategoriaActiva(categoria);
    setIndiceFoto(0);
  };

  const cerrarGaleria = () => {
    setCategoriaActiva(null);
    setIndiceFoto(0);
  };

  const fotoAnterior = (e) => {
    e.stopPropagation();
    if (!categoriaActiva) return;
    setIndiceFoto((prev) =>
      prev === 0 ? categoriaActiva.fotos.length - 1 : prev - 1
    );
  };

  const fotoSiguiente = (e) => {
    e.stopPropagation();
    if (!categoriaActiva) return;
    setIndiceFoto((prev) =>
      prev === categoriaActiva.fotos.length - 1 ? 0 : prev + 1
    );
  };

  // Navegación con teclado (flechas izquierda/derecha y Escape)
  useEffect(() => {
    if (!categoriaActiva) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') cerrarGaleria();
      if (e.key === 'ArrowLeft') {
        setIndiceFoto((prev) =>
          prev === 0 ? categoriaActiva.fotos.length - 1 : prev - 1
        );
      }
      if (e.key === 'ArrowRight') {
        setIndiceFoto((prev) =>
          prev === categoriaActiva.fotos.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [categoriaActiva]);

  return (
    <section id="trabajos" className="gallery-section">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <span className="section-tag">Galería</span>
        <h2>Trabajos Realizados</h2>
        <p>Tocá cada categoría para recorrer fotos reales de nuestras obras y acabados.</p>
      </div>

      <div className="gallery-grid">
        {categoriasTrabajos.map((cat) => (
          <div
            key={cat.id}
            className="gallery-card work-category-card"
            onClick={() => abrirGaleria(cat)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && abrirGaleria(cat)}
          >
            <div className="gallery-image-container work-image-wrapper">
              <img src={cat.portada} alt={cat.titulo} className="gallery-img" />
              <span className="work-photo-badge">
                📷 {cat.fotos.length} {cat.fotos.length === 1 ? 'foto' : 'fotos'}
              </span>
            </div>
            <div className="gallery-info">
              <h3>{cat.titulo}</h3>
              <p>{cat.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox con flechas de navegación */}
      {categoriaActiva && (
        <div className="team-lightbox" onClick={cerrarGaleria}>
          <div
            className="team-lightbox-content work-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="team-lightbox-close"
              onClick={cerrarGaleria}
              aria-label="Cerrar galería"
            >
              ✕
            </button>

            <div className="work-slider-stage">
              {categoriaActiva.fotos.length > 1 && (
                <button
                  type="button"
                  className="work-nav-arrow work-nav-prev"
                  onClick={fotoAnterior}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
              )}

              <img
                src={categoriaActiva.fotos[indiceFoto].src}
                alt={categoriaActiva.titulo}
              />

              {categoriaActiva.fotos.length > 1 && (
                <button
                  type="button"
                  className="work-nav-arrow work-nav-next"
                  onClick={fotoSiguiente}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
              )}
            </div>

            <div className="team-lightbox-caption work-lightbox-footer">
              <div>
                <h3>{categoriaActiva.titulo}</h3>
                <p>{categoriaActiva.fotos[indiceFoto].subtitulo}</p>
              </div>
              <span className="work-counter">
                {indiceFoto + 1} / {categoriaActiva.fotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}