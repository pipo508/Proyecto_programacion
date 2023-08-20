import React from 'react'
import Fondo from '../images/fondo.jpg'
import './cards.css'
export const Card = (props) => {
  return (
<div>
    <div className= "row">
      <div className='col'>
        <div className="card cards-text" style={{width: '18rem', backgroundImage: `url(${Fondo})`, backgroundSize: 'cover'}}>
          <img src={require(`../images/${props.imagen}`)} className="card-img-top" alt=".." />
            <div className="card-body">
              <h1 className='titulo' style={{color: 'rgb(223, 164, 0)', fontSize: '22px'}}>{ props.titulo }</h1>
              <p className="texto" style={{color: 'rgb(223, 164, 0)', fontSize: '15px'}}>{ props.texto }</p>
              <a href="#" class="btn btn-primary">+Info</a>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}