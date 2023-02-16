import Card from '../card/Card';
import './Cards.css';

export default function Cards({ forms }: any) {
  return (
    <div className="card_container">
      {forms?.map((el: any) => (
        <Card
          key={el.id}
          id={el.id}
          foto_encuestado={el.foto_encuestado}
          nombre_encuestado={el.nombre_encuestado}
          municipio={el.pregunta_7}
          organizacion={el.pregunta_2}
          organizacion_otro={el.pregunta_2_otro}
        />
      ))}
    </div>
  );
}
