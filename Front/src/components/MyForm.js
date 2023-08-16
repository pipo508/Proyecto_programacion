import React from "react";
import { Form,Formik,Field } from "formik";
import axios from "axios";
import "./Form.styles.css"
export const MyForm = () => {


    const initialValues = {
        
        email:'',
        password:''
    }

    const handleForm = async(values) =>{
        console.log("values:", values)
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', values)
            console.log(response.data)
        } catch (error) {
            console.log(error)  
        }
        
    }
    

    return(
        <div>
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '30px', marginBottom: '0px' }} />
            <h1 className="underline-on-hover selector" style={{width: '100%', border: 'none', height: '35px', marginLeft: '100px', marginBottom: '0px', marginTop:"50px" }}>Login</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={handleForm}
        >
                <Form >
                    <div class="custom-form">
                        <div class="row mb-3" >
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <Field 
                                    type="email" 
                                    class="form-control" 
                                    id="inputEmail3" 
                                    name='email'
                                    />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-10">
                                <Field 
                                    type="password" 
                                    class="form-control" 
                                    id="inputPassword3" 
                                    name="password"
                                />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={handleForm}>Enviar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}