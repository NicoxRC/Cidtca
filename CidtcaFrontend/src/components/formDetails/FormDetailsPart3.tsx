import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FormInterface } from '../../interfaces/form';

export default function FormDetailsPart3(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.data
  );
  return (
    <div>
      <div className="container_details">
        <h1>CONOCIMIENTO DE SUS PROVEEDORES</h1>
      </div>
      <div className="container_details">
        <p>
          <b>
            14. ¿Cuantos proveedores suministran leche al centro y/o planta de
            proceso?
          </b>
        </p>
        <ul>
          {data.pregunta_14?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_14_asociados_cuantos ? (
          <p>Cuantos Asociados: {data.pregunta_14_asociados_cuantos}</p>
        ) : null}
        {data.pregunta_14_externos_cuantos ? (
          <p>Cuantos Externos: {data.pregunta_14_externos_cuantos}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            15. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
            Ganaderas BPG?:
          </b>
          {data.pregunta_15}
        </p>
        {data.pregunta_15_cuantos ? (
          <p>Cuantos: {data.pregunta_15_cuantos}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            16. ¿Si su proveedor es un centro de acopio, cuentan con certificado
            de Buenas Prácticas de Manufactura BPM?:
          </b>
          {data.pregunta_16}
        </p>
        {data.pregunta_16_cuantos ? (
          <p>Cuantos: {data.pregunta_16_cuantos}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            17. de los siguientes certificados con cuales cuentan sus
            proveedores
          </b>
          <ul>
            {data.pregunta_17?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
        </p>
        {data.pregunta_17_practicas_ordeno_cuantos ? (
          <p>
            Cuantos practicas de ordeño:{' '}
            {data.pregunta_17_practicas_ordeno_cuantos}
          </p>
        ) : null}
        {data.pregunta_17_practicas_ganaderas_cuantos ? (
          <p>
            Cuantos practicas ganaderas:{' '}
            {data.pregunta_17_practicas_ganaderas_cuantos}
          </p>
        ) : null}
        {data.pregunta_17_vacunacion_cuantos ? (
          <p>Cuantos vacunacion: {data.pregunta_17_vacunacion_cuantos}</p>
        ) : null}
        {data.pregunta_17_brucela_tuberculosis_cuantos ? (
          <p>
            Cuantos Hato libre de brucela y tuberculosis:{' '}
            {data.pregunta_17_brucela_tuberculosis_cuantos}
          </p>
        ) : null}
        {data.pregunta_17_otro ? <p>Otro: {data.pregunta_17_otro}</p> : null}
        {data.pregunta_17_otro_cuantos ? (
          <p>Otro Cuantos: {data.pregunta_17_otro_cuantos}</p>
        ) : null}
      </div>
      <div className="container_details">
        <h1>
          CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO y/o
          CENTRO DE ACOPIO
        </h1>
      </div>
      <div className="container_details">
        <p>
          <b>
            18. En lo que respecta a vías, que tipo de acceso predomina para el
            transporte de leche a la planta
          </b>
        </p>
        <ul>
          {data.pregunta_18?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
