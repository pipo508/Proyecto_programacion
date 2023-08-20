import React from "react";
import { Form, Formik, Field } from "formik";
import axios from "axios";
import "./Form.styles.css";

export const MyForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const handleForm = async (values) => {
    console.log("values:", values);
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
        <div className="container">
        <div className="form-container">
            <h1 className="underline-on-hover selector">Login</h1>
            <Formik initialValues={initialValues} onSubmit={handleForm}>
            <Form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field type="password" className="form-control" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </Form>
            </Formik>
        </div>
        </div>
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(0, 0, 0, 0)', marginTop: '0px', marginBottom: '0px' }} />
            <hr style={{ width: '100%', border: 'none', height: '35px', backgroundColor: 'rgba(255, 181, 34, 0.834)', marginTop: '0px', marginBottom: '0px' }} />
    </div>
  );
};
