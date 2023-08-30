import { Field } from 'formik';

export default function NewFormPart6(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <label className="form-label">
          <b>
            35. Seleccione la maquinaria, equipos y utensilios con los que
            cuenta
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="cuartos frios"
            className="form-check-input"
          />{' '}
          <b>Cuartos frios</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="neveras"
            className="form-check-input"
          />{' '}
          <b>Neveras</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="ecomilk lactoscan"
            className="form-check-input"
          />{' '}
          <b>Ekomilk Lactoscan</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="balanzas"
            className="form-check-input"
          />{' '}
          <b>Balanzas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="fechadora"
            className="form-check-input"
          />{' '}
          <b>Fechadora</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="empacadora de liquidos"
            className="form-check-input"
          />{' '}
          <b>Empacadora de liquidos</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="selladora"
            className="form-check-input"
          />{' '}
          <b>Selladora</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="marmita"
            className="form-check-input"
          />{' '}
          <b>Marmita</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="hiladora"
            className="form-check-input"
          />{' '}
          <b>Hiladora</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="generador electrico"
            className="form-check-input"
          />{' '}
          <b>Generador electrico</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="descremadora"
            className="form-check-input"
          />{' '}
          <b>Descremadora</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="mesas en acero inoxidable para queso"
            className="form-check-input"
          />{' '}
          <b>Mesas en acero inoxidable para queso</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="prensas"
            className="form-check-input"
          />{' '}
          <b>Prensas</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="mantequeras"
            className="form-check-input"
          />{' '}
          <b>Mantequeras</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="mesa de escurrido"
            className="form-check-input"
          />{' '}
          <b>Mesa de escurrido</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="tanque de enfriamiento"
            className="form-check-input"
          />{' '}
          <b>Tanque de enfriamiento</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="empacadora al vacio"
            className="form-check-input"
          />{' '}
          <b>Empacadora al vacio</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="tina de coagulación"
            className="form-check-input"
          />{' '}
          <b>Tina de coagulación</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="caldera"
            className="form-check-input"
          />{' '}
          <b>Caldera</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="Estantes de transporte o almacenamiento"
            className="form-check-input"
          />{' '}
          <b>Estantes de transporte o almacenamiento</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="motobomba"
            className="form-check-input"
          />{' '}
          <b>Motobomba</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="tanque de almacenamiento"
            className="form-check-input"
          />{' '}
          <b>Tanque de almacenamiento</b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_35"
            value="ninguna"
            className="form-check-input"
          />{' '}
          <b>Ninguna</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_35_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
    </div>
  );
}
