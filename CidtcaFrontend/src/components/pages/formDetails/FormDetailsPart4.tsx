import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';

export default function FormDetailsPart4(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  return (
    <div>
      <div className="container_details">
        <h1>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h1>
      </div>
      <div className="container_details">
        <p>
          <b>23. Prodcutos que elabora:</b>
        </p>
        <ul>
          {data.pregunta_23?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_23_otro ? <p>Otro: {data.pregunta_23_otro}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            24. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si es
            peso) puede producir?
          </b>
        </p>
        <ul>
          {data.pregunta_23?.map((el: string) => (
            <li>
              <p>
                <b>{el}</b>
              </p>
              <ul>
                <li>
                  <p>Diario: {data[`pregunta_24_${el}_diaria`]}</p>
                </li>
                <li>
                  <p>Semanal: {data[`pregunta_24_${el}_semanal`]}</p>
                </li>
                <li>
                  <p>Mensual: {data[`pregunta_24_${el}_mensual`]}</p>
                </li>
                <li>
                  <p>Rendimiento: {data[`pregunta_24_${el}_rendimiento`]}</p>
                </li>
                <li>
                  <p>Vida util: {data[`pregunta_24_${el}_vida_util`]}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
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
    </div>
  );
}
