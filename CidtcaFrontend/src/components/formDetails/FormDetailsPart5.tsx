import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FormInterface } from '../../interfaces/form';

export default function FormDetailsPart5(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.data
  );
  return (
    <div>
      <div className="container_details">
        <p>
          <b>25.¿cómo se determina la vida útil?</b>
        </p>
        <ul>
          {data.pregunta_25?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_25_otro ? <p>Otro: {data.pregunta_25_otro}</p> : null}
      </div>
      <div className="container_details">
        <h1>
          CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO DE
          LA EMPRESA
        </h1>
      </div>
      <div className="container_details">
        <p>
          <b>26. ¿Cuantos años de experiencia tiene en el sector lácteo?:</b>
          {data.pregunta_26}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            27. ¿Cuál es el número de personal fijo que trabaja en la planta y/o
            centro acopio?:
          </b>
          {data.pregunta_27}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            28. ¿Cuál es el número de personal OCASIONAL que trabaja en la
            planta y/o centro acopio?:
          </b>
          {data.pregunta_28}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            29. ¿Cuantas familias se ven favorecidas por la planta de
            procesamiento o centro de acopio, la venta y la elaboración de
            productos derivados de leche?:
          </b>
          {data.pregunta_29}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            30. ¿Pertenece a algún grupo, asociación, organismo o queseros
            reconocido de segundo nivel?:
          </b>
          {data.pregunta_30}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            31. Si su respuesta anterior es afirmativa, responda las siguientes
            preguntas, ¿ Conoce cuantas organizaiones ademas de la suya
            pertenecen al grupo, asociación u organismo de segundo nivel?:
          </b>
          {data.pregunta_31}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>32. Cual es el nombre del grupo, asociación o organismo:</b>
          {data.pregunta_32}
        </p>
      </div>
      <div className="container_details">
        <h1>
          CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA EN
          LA PLANTA DE TRANSFORMACION
        </h1>
      </div>
      <div className="container_details">
        <p>
          <b>
            33. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla la
            actividad económica?:
          </b>
          {data.pregunta_33}
        </p>
        {data.pregunta_33_otro ? <p>Otro: {data.pregunta_33_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>34. Zonas de la planta de producción con las que cuenta:</b>
        </p>
        <ul>
          {data.pregunta_34?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_34_otro ? <p>Otro: {data.pregunta_34_otro}</p> : null}
      </div>
    </div>
  );
}
