import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


export const productList = () => {

    const { user } = useContext(UserContext);
 
    const [products, setProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
      }, []);

    
    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/product');
            console.log(response)
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    const onAddProduct = async (productId) => {

        const values = {
            userId:user.id,
            productId:productId        
        }

        try {
            const response = await axios.post('http://localhost:5000/ventas', values)
            console.log(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/nuestrasCervezas')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre de la cerveza</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Nivel de alcohol</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.   map(product => (
                                    <tr key={product.id}>
                                        <td>{product.beerName}</td>
                                        <td>{product.beerType}</td>
                                        <td>{product.beerDescription}</td>
                                        <td>{product.beerPrice}</td>
                                        {
                                            // usuario común solo puede postularse a la oferta
                                            user.role === '2' ? (
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-success" onClick={() => onAddProduct(product.id)} > Añadir </button>
                                                    </td>
                                                </div>
                                            // admin puede editar y eliminar
                                            ):(
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning"> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                                    </td>  
                                                </div>
                                            )
                                        }
                                    </tr>
                                ))
                            }  
                                                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
