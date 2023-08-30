import { Field } from 'formik';

export default function NewFormPart8(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <label className="form-label">
          <b>
            41. ¿Tiene criterios de aceptación o rechazo para la materia prima?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_41"
          id="pregunta_41"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cuales:</label>
        <Field
          type="text"
          name="pregunta_41_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            42. ¿Registra la información obtenida de las pruebas seleccionadas
            en la pregunta anterior?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_42"
          id="pregunta_42"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Como:</label>
        <Field
          type="text"
          name="pregunta_42_como"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>43. Realiza pruebas para la liberación del producto terminado?</b>
        </label>
        <label className="form-label mt-2">
          <b>Microbiologicas:</b>
        </label>
        <Field
          component="select"
          name="pregunta_43_microbiologicas"
          id="pregunta_43_microbiologicas"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <Field
          type="text"
          name="pregunta_43_microbiologicas_cuales"
          placeholder="Cuales..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label mt-2">
          <b>Fisicoquímica:</b>
        </label>
        <Field
          component="select"
          name="pregunta_43_fisicoquimica"
          id="pregunta_43_fisicoquimica"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <Field
          type="text"
          name="pregunta_43_fisicoquimica_cuales"
          placeholder="Cuales..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label mt-2">
          <b>Organolépticas:</b>
        </label>
        <Field
          component="select"
          name="pregunta_43_organolepticas"
          id="pregunta_43_organolepticas"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <Field
          type="text"
          name="pregunta_43_organolepticas_cuales"
          placeholder="Cuales..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>44. ¿Realiza análisis de la información obtenida?</b>
        </label>
        <Field
          component="select"
          name="pregunta_44"
          id="pregunta_44"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Como:</label>
        <Field
          type="text"
          name="pregunta_44_como"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            45. De la siguiente indumentaria, seleccione cuales utiliza para la
            elaboración de los productos
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="overol"
            className="form-check-input"
          />{' '}
          <b>Overol</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="botas"
            className="form-check-input"
          />{' '}
          <b>Botas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="cofia"
            className="form-check-input"
          />{' '}
          <b>Cofia</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="guantes"
            className="form-check-input"
          />{' '}
          <b>Guantes</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="gafas"
            className="form-check-input"
          />{' '}
          <b>Gafas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="tapabocas"
            className="form-check-input"
          />{' '}
          <b>Tapabocas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_45"
            value="peto"
            className="form-check-input"
          />{' '}
          <b>Peto</b>
        </label>
        <label className="form-label">Otro</label>
        <Field
          type="text"
          name="pregunta_45_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            46. ¿Usa detergente o desinfectantes autorizados e implementa
            rotación?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_46"
          id="pregunta_46"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cuales</label>
        <Field
          type="text"
          name="pregunta_46_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            47. ¿Aplica algun manejo o tratamiento de residuos sólidos y
            líquidos?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_47"
          id="pregunta_47"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cual</label>
        <Field
          type="text"
          name="pregunta_47_cual"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            48. ¿realiza análisis de materia prima en laboratorio externos de
            leche?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_48"
          id="pregunta_48"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cuales:</label>
        <Field
          type="text"
          name="pregunta_48_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            49. ¿realiza análisis de materia prima en laboratorio externos para
            producto terminado?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_49"
          id="pregunta_49"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cual laboratorio:</label>
        <Field
          type="text"
          name="pregunta_49_cual"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            50. ¿Realiza análisis de calidad de agua en laboratorio externo?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_50"
          id="pregunta_50"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cual laboratorio:</label>
        <Field
          type="text"
          name="pregunta_50_cual"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>51. ¿Contrata el control de plagas con una empresa externa?</b>
        </label>
        <Field
          component="select"
          name="pregunta_51"
          id="pregunta_51"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cual laboratorio:</label>
        <Field
          type="text"
          name="pregunta_51_cual"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
    </div>
  );
}
