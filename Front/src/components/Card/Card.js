import React from 'react'
import Fondo from '../images/fondo.jpg'
import './cards.css'
import Swal from 'sweetalert2';

export const handleClick = (imageUrl) => {
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: imageUrl, // Pasa la URL completa de la imagen
    imageWidth: 200,  
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
};

export const Card = (props) => {
  const handleCardClick = () => {
    handleClick(props.imagen); // Pasa la URL completa de la imagen al hacer clic
  };

  return (
    <div>
      <div className= "row" >
        <div className='col'>
          <div className="card cards-text" style={{width: '16rem', backgroundImage: `url(${Fondo})`, backgroundSize: 'cover'}}>
            <img src={props.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h1 className='titulo' style={{color: 'rgb(223, 164, 0)', fontSize: '22px'}}>{ props.titulo }</h1>
              <p className="texto" style={{color: 'rgb(223, 164, 0)', fontSize: '15px'}}>{ props.texto }</p>
              <button class="btn btn-primary" onClick={handleCardClick}>
                { props.article }
                Info+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
