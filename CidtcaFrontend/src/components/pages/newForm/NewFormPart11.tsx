import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas';
import { useState, useRef } from 'react';
import { Field } from 'formik';

export default function NewFormPart11(): JSX.Element {
  const [firmaEncuestado, setFirmaEncuestado] = useState<string>('');
  const [firmaEncuestador, setFirmaEncuestador] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string>('');

  const handleChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: ProgressEvent<FileReader>) {
      if (onLoadEvent.target?.result) {
        setImageSrc(onLoadEvent.target.result as string);
      }
    };

    if (changeEvent.target.files && changeEvent.target.files.length > 0) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  };

  const encuestado: any = useRef({});
  const LimpiarEncuestado = (): void => encuestado.current.clear();
  const guardarEncuestado = (): void => {
    setFirmaEncuestado(
      encuestado.current.getTrimmedCanvas().toDataURL('image/png')
    );
  };

  const encuestador: any = useRef({});
  const limpiarEncuestador = (): void => encuestador.current.clear();
  const guardarEncuestador = (): void => {
    setFirmaEncuestador(
      encuestador.current.getTrimmedCanvas().toDataURL('image/png')
    );
  };
  return (
    <div>
      <div className="container_form">
        <label className="form-label">
          <b>Observaciones</b>
        </label>
        <Field
          type="text"
          name="observaciones"
          placeholder="Respuesta..."
          className="form-control"
        />
      </div>
      <div className="container_form">
        <label className="form-label">
          <b>Fecha</b>
        </label>
        <Field type="date" name="fecha" className="form-control" />
      </div>
      <div className="container_form">
        <div className="container_data_form">
          <div>
            <label className="form-label">
              <b>Nombre encuestado</b>
            </label>
            <Field
              type="text"
              name="nombre_encuestado"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label className="form-label">
              <b>Cedula encuestado</b>
            </label>
            <Field
              type="text"
              name="cedula_encuestado"
              placeholder="Respuesta..."
              className="form-control"
            />
            <div>
              <Popup
                modal
                trigger={
                  <button type="button" className="btn btn-dark mt-2">
                    Firma encuestado
                  </button>
                }
              >
                <SignaturePad
                  ref={encuestado}
                  canvasProps={{ className: 'signatureCanvas' }}
                />
                <button
                  type="button"
                  onClick={LimpiarEncuestado}
                  className="btn btn-outline-danger me-2"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  onClick={guardarEncuestado}
                  className="btn btn-outline-success"
                >
                  Guardar
                </button>
              </Popup>
              {firmaEncuestado ? (
                <div className="d-flex flex-column">
                  <img src={firmaEncuestado} alt={firmaEncuestado} />
                  <label>
                    <Field
                      type="checkbox"
                      name="firma_encuestado"
                      value={firmaEncuestado}
                      className="form-check-input"
                    />{' '}
                    <b>Confirmar firma</b>
                  </label>
                </div>
              ) : null}
            </div>
            <div>
              <input
                type="file"
                onChange={handleChange}
                accept=".jpg, .jpeg, .png"
                className="form-control mt-2"
              />
              {imageSrc.length ? (
                <div className="d-flex flex-column">
                  <img src={imageSrc} alt={imageSrc} />
                  <label>
                    <Field
                      type="checkbox"
                      name="foto_encuestado"
                      value={imageSrc}
                      className="form-check-input"
                    />{' '}
                    <b>Confirm Image</b>
                  </label>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <label className="form-label">
              <b>Nombre encuestador</b>
            </label>
            <Field
              type="text"
              name="nombre_encuestador"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label className="form-label">
              <b>Cedula encuestador</b>
            </label>
            <Field
              type="text"
              name="cedula_encuestador"
              placeholder="Respuesta..."
              className="form-control"
            />
            <Popup
              modal
              trigger={
                <button type="button" className="btn btn-dark mt-2">
                  Firma encuestador
                </button>
              }
            >
              <SignaturePad
                ref={encuestador}
                canvasProps={{ className: 'signatureCanvas' }}
              />
              <button
                type="button"
                onClick={limpiarEncuestador}
                className="btn btn-outline-danger me-2"
              >
                Limpiar
              </button>
              <button
                type="button"
                onClick={guardarEncuestador}
                className="btn btn-outline-success"
              >
                Guardar
              </button>
            </Popup>
            {firmaEncuestador ? (
              <div className="d-flex flex-column">
                <img src={firmaEncuestador} alt={firmaEncuestador} />
                <label>
                  <Field
                    type="checkbox"
                    name="firma_encuestador"
                    value={firmaEncuestador}
                    className="form-check-input"
                  />{' '}
                  <b>Confirmar Firma</b>
                </label>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
