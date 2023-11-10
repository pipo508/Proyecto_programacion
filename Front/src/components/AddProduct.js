import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Hr from './Hr/Hr'
import Footer from './Footer/Footer'
import './AddProduct.css'

export const AddProduct = () => {

    const navigate = useNavigate();

    const initialValues = {
        beerName: '',
        beerType:'',
        beerDescription: '',
        beerPrice:''
    }

    const handleForm = async( values) => {
        
        try {
            const response = await axios.post('http://localhost:5000/ProductList', values)
            console.log(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Creado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('')
        } catch (error) {
            console.log(404)
        }
    }
    return (
        <div className="content">
    <Hr />
    <div className="container">
        <div className="form-container">
        <h1 className="underline-on-hover selector">Crear Producto</h1>
        <Formik
            
            initialValues={initialValues} 
            onSubmit={handleForm}
            
            >
            <Form>
            <div className="form-group">
                <label htmlFor="beerName">Nombre de la cerveza</label>
                <Field type="text" className="form-control" id="beerName" name="beerName" />
            </div>
            <div className="form-group">
                <label htmlFor="beerType">Tipo de cerveza</label>
                <Field type="text" className="form-control" id="beerType" name="beerType" />
            </div>
            <div className="form-group">
                <label htmlFor="beerDescription">Descripción</label>
                <Field type="text" className="form-control" id="beerDescription" name="beerDescription" />
            </div>
            <div className="form-group">
                <label htmlFor="beerPrice">Precio</label>
                <Field type="text" className="form-control" id="beerPrice" name="beerPrice" />
            </div>
            <button type="submit" onClick={handleForm} className="btn btn-primary">Enviar</button>
            </Form>
        </Formik>
        </div>
    </div>
    <Hr />
    <div>  
        <Footer />
    </div>
    </div>
    )
}
