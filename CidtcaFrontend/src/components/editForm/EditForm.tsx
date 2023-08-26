import Swal from 'sweetalert2';
import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { patchForms } from '../../services/patchForm';
import { EditaValuesInterface } from '../../interfaces/editaValuesInterface';
import { initialValuesEditForm } from '../../utils/initialValuesEditForm';
import type { FormInterface } from '../../interfaces/form';
import type { FormDetailsIdType } from '../../types/fromDetailsIdType';

export default function EditForm(props: FormDetailsIdType): JSX.Element {
  const { id } = props;
  const history = useHistory();

  const handleClickEdit = async (
    values: EditaValuesInterface
  ): Promise<void> => {
    const res: FormInterface = await patchForms(id, values);
    if (Object.entries(res).length > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El formulario a sido editado',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/home');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo edtiar el formulario',
      });
    }
  };

  return (
    <Formik initialValues={initialValuesEditForm} onSubmit={handleClickEdit}>
      <Form className="d-flex justify-content-center align-items-center p-5 w-100 m-5 h-100">
        <div className="container_form bg-dark">
          <label className="form-label mt-3">
            <b>Temperatura:</b>
          </label>
          <Field
            type="number"
            name="pregunta_20"
            placeholder="Respuesta..."
            className="form-control mt-3"
          />
          <label className="form-label mt-3">
            <b>Georreferenciación</b>
          </label>
          <label className="form-label mb-2">
            <b>Coordenada N:</b>
          </label>
          <div className="d-flex">
            <div>
              <label className="form-label">Grados</label>
              <Field
                type="number"
                name="pregunta_21_n_grados"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
            <div>
              <label className="form-label">Minutos</label>
              <Field
                type="number"
                name="pregunta_21_n_minutos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
            <div>
              <label className="form-label">Segundos</label>
              <Field
                type="number"
                name="pregunta_21_n_segundos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
          </div>
          <label className="form-label mt-2">
            <b>Coordenada W:</b>
          </label>
          <div className="d-flex">
            <div>
              <label className="form-label">Grados</label>
              <Field
                type="number"
                name="pregunta_21_w_grados"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
            <div>
              <label className="form-label">Minutos</label>
              <Field
                type="number"
                name="pregunta_21_w_minutos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
            <div>
              <label className="form-label">Segundos</label>
              <Field
                type="number"
                name="pregunta_21_w_segundos"
                placeholder="Respuesta..."
                className="form-control form-control-sm w-75 me-3"
              />
            </div>
          </div>
          <label className="form-label mt-3">
            <b>Altura:</b>
          </label>
          <Field
            type="number"
            name="pregunta_22"
            placeholder="Respuesta..."
            className="form-control mt-3"
          />
          <button type="submit" className="btn btn-success mt-3 mb-3 p-3">
            Editar
          </button>
        </div>
      </Form>
    </Formik>
  );
}
