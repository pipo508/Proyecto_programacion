import React from "react";
import { Form, Formik, Field } from "formik";
import axios from "axios";
import { useContext } from 'react';
import "./FormRegister.css";
import Hr from "../Hr/Hr";
import Swal from "sweetalert2"; // Importa la librería Swal
//import { UseNavigate} from "react-router-dom"; // Importa la librería "react-router-dom
import { UserContext } from "../../context/UserContext";


export const FormRegister = () => {
  
    const {setUser} = useContext(UserContext);
  
    //const navigate = UseNavigate();

    const initialValues = {
      name: "",
      surname: "",
      address: "",
      email: "",
      password: "",
    };

  const handleForm = async (values) => {
    console.log("values:", values);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/Register",
        values
      );  

      const { role, idUser } = response.data
      Swal.fire({
        title: "Registro exitoso",
        icon: 'success',
      });
      
      setUser({
        logged:true,
        role: role,
        id: idUser
      })
      // navigate('/Nuestras_cervezas')
      } catch (error) {
      console.log(error)
      }
    }
      

  return (
    <div>
      <Hr />
      <div className="container">
        <div className="form-container">
          <h1 className="underline-on-hover selector">Register</h1>
          <Formik initialValues={initialValues} onSubmit={handleForm}>
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <Field
                  type="text"
                  className="form-control"
                  id="surname"
                  name="surname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <Field
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary"onClick={handleForm}>
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Hr />
    </div>
  );
};