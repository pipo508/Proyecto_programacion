import { Form, Formik, Field } from "formik";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../Register/FormRegister.css";
import Hr from "../Hr/Hr";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Login = () => {
  
  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: "",
  };
  
  const { setUser } = useContext(UserContext);

  const handleForm = async (values) => {
    console.log("values:", values);
    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/login', values);
      console.log(response.data)
      const{ role , idUser } = response.data
      console.log("role", role)
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesion correcto',
        showConfirmButton: false,
        timer: 1800
      })
      setUser({
        logged: true,
        role: role,
        id : idUser
      })
      navigate('')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      <Hr />
      <div className="container">
        <div className="form-container">
          <h1 className="underline-on-hover selector">Login</h1>
          <Formik
            
            initialValues={initialValues} 
            onSubmit={handleForm}
            
            >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" className="form-control" id="password" name="password" />
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
  );
};
