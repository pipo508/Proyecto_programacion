import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import Swal from 'sweetalert2'
import './VentasList.css'
import Hr from './Hr/Hr';
import Footer from './Footer/Footer';
export const VentasList = () => {

    
    const { user } = useContext(UserContext);

    const userIdVentas = user.id

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetchMyProducts();
      }, []);

      
    const fetchMyProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/VentaList/${userIdVentas}`);
            console.log('Info',response.data)
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    const onDeleteProduct = async (productId) => {
        console.log('productId en ondelete', productId)
        try {
            await axios.delete(`http://localhost:5000/VentaList/${productId}`);
            Swal.fire({
                icon: 'success',
                title: 'Eliminado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            fetchMyProducts();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        (
            <div>
                <Hr />
                <Hr/>
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
                                                <td>
                                                <button type="button" className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}> Quitar producto </button>
                                                </td>   
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
            <Footer />
            </div>
        )
    )
}
