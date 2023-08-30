import { Field } from 'formik';

export default function NewFormPart3(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <h1>
          CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO y/o
          CENTRO DE ACOPIO
        </h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            18. En lo que respecta a vías, que tipo de acceso predomina para el
            transporte de leche a la planta
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_18"
            value="Pavimentada"
            className="form-check-input"
          />{' '}
          <b>Pavimentada</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_18"
            value="Placa huella"
            className="form-check-input"
          />{' '}
          <b>Placa huella</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_18"
            value="Via carreteable"
            className="form-check-input"
          />{' '}
          <b>Via carreteable (destapada)</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_18"
            value="Trocha - a pie"
            className="form-check-input"
          />{' '}
          <b>Trocha - a pie</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            19. En lo que respecta a vías, que tipo de acceso predomina para
            comercializar sus productos
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_19"
            value="Pavimentada"
            className="form-check-input"
          />{' '}
          <b>Pavimentada</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_19"
            value="Placa huella"
            className="form-check-input"
          />{' '}
          <b>Placa huella</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_19"
            value="Via carreteable"
            className="form-check-input"
          />{' '}
          <b>Via carreteable (destapada)</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_19"
            value="Trocha - a pie"
            className="form-check-input"
          />{' '}
          <b>Trocha - a pie</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            20. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
            planta?
          </b>
        </label>
        <Field
          type="number"
          name="pregunta_20"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>21. Georreferenciación</b>
        </label>
        <label className="form-label">
          <b>Coordenada N</b>
        </label>
        <div className="d-flex">
          <div>
            <label className="form-label">
              <b>Grados</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_n_grados"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
          <div>
            <label className="form-label">
              <b>Minutos</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_n_minutos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
          <div>
            <label className="form-label">
              <b>Segundos</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_n_segundos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
        </div>
        <label className="form-label mt-2">
          <b>Coordenada W</b>
        </label>
        <div className="d-flex">
          <div>
            <label className="form-label">
              <b>Grados</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_w_grados"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
          <div>
            <label className="form-label">
              <b>Minutos</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_w_minutos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
          <div>
            <label className="form-label">
              <b>Segundos</b>
            </label>
            <Field
              type="number"
              name="pregunta_21_w_segundos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75 me-3"
            />
          </div>
        </div>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            22. ¿Cuál es la altura sobre el nivel del mar en la que se ubica la
            planta?
          </b>
        </label>
        <Field
          type="number"
          name="pregunta_22"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
    </div>
  );
}
