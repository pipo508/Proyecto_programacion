import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import "./ProductList.css";
import Hr from "./Hr/Hr";

export const ProductList = () => {

    const { user } = useContext(UserContext);
    const [products, setProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, []);

    
    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/ProductList');
            console.log(response)
            setProduct(response.data);
        } catch (error) {
            console.error(400);  //hasta aca llega
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
            <Hr />
        <div className='container text'>
        <div className='form-container background-admin'>
            <h1 className='underline-on-hover selector'>Lista de productos</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr className='text'>
                                <th scope="col">Nombre de la cerveza</th>
                                <th scope="col">Tipo de cerveza</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr className="text_data"key={product.id}>
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
        </div>
        <Hr />
        </div>
    )
}