import { Link } from 'react-router-dom';
import type { CardPropsInterface } from '../../types/interfaces';

export default function Card(props: CardPropsInterface): JSX.Element {
  const {
    id,
    foto_encuestado,
    nombre_encuestado,
    municipio,
    organizacion,
    organizacion_otro,
  } = props;

  return (
    <div className="card" style={{ width: '24rem' }}>
      <img src={foto_encuestado} className="card-img-top" alt="firma" />
      <div className="card-body">
        <h1 className="card-title">{nombre_encuestado}</h1>
        <h4 className="card-text">{municipio}</h4>
        <h4 className="card-text">
          {organizacion
            ? organizacion
            : organizacion_otro
            ? organizacion_otro
            : null}
        </h4>
        <Link to={`/details/${id}`} className="btn btn-success p-2">
          detalles
        </Link>
      </div>
    </div>
  );
}
