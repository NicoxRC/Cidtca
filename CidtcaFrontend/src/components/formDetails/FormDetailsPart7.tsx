import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FormInterface } from '../../interfaces/form';

export default function FormDetailsPart7(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.data
  );
  return (
    <div>
      <div className="container_details">
        <p>
          <b>44. ¿Realiza análisis de la información obtenida?:</b>
          {data.pregunta_44}
        </p>
        {data.pregunta_44_como ? <p>Como: {data.pregunta_44_como}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            45. De la siguiente indumentaria, seleccione cuales utiliza para la
            elaboración de los productos:
          </b>
          <ul>
            {data.pregunta_45?.map((el: string) => (
              <li>{el}</li>
            ))}
          </ul>
          {data.pregunta_45_otro ? <p>Otro: {data.pregunta_45_otro}</p> : null}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            46. ¿Usa detergente o desinfectantes autorizados e implementa
            rotación?:
          </b>
          {data.pregunta_46}
        </p>
        {data.pregunta_46_cuales ? (
          <p>Cuales: {data.pregunta_46_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            47. ¿Aplica algun manejo o tratamiento de residuos sólidos y
            líquidos?:
          </b>
          {data.pregunta_47}
        </p>
        {data.pregunta_47_cual ? <p>Cual: {data.pregunta_47_cual}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            48. ¿realiza análisis de materia prima en laboratorio externos de
            leche?:
          </b>
          {data.pregunta_48}
        </p>
        {data.pregunta_48_cuales ? (
          <p>Cuales: {data.pregunta_48_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            49. ¿realiza análisis de materia prima en laboratorio externos para
            producto terminado?:
          </b>
          {data.pregunta_49}
        </p>
        {data.pregunta_49_cual ? <p>Cual: {data.pregunta_49_cual}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            50. ¿Realiza análisis de calidad de agua en laboratorio externo?:
          </b>
          {data.pregunta_50}
        </p>
        {data.pregunta_50_cual ? <p>Cual: {data.pregunta_50_cual}</p> : null}
      </div>
      <div className="container_details">
        <p>
          <b>51. ¿Contrata el control de plagas con una empresa externa?:</b>
          {data.pregunta_51}
        </p>
        {data.pregunta_51_cual ? <p>Cual: {data.pregunta_51_cual}</p> : null}
      </div>
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
    </div>
  );
}
