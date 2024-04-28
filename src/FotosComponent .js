import React, { useState } from 'react';
import EstilosProyectos from "./EstilosProyectos.css"
import DB from "./images/2b1.jpeg"
import b1 from "./images/b1.jpeg"
import p1 from "./images/p1.jpeg"
import r4 from "./images/r4.jpeg"

const FotosComponent = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false); 

  const cards = [
    {
      id: 1,
      imgSrc: [DB],
      name: "Dos Banderas",
      role: "Frontend Developer",
      descrip: "El proyecto 'Dos Banderas' surge como respuesta a la necesidad identificada en una empresa local donde colaboraba en el ámbito de la barra, la cual requería una plataforma web propia para facilitar el proceso de pedidos a domicilio. Inspirado por esta demanda, decidí emprender la creación de esta solución a medida. La plataforma web de Dos Banderas se distingue por su página principal, que narra la historia de la empresa y presenta una galería de imágenes representativas. Además, ofrece una navegación intuitiva a través de las diversas categorías de productos, redirigiendo a los usuarios a sus respectivas secciones. Dentro de cada categoría, se encuentra una selección detallada de productos, acompañada de un filtro que permite una búsqueda eficiente por categoría. Al seleccionar un producto específico, los usuarios son dirigidos a una página de descripción detallada que incluye información exhaustiva, precio y opciones de cantidad, así como la capacidad de añadirlo al carrito de compras. El carrito de compras, a su vez, cuenta con todas las funcionalidades estándar para una experiencia de compra fluida y conveniente.",
      socialLinks: [
        { href: "https://github.com/EstebanRomeo", icon: "github" },
        { href: "https://www.linkedin.com/in/esteban-romeo-2a7949222/", icon: "linkedin" },
        { href: "https://www.instagram.com/esteban_romeo7/", icon: "instagram" }
      ]
    },
    {
      id: 2,
      imgSrc: b1,
      name: "BullShoes",
      role: "Frontend Developer",
      descrip: "Bullshoes representa una evolución significativa de mi proyecto inicial en desarrollo web, incorporando nuevas funcionalidades y un diseño renovado. Esta plataforma destaca por su página de inicio impactante, que ofrece información relevante, novedades sobre productos y noticias destacadas. Con secciones dedicadas a hombres, mujeres y niños, cada una provista de categorías detalladas, filtros intuitivos y descripciones exhaustivas de los productos, Bullshoes ofrece una experiencia de usuario completa y personalizada.",
      socialLinks: [
        { href: "https://github.com/EstebanRomeo", icon: "github" },
        { href: "https://www.linkedin.com/in/esteban-romeo-2a7949222/", icon: "linkedin" },
        { href: "https://www.instagram.com/esteban_romeo7/", icon: "instagram" }
      ]
    },
    {
      id: 3,
      imgSrc: r4,
      name: "La Barbería",
      role: "Frontend Developer",
      descrip: "La Barbería surge como una solución innovadora para mejorar la gestión de turnos y la experiencia del cliente en mi peluquería de confianza, donde he sido cliente por más de cinco años. Inspirado por la necesidad de simplificar el proceso de reserva de turnos, desarrollé una plataforma web elegante y fácil de usar.Esta página web ofrece una experiencia completa, desde conocer la historia de La Barbería hasta explorar perfiles detallados de cada barbero. Además, proporciona una manera conveniente para aspirantes a unirse al equipo. La función principal es la gestión de turnos, que permite a los clientes reservar citas de forma rápida y sin problemas. Con un diseño estético y funcionalidad intuitiva, La Barbería establece nuevos estándares en la industria de la peluquería, ofreciendo comodidad y servicio excepcional a sus clientes.",
      socialLinks: [
        { href: "https://github.com/EstebanRomeo", icon: "github" },
        { href: "https://www.linkedin.com/in/esteban-romeo-2a7949222/", icon: "linkedin" },
        { href: "https://www.instagram.com/esteban_romeo7/", icon: "instagram" }
      ]
    }
  ];

  const openModal = (id) => {
    setActiveCard(id);
  };

  const closeModal = () => {
    setActiveCard(null);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className='containerFotos'>
      <div className='containerProyectos'>
        <h1 className='h1Proy'>PROYECTOS</h1>
        <div className='containerImgProyectos'>
          {cards.map(card => (
            <div key={card.id} className='cardContainer' onClick={() => openModal(card.id)}>
              <div className='profileDiv'><img src={card.imgSrc} alt={card.name} /></div>
              <div className='infoDiv'>
                <div className='nameDiv'>
                  <p className='name'>{card.name}</p>
                  <p className='role'>{card.role}</p>
                </div>
                <div className='socialDiv'>
                  {card.socialLinks.map(link => (
                    <a key={link.href} href={link.href}><svg className={`socials ${link.icon}`} viewBox="0 0 496 512"><path d="..."/></svg></a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeCard !== null && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={closeModal}>&times;</span>
            <img
              src={cards[activeCard - 1].imgSrc}
              alt={cards[activeCard - 1].name}
              className={isZoomed ? 'zoom-img zoomed' : 'zoom-img'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <h2>{cards[activeCard - 1].name}</h2>
            <p>{cards[activeCard - 1].descrip}</p>
            <div className='socialDiv'>
              {cards[activeCard - 1].socialLinks.map(link => (
                <a key={link.href} href={link.href}><svg className={`socials ${link.icon}`} viewBox="0 0 496 512"><path d="..."/></svg></a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FotosComponent;