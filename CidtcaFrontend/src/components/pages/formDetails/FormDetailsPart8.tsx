import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';

export default function FormDetailsPart8(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  return (
    <div>
      <div className="container_details">
        <h1>CRITERIO 8. INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO</h1>
      </div>
      <div className="container_details">
        <p>
          <b>
            52. ¿Ha recibido o participado en algún proyecto para el
            fortalecimiento o el mejoramiento del proceso productivo de su
            organización?:
          </b>
          {data.pregunta_52}
        </p>
        {data.pregunta_52_cual ? <p>Cual: {data.pregunta_52_cual}</p> : null}
        {data.pregunta_52_entidad ? (
          <p>Entidad financiadora: {data.pregunta_52_entidad}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            53. ¿Desearía participar activamente en el proyecto de investigacion
            "DESARROLLO DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA
            INOCUIDAD DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE
            NARIÑO"?:
          </b>
          {data.pregunta_53}
        </p>
      </div>
      <div className="container_details">
        <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
      </div>
      <div className="container_details">
        <p>
          <b>54. ¿Actualmente sus productos tienen un diseño de marca?:</b>
          {data.pregunta_54}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            55. Cual es el nombre de la marca que maneja para sus productos:
          </b>
          {data.pregunta_55}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            56. ¿Realiza maquila o si estaría interesado en realizar procesos de
            maquila?:
          </b>
          {data.pregunta_56}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>57. ¿Utiliza algún medio de promoción para sus productos?:</b>
          {data.pregunta_57}
        </p>
        {data.pregunta_57_cuales ? (
          <p>Cuales: {data.pregunta_57_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>58. ¿Considera que tiene algún tipo de competencia directa?:</b>
          {data.pregunta_58}
        </p>
        {data.pregunta_58_cuales ? (
          <p>Cuales: {data.pregunta_58_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>59. ¿Dónde esta realizando la venta de sus productos?:</b>
        </p>
        <ul>
          {data.pregunta_59?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        <p>
          <b>Destino:</b>
        </p>
        <ul>
          {data.pregunta_59_destino_transformadora_local ? (
            <li>
              Destino transformadora local:{' '}
              {data.pregunta_59_destino_transformadora_local}
            </li>
          ) : null}
          {data.pregunta_59_destino_transformadora_nacional ? (
            <li>
              Destino transformadora nacional:{' '}
              {data.pregunta_59_destino_transformadora_nacional}
            </li>
          ) : null}
          {data.pregunta_59_destino_venta_local ? (
            <li>Destino venta local: {data.pregunta_59_destino_venta_local}</li>
          ) : null}
          {data.pregunta_59_destino_venta_nacional ? (
            <li>
              Destino venta nacional: {data.pregunta_59_destino_venta_nacional}
            </li>
          ) : null}
        </ul>
        {data.pregunta_59_otros ? <p>Otros: {data.pregunta_59_otros}</p> : null}
      </div>
    </div>
  );
}
