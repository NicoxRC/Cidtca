import Logo from '../../../images/logo2.jpg';
import { Field } from 'formik';
import { municipios } from '../../../utils/municipios';

export default function NewFormPart1(): JSX.Element {
  return (
    <div>
      <img src={Logo} alt="logo" className="mt-5 mb-5 w-100 rounded" />
      <div className="container_form">
        <h1>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b> 1. Nombre de organizacion:</b>
        </label>
        <Field
          type="text"
          name="pregunta_1"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b> 2. Tipo de personeria:</b>
        </label>
        <Field
          component="select"
          id="pregunta_2"
          name="pregunta_2"
          className="form-select form-select-lg mb-3"
        >
          <option hidden>Respuesta...</option>
          <option value="Juridica">Juridica</option>
          <option value="Natural">Natural</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>3. Tipo de organizacion:</b>
        </label>
        <Field
          component="select"
          id="pregunta_3"
          name="pregunta_3"
          className="form-select form-select-lg mb-3"
        >
          <option hidden>Respuesta...</option>
          <option value="Cooperativa">Cooperativa</option>
          <option value="Asociacion">Asociacion</option>
          <option value="SAS">SAS</option>
        </Field>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_3_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>4. Su organización cuenta con:</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_4"
            value="rut"
            className="form-check-input"
          />{' '}
          <b>RUT</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_4"
            value="camara de comercio"
            className="form-check-input"
          />{' '}
          <b>Camara de comercio</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_4"
            value="ninguno"
            className="form-check-input"
          />{' '}
          <b>Ninguno</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>5. Representante legal o propietario:</b>
        </label>
        <Field
          type="text"
          name="pregunta_5"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>6. Información de Contacto:</b>
        </label>
        <label>
          <b>Contacto 1:</b>
        </label>
        <div className="d-flex mt-2 mb-2">
          <label>Nombre:</label>
          <Field
            type="text"
            name="pregunta_6_contacto"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
          <label>Numero:</label>
          <Field
            type="number"
            name="pregunta_6_numero"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
          <label>Correo:</label>
          <Field
            type="text"
            name="pregunta_6_correo"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
        </div>
        <label>
          <b>Contacto 2:</b>
        </label>
        <div className="d-flex mt-2 mb-2">
          <label>Nombre:</label>
          <Field
            type="text"
            name="pregunta_6_contacto_2"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
          <label>Numero:</label>
          <Field
            type="number"
            name="pregunta_6_numero_2"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
          <label>Correo:</label>
          <Field
            type="text"
            name="pregunta_6_correo_2"
            placeholder="Respuesta..."
            className="form-control form-control-sm w-25 ms-2 me-2"
          />
        </div>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>7. Actividad principal:</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_7"
            value="transformacion"
            className="form-check-input"
          />{' '}
          <b>Transformacion</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_7"
            value="acopio y venta de leche"
            className="form-check-input"
          />{' '}
          <b>Acopio y venta de leche</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>8. Municipio:</b>
        </label>
        <Field
          component="select"
          id="pregunta_8"
          name="pregunta_8"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          {municipios.map((el: string) => (
            <option value={el}>{el}</option>
          ))}
        </Field>
        <label>
          <b>Direccion:</b>
        </label>
        <Field
          type="text"
          name="pregunta_8_direccion"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>9. ¿realiza el aporte al fondo nacional del ganado?</b>
        </label>
        <Field
          component="select"
          name="pregunta_9"
          id="pregunta_9"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
    </div>
  );
}
