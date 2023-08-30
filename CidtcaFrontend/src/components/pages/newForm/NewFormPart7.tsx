import { Field } from 'formik';

export default function NewFormPart7(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <h1>
          CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
          TRANSFORMACION
        </h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>36. Actualmente ¿Tiene registros sanitarios INVIMA?</b>
        </label>
        <Field
          component="select"
          name="pregunta_36"
          id="pregunta_36"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">
          <b>Cuales:</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Calidad de agua"
            className="form-check-input"
          />{' '}
          <b>Programa Calidad de agua</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Residuos Solidos"
            className="form-check-input"
          />{' '}
          <b>Programa Residuos Solidos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Residuos Líquidos"
            className="form-check-input"
          />{' '}
          <b>Programa Residuos Líquidos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Control de Plagas"
            className="form-check-input"
          />{' '}
          <b>Programa Control de Plagas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Limpieza y desinfección"
            className="form-check-input"
          />{' '}
          <b>Programa Limpieza y desinfección</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Trazabilidad"
            className="form-check-input"
          />{' '}
          <b>Programa Trazabilidad</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Proveedores"
            className="form-check-input"
          />{' '}
          <b>Programa Proveedores</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Quejas"
            className="form-check-input"
          />{' '}
          <b>Programa Quejas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Mantenimiento"
            className="form-check-input"
          />{' '}
          <b>Programa Mantenimiento</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Calibración"
            className="form-check-input"
          />{' '}
          <b>Programa Calibración</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Plan de muestreo"
            className="form-check-input"
          />{' '}
          <b>Plan de muestreo</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Programa Higiene del personal"
            className="form-check-input"
          />{' '}
          <b>Programa Higiene del personal</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Control documental"
            className="form-check-input"
          />{' '}
          <b>Control documental</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Manuales de laboratorio"
            className="form-check-input"
          />{' '}
          <b>Manuales de laboratorio</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Recogida de producto"
            className="form-check-input"
          />{' '}
          <b>Recogida de producto</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_36_cuales"
            value="Alergenos"
            className="form-check-input"
          />{' '}
          <b>Alergenos</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>37. ¿cuenta con Concepto sanitario?</b>
        </label>
        <Field
          component="select"
          name="pregunta_37"
          id="pregunta_37"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">
          <b>Calificacion</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_37_calificacion"
            value="calificación favorable"
            className="form-check-input"
          />{' '}
          <b>calificación favorable</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_37_calificacion"
            value="calificación favorable con condiciones"
            className="form-check-input"
          />{' '}
          <b>calificación favorable con condiciones</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_37_calificacion"
            value="calificación desfavorable"
            className="form-check-input"
          />{' '}
          <b>calificación desfavorable</b>
        </label>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            38. ¿Cuentan con documentos y registros de Buenas Prácticas de
            Manufactura (BPM)?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_38"
          id="pregunta_38"
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
            39. ¿Dispone de agua potable para la transformación del producto?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_39"
          id="pregunta_39"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>40. ¿Realiza pruebas de plataforma?</b>
        </label>
        <Field
          component="select"
          name="pregunta_40"
          id="pregunta_40"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">
          <b>Cuales:</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Prueba de alcohol"
            className="form-check-input"
          />{' '}
          <b>Prueba de alcohol</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Ausencia de conservantes, adulterantes y neutralizantes por muestreo selectivo"
            className="form-check-input"
          />{' '}
          <b>
            Ausencia de conservantes, adulterantes y neutralizantes por muestreo
            selectivo
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Prueba de densidad"
            className="form-check-input"
          />{' '}
          <b>Prueba de densidad</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Prueba de lactometría o crioscopia"
            className="form-check-input"
          />{' '}
          <b>Prueba de lactometría o crioscopia</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Prueba de acidez"
            className="form-check-input"
          />{' '}
          <b>Prueba de acidez</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Ausencia de antibióticos"
            className="form-check-input"
          />{' '}
          <b>Ausencia de antibióticos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_40_cuales"
            value="Recuento microbiano"
            className="form-check-input"
          />{' '}
          <b>Recuento microbiano</b>
        </label>
      </div>
    </div>
  );
}
