import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import type { FormInterface } from '../../../interfaces/form';

export default function FormDetailsPart9(): JSX.Element {
  const data = useSelector<RootState, FormInterface>(
    (state) => state.form.dataDetails
  );
  return (
    <div>
      <div className="container_details">
        <p>
          <b>60. ¿A qué precio compra usted el litro de leche?:</b>
          {data.pregunta_60}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            61. ¿Maneja bonificaciones para pago de la leche de acuerdo a la
            resolución 017 de 2019?:
          </b>
          {data.pregunta_61}
        </p>
        {data.pregunta_61_cuales ? (
          <p>Cuales: {data.pregunta_61_cuales}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>62. ¿Conoce cuales son sus costos de produccion?:</b>
          {data.pregunta_62}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>63. ¿Cuáles son sus principales clientes?:</b>
          {data.pregunta_63}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>
            64. ¿Estaría dispuesto a comercializar su producto bajo una misma
            marca de forma asociativa?:
          </b>
          {data.pregunta_64}
        </p>
        {data.pregunta_64_porque ? (
          <p>Porque: {data.pregunta_64_porque}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            65. ¿Estaria dispuesto a comercializar sus productos, con una
            entidad privada departamental que sirva como centro de acopio de
            productos derivados lacteos?:
          </b>
          {data.pregunta_65}
        </p>
        {data.pregunta_65_porque ? (
          <p>Porque: {data.pregunta_65_porque}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>66. ¿Cuál es el precio de venta de sus productos?</b>
        </p>
        <ul>
          {data.pregunta_23?.map((el: string) => (
            <li>
              <p>
                <b>{el}</b>
              </p>
              <ul>
                <li>
                  <p>Presentacion: {data[`pregunta_66_${el}_presentacion`]}</p>
                </li>
                <li>
                  <p>Valor: {data[`pregunta_66_${el}_valor`]}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>
            67. ¿Cuentan con transporte propio para la distribución y venta?:
          </b>
          {data.pregunta_67}
        </p>
        {data.pregunta_67_distribucion ? (
          <p>
            ¿Se tiene tercerizado el proceso de distribución?:{' '}
            {data.pregunta_67_distribucion}
          </p>
        ) : null}
        {data.pregunta_67_distribucion_quien ? (
          <p>Con quien: {data.pregunta_67_distribucion_quien}</p>
        ) : null}
      </div>
      <div className="container_details">
        <p>
          <b>
            68. ¿Cuáles son sus costos mensuales aproximados de servicios
            públicos?:
          </b>
        </p>
        <ul>
          <li>Energia: {data.pregunta_68_energia}</li>
          <li>Agua: {data.pregunta_68_agua}</li>
          <li>Internet: {data.pregunta_68_internet}</li>
          <li>Telefonia: {data.pregunta_68_telefonia}</li>
          <li>
            Otro: {data.pregunta_68_otro}, Valor: {data.pregunta_68_otro_valor}
          </li>
        </ul>
      </div>
      <div className="container_details">
        <p>
          <b>Observaciones:</b>
          {data.observaciones}
        </p>
      </div>
      <div className="container_details">
        <p>
          <b>Fecha:</b>
          {data.fecha}
        </p>
      </div>
      <div className="container_details">
        <div className="container_data">
          <div>
            <p>
              <b>Nombre encuestado:</b>
              {data.nombre_encuestado}
            </p>
            <p>
              <b>Cedula encuestado:</b>
              {data.cedula_encuestado}
            </p>
            <p>
              <b>Firma encuestado:</b>
            </p>
            <img src={data.firma_encuestado} alt="firma encuestado" />
          </div>
          <div>
            <p>
              <b>Nombre encuestador:</b>
              {data.nombre_encuestador}
            </p>
            <p>
              <b>Cedula encuestador:</b>
              {data.cedula_encuestador}
            </p>
            <p>
              <b>Firma encuestador:</b>
            </p>
            <img src={data.firma_encuestador} alt="cedula encuestador" />
          </div>
        </div>
      </div>
    </div>
  );
}
