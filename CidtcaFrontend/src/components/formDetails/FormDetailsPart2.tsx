import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FormInterface } from '../../interfaces/form';

export default function FormDetailsPart2(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.data
  );
  return (
    <div>
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
      <div className="container_details">
        <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
      </div>
      <div className="container_details">
        <p>
          <b>10. ¿Qué métodos de acopio de leche utiliza?:</b>
        </p>
        <ul>
          {data.pregunta_10?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_10_otro ? <p>Otro: {data.pregunta_10_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            11. ¿De qué manera se transporta la leche hasta la planta/centro de
            acopio?
          </b>
        </p>
        <ul>
          {data.pregunta_11?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_11_otro ? <p>Otro: {data.pregunta_11_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            12. ¿De qué manera transporta la leche desde plataforma a areas de
            proceso?:
          </b>
          <ul>
            {data.pregunta_12?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
        </p>
        {data.pregunta_12_otro ? <p>Otro: {data.pregunta_12_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>13. ¿De qué manera realiza el almacenamiento de la leche?:</b>
        </p>
        <ul>
          {data.pregunta_13?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_13_otro ? <p>Otro: {data.pregunta_13_otro}</p> : null}
      </div>
    </div>
  );
}
