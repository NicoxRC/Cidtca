import { Field } from 'formik';

export default function NewFormPart5(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <h1>
          CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO DE
          LA EMPRESA
        </h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>26. ¿Cuantos años de experiencia tiene en el sector lácteo?</b>
        </label>
        <Field
          type="number"
          name="pregunta_26"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            27. ¿Cuál es el número de personal fijo que trabaja en la planta y/o
            centro acopio?
          </b>
        </label>
        <Field
          type="number"
          name="pregunta_27"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            28. ¿Cuál es el número de personal OCASIONAL que trabaja en la
            planta y/o centro acopio?
          </b>
        </label>
        <Field
          type="number"
          name="pregunta_28"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            29. ¿Cuantas familias se ven favorecidas por la planta de
            procesamiento o centro de acopio, la venta y la elaboración de
            productos derivados de leche?
          </b>
        </label>
        <Field
          type="number"
          name="pregunta_29"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            30. ¿Pertenece a algún grupo, asociación, organismo o queseros
            reconocido de segundo nivel?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_30"
          id="pregunta_30"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            31. Si su respuesta anterior es afirmativa, responda las siguientes
            preguntas, ¿ Conoce cuantas organizaiones ademas de la suya
            pertenecen al grupo, asociación u organismo de segundo nivel?
          </b>
        </label>
        <Field
          type="text"
          name="pregunta_31"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>32. Cual es el nombre del grupo, asociación o organismo</b>
        </label>
        <Field
          type="text"
          name="pregunta_32"
          placeholder="Respuesta"
          className="form-control"
        />
      </div>
      <div className="container_form">
        <h1>
          CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA EN
          LA PLANTA DE TRANSFORMACION
        </h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            33. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla la
            actividad económica?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_33"
          id="pregunta_33"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Propio">Propio</option>
          <option value="Arrendado">Arrendado</option>
        </Field>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_33_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            34. seleccione las zonas de la planta de producción con las que
            cuenta
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de despacho"
            className="form-check-input"
          />{' '}
          <b>Zona de despacho</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de almacenamiento temporal de residuos solidos"
            className="form-check-input"
          />{' '}
          <b>Zona de almacenamiento temporal de residuos solidos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de tratamiento de residuos liquidos"
            className="form-check-input"
          />{' '}
          <b>Zona de tratamiento de residuos liquidos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de recepcion de materia prima"
            className="form-check-input"
          />{' '}
          <b>Zona de recepcion de materia prima</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de procesamiento"
            className="form-check-input"
          />{' '}
          <b>Zona de procesamiento</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de pesaje y empaque"
            className="form-check-input"
          />{' '}
          <b>Zona de pesaje y empaque</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de descanso y cafetería"
            className="form-check-input"
          />{' '}
          <b>Zona de descanso y cafetería</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de muestreo y pruebas de laboratorio"
            className="form-check-input"
          />{' '}
          <b>Zona de muestreo y pruebas de laboratorio</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de bodega e insumos"
            className="form-check-input"
          />{' '}
          <b>Zona de bodega e insumos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de cuartos frios"
            className="form-check-input"
          />{' '}
          <b>Zona de cuartos frios</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="punto de venta"
            className="form-check-input"
          />{' '}
          <b>Punto de venta</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de pasteurización"
            className="form-check-input"
          />{' '}
          <b>Zona de pasteurización</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de herramientas"
            className="form-check-input"
          />{' '}
          <b>Zona de herramientas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="oficinas administrativas"
            className="form-check-input"
          />{' '}
          <b>Oficinas administrativas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="zona de tratamiento de residuos"
            className="form-check-input"
          />{' '}
          <b>Zona de tratamiento de residuos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_34"
            value="baños y vestier"
            className="form-check-input"
          />{' '}
          <b>Baños y vestier</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_34_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
    </div>
  );
}
