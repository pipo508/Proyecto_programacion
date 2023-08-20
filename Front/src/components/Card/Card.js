import React from 'react';
import fondo from "../images/fondo.jpg"; 
import "./Cards.css";

export const Card = (props) => {
  const cardStyle = {
    width: '18rem',
    backgroundImage: `url(${fondo})`, 
    backgroundSize: 'cover'
  };

  return (
    <div>
      <div className="row">
        <div className='col'>
          <div className="card cards-text" style={cardStyle}>
            <img src={require(`../images/${props.imagen}`)} className="card-img-top" alt=".." />
            <div className="card-body">
              <h1 className='titulo' style={{ color: 'rgb(223, 164, 0)', fontSize: '22px' }}>{props.titulo}</h1>
              <p className="texto" style={{ color: 'rgb(223, 164, 0)', fontSize: '15px' }}>{props.texto}</p>
              <a href="/algo" className="btn btn-primary">+Info</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
