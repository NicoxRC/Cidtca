import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import NewFormPart1 from './NewFormPart1';
import NewFormPart2 from './NewFormPart2';
import NewFormPart3 from './NewFormPart3';
import NewFormPart4 from './NewFormPart4';
import NewFormPart5 from './NewFormPart5';
import NewFormPart6 from './NewFormPart6';
import NewFormPart7 from './NewFormPart7';
import NewFormPart8 from './NewFormPart8';
import NewFormPart9 from './NewFormPart9';
import NewFormPart10 from './NewFormPart10';
import NewFormPart11 from './NewFormPart11';
import { Formik, Form } from 'formik';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postForm } from '../../../services/postForm';
import { initialValuesform } from '../../../utils/initialValuesForm';
import type { InitialValuesFormType } from '../../../types/initialValuesForm';
import type { FormInterface } from '../../../interfaces/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import './NewForm.css';

export default function NewForm(): JSX.Element {
  const history = useHistory();
  const cookies: Cookies = new Cookies();

  const handleSubmit = async (values: InitialValuesFormType): Promise<void> => {
    const res: FormInterface = await postForm(values);
    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La encuesta se creo',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/home');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo crear la encuesta',
      });
    }
  };

  const handleClickBack = (): void => {
    history.push('/home');
  };

  useEffect(() => {
    if (!cookies.get('user')) {
      history.push('/');
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark p-3">
          Volver
        </button>
      </div>
      <Formik initialValues={initialValuesform} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="w-50">
            <NewFormPart1 />
            <NewFormPart2 />
            <NewFormPart3 />
            <NewFormPart4 values={values} />
            <NewFormPart5 />
            <NewFormPart6 />
            <NewFormPart7 />
            <NewFormPart8 />
            <NewFormPart9 />
            <NewFormPart10 values={values} />
            <NewFormPart11 />
            <button type="submit" className="btn btn-success m-3 p-3">
              Crear encuesta
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
