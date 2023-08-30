import { Field } from 'formik';
import type { NewFormPart4Type } from '../../../types/newFormPart4';

export default function NewFormPart4(props: NewFormPart4Type): JSX.Element {
  const { values } = props;
  return (
    <div>
      <div className="container_form">
        <h1>CRITERIO 4 VOLÚMENES DE ACOPIO Y/O TRANSFORMACIÓN</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            23. De el siguiente listado seleccione los productos que elabora
          </b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="leche_pasteurizada"
            className="form-check-input"
          />
          <b>Leche pasteurizada</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="leche_UHT"
            className="form-check-input"
          />{' '}
          <b>Leche UHT</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="postres"
            className="form-check-input"
          />{' '}
          <b>Postres</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="helados"
            className="form-check-input"
          />{' '}
          <b>Helados</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="crema_de_leche"
            className="form-check-input"
          />{' '}
          <b>Crema de leche</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="leche"
            className="form-check-input"
          />{' '}
          <b>Leche</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="cuajada"
            className="form-check-input"
          />{' '}
          <b>Cuajada</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_23"
            value="yogurt"
            className="form-check-input"
          />{' '}
          <b>Yogurt</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="queso_doble_crema"
            className="form-check-input"
          />{' '}
          <b>Queso doble crema</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="quesos_madurados"
            className="form-check-input"
          />{' '}
          <b>Quesos madurados</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="kumis"
            className="form-check-input"
          />{' '}
          <b>Kumis</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="requeson"
            className="form-check-input"
          />{' '}
          <b>Requeson</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="queso_mozzarella"
            className="form-check-input"
          />{' '}
          <b>Queso mozzarella</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="queso_campesino"
            className="form-check-input"
          />{' '}
          <b>Queso campesino</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_23"
            value="arequipe"
            className="form-check-input"
          />{' '}
          <b>Arequipe</b>
        </label>
        <label className="form-label">Otro</label>
        <Field
          type="text"
          name="pregunta_23_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      {values.pregunta_23.length ? (
        <div className="container_form">
          <label className="form-label">
            <b>
              24. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
              es peso) puede producir?
            </b>
          </label>
          {values.pregunta_23.map((el: string) => (
            <div className="d-flex flex-column">
              <label className="form-label mt-3">
                <b>{el}:</b>
              </label>
              <div className="d-flex ms-4">
                <div>
                  <label className="form-label">
                    <b>Diario</b>
                  </label>
                  <Field
                    type="number"
                    name={`pregunta_24_${el}_diaria`}
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Semanal</b>
                  </label>
                  <Field
                    type="number"
                    name={`pregunta_24_${el}_semanal`}
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Mensual</b>
                  </label>
                  <Field
                    type="number"
                    name={`pregunta_24_${el}_mensual`}
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
              </div>
              <div className="d-flex mt-2 ms-4">
                <div>
                  <label className="form-label">
                    <b>Rendimiento</b>
                  </label>
                  <Field
                    type="number"
                    name={`pregunta_24_${el}_rendimiento`}
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
                <div>
                  <label className="form-label">
                    <b>Vida util</b>
                  </label>
                  <Field
                    type="number"
                    name={`pregunta_24_${el}_vida_util`}
                    placeholder="Respuesta..."
                    className="form-control form-control-sm w-75 me-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="container_form">
        <label className="form-label">
          <b>25.¿cómo se determina la vida útil?</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_25"
            value="Analisis en laboratorio externo"
            className="form-check-input"
          />{' '}
          <b>analisis en laboratorio externo</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_25"
            value="laboratorio interno de planta"
            className="form-check-input"
          />{' '}
          <b>laboratorio interno de planta</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_25"
            value="seguimiento al producto"
            className="form-check-input"
          />{' '}
          <b>seguimiento al producto</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_25"
            value="por resolucion"
            className="form-check-input"
          />{' '}
          <b>por resolucion</b>
        </label>
        <label className="form-label">Otro</label>
        <Field
          type="text"
          name="pregunta_25_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
    </div>
  );
}
