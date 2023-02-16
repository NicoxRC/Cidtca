import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../connection/getUser';
import Logo from '../../images/logo2.jpg';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import './Login.css';

export default function Login() {
  const cookies = new Cookies();
  const history = useHistory();

  const handleSubmit = async (values: object) => {
    const response = await getUser(values);
    if (response?.length > 0) {
      const res = response[0];
      cookies.set('id', res.id, { path: '/' });
      cookies.set('user', res.user, {
        path: '/',
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Bienvenido ${res.user}`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/home');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario incorrecto',
      });
    }
  };

  useEffect(() => {
    if (cookies.get('user')) {
      history.push('/home');
    }
  }, []);

  return (
    <div className="containerPrincipal">
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="d-flex flex-column justify-content-center align-items-center p-5 w-100 m-5 h-100">
          <img src={Logo} alt="logo" className="mb-2 w-100 rounded" />
          <div className="container_form bg-dark">
            <label className="form-label mt-3">
              <b>Usuario:</b>
            </label>
            <Field
              type="text"
              name="user"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <label className="form-label mt-3">
              <b>Contraseña:</b>
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-success mt-3 mb-3">
              Iniciar Sesion
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
