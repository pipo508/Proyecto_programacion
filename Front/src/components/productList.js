import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './ProductList.css'
import Hr from './Hr/Hr';


export const ProductList = () => {
    const { user } = useContext(UserContext);
    const [products, setProduct] = useState([]);
    const [editedProduct, setEditProduct] = useState({ id: 0, beerName: '', beerType:'', beerDescription: '', beerPrice:'' });


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
                title: 'Postulación correcta',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('')
        } catch (error) {
            console.log(error)
        }
    };


    //Eliminar empleo
    const onDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/ProdList/${productId}`);
            fetchProduct();
        } catch (error) {
            console.error(error);
        }
    };


    //Editar empleo

    const onEditProduct = (product) => {
        setEditProduct(product);
    };
    
    // Actualiza los campos que se editaron dentro de la ventana modal
    //[e.target.name] es nombre del campo que sufrio un cambio 
    // e.target.value es valor ingresado por el usuario. 
    const handleInputChange = (e) => {
        console.log('valor de e.target.name', e.target.name)
        console.log('valor de e.target.value', e.target.value)
        setEditProduct({ ...editedProduct, [e.target.name]: e.target.value });
    };


    //Envia al back la nueva actualizacion
    const handleUpdateProduct = async () => {

        try {
        await axios.put(`http://localhost:5000/ProdList/${editedProduct.id}`, editedProduct);
        fetchProduct();
        setEditProduct({ id: 0, beerName: '',beerType:'' ,beerDescription: '' , beerPrice: ''});
        Swal.fire({
            icon: 'success',
            title: 'Editado correctamente',
            showConfirmButton: false,
            timer: 1800
        })
        navigate('')
        } catch (error) {
            console.error(error);
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
                                            // usuario común 
                                            user.role === '2' ? ( 
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-success" onClick={() => onAddProduct
                                                    (product.id)} > Postularme </button>
                                                    </td>
                                                </div>
                                            // admin puede editar , agregar y eliminar
                                            ):(
                                                
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editProductModal" onClick={() => onEditProduct(product)}> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger"  onClick={() => onDeleteProduct(product.id)}>Eliminar</button>
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
            <div className="modal fade" id="editProductModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Producto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-4'>
                                <label>Nombre de la cerveza</label><br></br>
                                <input
                                    type="text"
                                    name="beerName"
                                    value={editedProduct.beerName}
                                    onChange={handleInputChange}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Descripción</label><br></br>
                                <input
                                    type="text"
                                    name="beerDescription"
                                    value={editedProduct.beerDescription}
                                    onChange={handleInputChange}
                                    placeholder="Descripción"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Tipo</label><br></br>
                                <input
                                    type="text"
                                    name="beerType"
                                    value={editedProduct.beerType}
                                    onChange={handleInputChange}
                                    placeholder="Tipo"
                                />
                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-4'>
                                <label>Precio</label><br></br>
                                <input
                                    type="text"
                                    name="beerPrice"
                                    value={editedProduct.beerPrice}
                                    onChange={handleInputChange}
                                    placeholder="precio"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdateProduct}> Confirmar </button>
                    </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
        <Hr />
        </div>
    )
}