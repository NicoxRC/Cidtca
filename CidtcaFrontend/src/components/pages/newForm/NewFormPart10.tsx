import { Field } from 'formik';
import type { NewFormPart10Type } from '../../../types/newFormPart10';

export default function NewFormPart10(props: NewFormPart10Type): JSX.Element {
  const { values } = props;
  return (
    <div>
      <div className="container_form">
        <label className="form-label">
          <b>60. ¿A qué precio compra usted el litro de leche?</b>
        </label>
        <Field
          type="number"
          name="pregunta_60"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            61. ¿Maneja bonificaciones para pago de la leche de acuerdo a la
            resolución 017 de 2019?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_61"
          id="pregunta_61"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">Cuales:</label>
        <Field
          type="text"
          name="pregunta_61_cuales"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>62. ¿Conoce cuales son sus costos de produccion?</b>
        </label>
        <Field
          component="select"
          name="pregunta_62"
          id="pregunta_62"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>63. ¿Cuáles son sus principales clientes?</b>
        </label>
        <Field
          type="text"
          name="pregunta_63"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            64. ¿Estaría dispuesto a comercializar su producto bajo una misma
            marca de forma asociativa?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_64"
          id="pregunta_64"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">¿Por que?</label>
        <Field
          type="text"
          name="pregunta_64_porque"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            65. ¿Estaria dispuesto a comercializar sus productos, con una
            entidad privada departamental que sirva como centro de acopio de
            productos derivados lacteos?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_65"
          id="pregunta_65"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
        <label className="form-label">¿Por que?</label>
        <Field
          type="text"
          name="pregunta_65_porque"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>66. ¿Cuál es el precio de venta de sus productos?</b>
        </label>
        {values.pregunta_23.map((el: string) => (
          <div className="d-flex flex-column">
            <label className="form-label mt-3">
              <b>{el}:</b>
            </label>
            <div className="d-flex ms-4">
              <div>
                <label className="form-label">
                  <b>Presentacion</b>
                </label>
                <Field
                  type="text"
                  name={`pregunta_66_${el}_presentacion`}
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-75 me-3"
                />
              </div>
              <div>
                <label className="form-label">
                  <b>Valor</b>
                </label>
                <Field
                  type="number"
                  name={`pregunta_66_${el}_valor`}
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-75 me-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            67. ¿Cuentan con transporte propio para la distribución y venta?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_67"
          id="pregunta_67"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </Field>
      </div>
      {values.pregunta_67 === 'No' ? (
        <div className="container_form">
          <label className="form-label">
            <b>¿Se tiene tercerizado el proceso de distribución? </b>
          </label>
          <Field
            component="select"
            name="pregunta_67_distribucion"
            id="pregunta_67_distribucion"
            className="form-select form-select-lg mb-3"
          >
            <option>Respuesta</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Field>
          {values.pregunta_67_distribucion === 'Si' ? (
            <div>
              <label className="form-label">Con quien</label>
              <Field
                type="text"
                name="pregunta_67_distribucion_quien"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="container_form">
        <label className="form-label">
          <b>
            68. ¿Cuáles son sus costos mensuales aproximados de servicios
            públicos?
          </b>
        </label>
        <label className="form-label">Energia:</label>
        <Field
          type="number"
          name="pregunta_68_energia"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">Gas:</label>
        <Field
          type="number"
          name="pregunta_68_gas"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">Agua:</label>
        <Field
          type="number"
          name="pregunta_68_agua"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">Internet:</label>
        <Field
          type="number"
          name="pregunta_68_internet"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">Telefonia:</label>
        <Field
          type="number"
          name="pregunta_68_telefonia"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <div className="d-flex">
          <div>
            <label className="form-label">Otro:</label>
            <Field
              type="text"
              name="pregunta_68_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75"
            />
          </div>
          <div>
            <label className="form-label">Valor:</label>
            <Field
              type="number"
              name="pregunta_68_otro_valor"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
