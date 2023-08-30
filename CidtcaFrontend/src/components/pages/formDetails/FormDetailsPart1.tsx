import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';

export default function FormDetailsPart1(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  return (
    <div>
      <div className="container_details">
        <h1>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h1>
      </div>
      <div className="container_details">
        <p>
          <b>1. Nombre de organizacion:</b>
          {data.pregunta_1}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>2. Tipo de personeria:</b>
          {data.pregunta_2}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>3. Tipo de organizacion:</b>
          {data.pregunta_3}
        </p>
        {data.pregunta_3_otro ? <p>Otro: {data.pregunta_3_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>4. Su organización cuenta con:</b>
        </p>
        <ul>
          {data.pregunta_4?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>5. Representante legal o propietario:</b>
          {data.pregunta_5}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>6. Información de Contacto:</b>
          <p>
            <b>Contacto 1: </b>
          </p>
          <ul>
            <li>Nombre: {data.pregunta_6_contacto}</li>
            <li>Numero: {data.pregunta_6_numero}</li>
            <li>Correo: {data.pregunta_6_correo}</li>
          </ul>
          <p>
            <b>Contacto 2: </b>
          </p>
          <ul>
            <li>Nombre: {data.pregunta_6_contacto_2}</li>
            <li>Numero: {data.pregunta_6_numero_2}</li>
            <li>Correo: {data.pregunta_6_correo_2}</li>
          </ul>
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>7. Actividad principal:</b>
          <ul>
            {data.pregunta_7?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>8. Municipio:</b>
          {data.pregunta_8}
        </p>
        <p>
          <b>Direccion:</b>
          {data.pregunta_8_direccion}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>9. ¿realiza el aporte al fondo nacional del ganado?:</b>
          {data.pregunta_9}
        </p>
      </div>
    </div>
  );
}
