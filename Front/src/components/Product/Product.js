import React from "react";
import { Form, Formik, Field } from "formik";
import axios from "axios";
import { useContext } from 'react';
import "./Product.css";
import Hr from "../Hr/Hr";
import Swal from "sweetalert2"; // Importa la librería Swal
//import { UseNavigate} from "react-router-dom"; // Importa la librería "react-router-dom
import { UserContext } from "../../context/UserContext";
import Footer from "../Footer/Footer";

export const handleClick = () => {
  
  Swal.fire({
    title: "se cargo el producto con exito",
    icon: 'success',
  });
};

export const Product = () => {
  
    const {setUser} = useContext(UserContext);
  
    //const navigate = UseNavigate();

    const initialValues = {
      beerName: "",
      beerType: "",
      beerDescription: "",
      beerPrice: "",
      
    };

  const handleForm = async (values) => {
    console.log("values:", values);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/product",
        values
      );
      console.log(response.data)
      const { role } = response.data
      console.log('role', role)
      
      setUser({
        logged:true,
        role: role
      })
      } catch (error) {
      console.log(error)
      }
    }
      

  return (
    <div className="content">
      <Hr />
      <div className="container">
        <div className="form-container">
          <h1 className="underline-on-hover selector">Register</h1>
          <Formik initialValues={initialValues} onSubmit={handleForm}>
            <Form>
              <div className="form-group">
                <label htmlFor="beerName">Name</label>
                <Field
                  type="text"
                  className="form-control"
                  id="beerName"
                  name="beerName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Type</label>
                <Field
                  type="text"
                  className="form-control"
                  id="beerType"
                  name="beerType"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Price</label>
                <Field
                  type="integer"
                  className="form-control"
                  id="beerPrice"
                  name="beerPrice"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Description</label>
                <Field
                  type="text"
                  className="form-control"
                  id="description"
                  name="beerDescription"
                />
              </div>
              <button type="submit" className="btn btn-primary"onClick={handleClick}>
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Hr />
      <div>  
        <Footer />
      </div>
    </div>
    
  );
};