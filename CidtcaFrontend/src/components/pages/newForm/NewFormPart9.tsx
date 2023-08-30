import { Field } from 'formik';

export default function NewFormPart9(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <h1>CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            52. ¿Ha recibido o participado en algún proyecto para el
            fortalecimiento o el mejoramiento del proceso productivo de su
            organización?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_52"
          id="pregunta_52"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cual</label>
        <Field
          type="text"
          name="pregunta_52_cual"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label mt-2">Entidad financiadora</label>
        <Field
          type="text"
          name="pregunta_52_entidad"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            53. ¿Desearía participar activamente en el proyecto de investigacion
            "DESARROLLO DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA
            INOCUIDAD DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE
            NARIÑO"?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_53"
          id="pregunta_53"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>54. ¿Actualmente sus productos tienen un diseño de marca?</b>
        </label>
        <Field
          component="select"
          name="pregunta_54"
          id="pregunta_54"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>55. Cual es el nombre de la marca que maneja para sus productos</b>
        </label>
        <Field
          type="text"
          name="pregunta_55"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            56. ¿Realiza maquila o si estaría interesado en realizar procesos de
            maquila?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_56"
          id="pregunta_56"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>57. ¿Utiliza algún medio de promoción para sus productos?</b>
        </label>
        <Field
          component="select"
          name="pregunta_57"
          id="pregunta_57"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label mt-2">Cuales</label>
        <Field
          type="text"
          name="pregunta_57_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>58. ¿Considera que tiene algún tipo de competencia directa?</b>
        </label>
        <Field
          component="select"
          name="pregunta_58"
          id="pregunta_58"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cuales:</label>
        <Field
          type="text"
          name="pregunta_58_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>59. ¿Dónde esta realizando la venta de sus productos?</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_59"
            value="Empresa transformadora Local"
            className="form-check-input"
          />{' '}
          <b>Empresa transformadora Local</b>
        </label>
        <label className="form-label ms-2">
          <Field
            type="text"
            name="pregunta_59_destino_transformadora_local"
            placeholder="Destino..."
            className="form-control form-control-sm"
          />
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_59"
            value="Empresa transformadora Nacional"
            className="form-check-input"
          />{' '}
          <b>Empresa transformadora Nacional</b>
        </label>
        <label className="form-label ms-2">
          <Field
            type="text"
            name="pregunta_59_destino_transformadora_nacional"
            placeholder="Destino..."
            className="form-control form-control-sm"
          />
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_59"
            value="Producto terminado con venta regional"
            className="form-check-input"
          />{' '}
          <b>Producto terminado con venta regional</b>
        </label>
        <label className="form-label ms-2">
          <Field
            type="text"
            name="pregunta_59_destino_venta_local"
            placeholder="Destino..."
            className="form-control form-control-sm"
          />
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_59"
            value="Producto terminado con venta nacional"
            className="form-check-input"
          />{' '}
          <b>Producto terminado con venta nacional</b>
        </label>
        <label className="form-label ms-2">
          <Field
            type="text"
            name="pregunta_59_destino_venta_nacional"
            placeholder="Destino..."
            className="form-control form-control-sm"
          />
        </label>
        <label className="form-label">Otros:</label>
        <Field
          type="text"
          name="pregunta_59_otros"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
    </div>
  );
}
