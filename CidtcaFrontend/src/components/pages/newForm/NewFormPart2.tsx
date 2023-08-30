import { Field } from 'formik';

export default function NewFormPart2(): JSX.Element {
  return (
    <div>
      <div className="container_form">
        <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>10. ¿Qué métodos de acopio de leche utiliza?</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_10"
            value="Se reibe en planta/centro de acopio"
            className="form-check-input"
          />{' '}
          <b>Se recibe en planta/centro de acopio</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_10"
            value="La recoge en el centro de acopio"
            className="form-check-input"
          />{' '}
          <b>La recoge en el centro de acopio</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_10"
            value="Recibe al productor en finca"
            className="form-check-input"
          />{' '}
          <b>Recibe al productor en finca</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_10_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            11. ¿De qué manera se transporta la leche hasta la planta/centro de
            acopio?
          </b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_11"
            value="Termo King"
            className="form-check-input"
          />{' '}
          <b>Termo King</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_11"
            value="Carro Particular"
            className="form-check-input"
          />{' '}
          <b>Carro Particular</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_11"
            value="Moto"
            className="form-check-input"
          />{' '}
          <b>Moto</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_11"
            value="Caballo"
            className="form-check-input"
          />{' '}
          <b>Caballo</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_11_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            12. ¿De qué manera Transporta la leche desde plataforma a areas de
            proceso?
          </b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_12"
            value="cantinas de aluminio"
            className="form-check-input"
          />{' '}
          <b>Cantinas de aluminio</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_12"
            value="tanques plasticos"
            className="form-check-input"
          />{' '}
          <b>Tanques plasticos</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_12"
            value="motobomba"
            className="form-check-input"
          />{' '}
          <b>Motobomba</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_12_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>13. ¿De qué manera realiza el almacenamiento de la leche?</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_13"
            value="pasa directo a proceso"
            className="form-check-input"
          />{' '}
          <b>Pasa directo a proceso</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_13"
            value="tanque temporal"
            className="form-check-input"
          />{' '}
          <b>Tanque temporal</b>
        </label>
        <label>
          <Field
            type="checkbox"
            name="pregunta_13"
            value="tanque frio"
            className="form-check-input"
          />{' '}
          <b>Tanque frio</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_13_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <h1 className="mt-3">CONOCIMIENTO DE SUS PROVEEDORES</h1>
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            14. ¿Cuantos proveedores suministran leche al centro y/o planta de
            proceso?
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_14"
            value="Asociados"
            className="form-check-input"
          />{' '}
          <b>Asociados</b>
        </label>
        <Field
          type="number"
          name="pregunta_14_asociados_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
        <label>
          <Field
            type="checkbox"
            name="pregunta_14"
            value="Externos"
            className="form-check-input"
          />{' '}
          <b>Externos</b>
        </label>
        <Field
          type="number"
          name="pregunta_14_externos_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            15. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
            Ganaderas BPG?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_15"
          id="pregunta_15"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
          <option value="No sabe">No sabe</option>
        </Field>
        <label>Cuantos</label>
        <Field
          type="number"
          name="pregunta_15_cuantos"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            16. ¿Si su proveedor es un centro de acopio, cuentan con certificado
            de Buenas Prácticas de Manufactura BPM?
          </b>
        </label>
        <Field
          component="select"
          name="pregunta_16"
          id="pregunta_16"
          className="form-select form-select-lg mb-3"
        >
          <option>Respuesta</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
          <option value="No sabe">No sabe</option>
        </Field>
        <label>Cuantos</label>
        <Field
          type="number"
          name="pregunta_16_cuantos"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>
            17. de los siguientes certificados con cuales cuentan sus
            proveedores
          </b>
        </label>
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_17"
            value="Buenas practicas de Ordeño"
            className="form-check-input"
          />{' '}
          <b>Buenas practicas de Ordeño</b>
        </label>
        <Field
          type="number"
          name="pregunta_17_practicas_ordeno_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_17"
            value="Buenas Prácticas Ganaderas"
            className="form-check-input"
          />{' '}
          <b>Buenas Practicas Ganaderas</b>
        </label>
        <Field
          type="number"
          name="pregunta_17_practicas_ganaderas_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_17"
            value="Registro único de Vacunación"
            className="form-check-input"
          />{' '}
          <b>Registro unico de Vacunación</b>
        </label>
        <Field
          type="number"
          name="pregunta_17_vacunacion_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_17"
            value="Certificado de Hato libre de brucela y tuberculosis"
            className="form-check-input"
          />{' '}
          <b>Certificado de Hato libre de brucela y tuberculosis</b>
        </label>
        <Field
          type="number"
          name="pregunta_17_brucela_tuberculosis_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25"
        />
        <label className="form-label">
          <Field
            type="checkbox"
            name="pregunta_17"
            value="Ninguno"
            className="form-check-input"
          />{' '}
          <b>Ninguno</b>
        </label>
        <label className="form-label">Otro:</label>
        <Field
          type="text"
          name="pregunta_17_otro"
          placeholder="Respuesta..."
          className="form-control form-control-sm w-25"
        />
        <Field
          type="number"
          name="pregunta_17_otro_cuantos"
          placeholder="Cuantos..."
          className="form-control form-control-sm w-25 mt-2"
        />
      </div>
    </div>
  );
}
