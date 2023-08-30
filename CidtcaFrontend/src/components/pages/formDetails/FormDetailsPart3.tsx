import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';

export default function FormDetailsPart3(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  return (
    <div>
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
      <div className="container_details">
        <p>
          <b>
            19. En lo que respecta a vías, que tipo de acceso predomina para
            comercializar sus productos
          </b>
          <ul>
            {data.pregunta_19?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            20. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
            planta?:
          </b>
          {data.pregunta_20}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>21. Georreferenciación:</b>
        </p>
        <ul>
          <li>
            <p>
              <b>Coordenada N:</b>
            </p>
            <ul>
              <li>
                <p>Grados: {data.pregunta_21_n_grados}</p>
              </li>
              <li>
                <p>Minutos: {data.pregunta_21_n_minutos}</p>
              </li>
              <li>
                <p>Segundos: {data.pregunta_21_n_segundos}</p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Coordenada W:</b>
            </p>
            <ul>
              <li>
                <p>Grados: {data.pregunta_21_w_grados}</p>
              </li>
              <li>
                <p>Minutos: {data.pregunta_21_w_minutos}</p>
              </li>
              <li>
                <p>Segundos: {data.pregunta_21_w_segundos}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>
            22. ¿Cuál es la altura sobre el nivel del mar en la que se ubica la
            planta?:
          </b>
          {data.pregunta_22}
        </p>
      </div>
    </div>
  );
}
