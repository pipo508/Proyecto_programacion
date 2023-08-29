import React from 'react'
import Fondo from '../images/fondo.jpg'
import './cards.css'
import Swal from 'sweetalert2';


/*export const handleClick = (props) => {
  Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: <img src={require(`../images/${props.imagen}`).default}/>,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  });
};*/

export const Card = (props) => {
  const handleCardClick = () => {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: require(`../images/${props.imagen}`).default,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
   });
  };

  return (
  <div>
      <div className= "row">
        <div className='col'>
          <div className="card cards-text" style={{width: '18rem', backgroundImage: `url(${Fondo})`, backgroundSize: 'cover'}}>
            <img src={require(`../images/${props.imagen}`)} className="card-img-top" alt=".." />
              <div className="card-body">
                <h1 className='titulo' style={{color: 'rgb(223, 164, 0)', fontSize: '22px'}}>{ props.titulo }</h1>
                <p className="texto" style={{color: 'rgb(223, 164, 0)', fontSize: '15px'}}>{ props.texto }</p>
                <button class="btn btn-primary" onClick={handleCardClick}>
                  { props.article }
                </button>
              </div>
          </div>
      </div>
    </div>
  </div>
  );
};


