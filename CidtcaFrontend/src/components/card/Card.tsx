import { Link } from 'react-router-dom';

export default function Card(props: any) {
  return (
    <div className="card" style={{ width: '24rem' }}>
      <img src={props.foto_encuestado} className="card-img-top" alt="firma" />
      <div className="card-body">
        <h1 className="card-title">{props.nombre_encuestado}</h1>
        <h4 className="card-text">{props.municipio}</h4>
        <h4 className="card-text">
          {props.organizacion
            ? props.organizacion
            : props.organizacion_otro
            ? props.organizacion_otro
            : null}
        </h4>
        <Link to={`/details/${props.id}`} className="btn btn-success p-2">
          detalles
        </Link>
      </div>
    </div>
  );
}
