import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FormInterface } from '../../interfaces/form';

export default function FormDetailsPart6(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.data
  );
  return (
    <div>
      <div className="container_details">
        <p>
          <b>35. Maquinaria, equipos y utensilios con los que cuenta:</b>
        </p>
        <ul>
          {data.pregunta_35?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
        {data.pregunta_35_otro ? <p>Otro: {data.pregunta_35_otro}</p> : null}
      </div>
      <div className="container_details">
        <h1>
          CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
          TRANSFORMACION
        </h1>
      </div>
      <div className="container_details">
        <p>
          <b>36. Actualmente ¿Tiene registros INVIMA?:</b>
          {data.pregunta_36}
        </p>
        <ul>
          {data.pregunta_36_cuales?.map((el: string) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>37. ¿cuenta con Concepto sanitario?:</b>
          {data.pregunta_37}
        </p>
        <ul>
          <p>
            <b>Calificacion</b>
          </p>
          {data.pregunta_37_calificacion?.map((el: string) => (
            <li className="ms-5">{el}</li>
          ))}
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>
            38. ¿Cuentan con documentos y registros de Buenas Prácticas de
            Manufactura (BPM)?:
          </b>
          {data.pregunta_38}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            39. ¿Dispone de agua potable para la transformación del producto?:
          </b>
          {data.pregunta_39}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>40. ¿Realiza pruebas de plataforma?:</b>
          {data.pregunta_40}
        </p>
        <ul>
          <b>Cuales:</b>
          {data.pregunta_40_cuales?.map((el: string) => (
            <li className="ms-5">{el}</li>
          ))}
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>
            41. ¿Tiene criterios de aceptación o rechazo para la materia prima?:
          </b>
          {data.pregunta_41}
        </p>
        {data.pregunta_41_cuales ? (
          <p>Cuales: {data.pregunta_41_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            42. ¿Registra la información obtenida de las pruebas seleccionadas
            en la pregunta anterior?:
          </b>
          {data.pregunta_42}
        </p>
        {data.pregunta_42_como ? <p>Como: {data.pregunta_42_como}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>43. Realiza pruebas para la liberación del producto terminado?:</b>
        </p>
        <ul>
          <li>
            <p>Microbiologicas: {data.pregunta_43_microbiologicas}</p>
            <p>Cuales: {data.pregunta_43_microbiologicas_cuales}</p>
          </li>
          <li>
            <p>Fisicoquímica: {data.pregunta_43_fisicoquimica}</p>
            <p>Cuales: {data.pregunta_43_fisicoquimica_cuales}</p>
          </li>
          <li>
            <p>Organolépticas: {data.pregunta_43_organolepticas}</p>
            <p>Cuales: {data.pregunta_43_organolepticas_cuales}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
