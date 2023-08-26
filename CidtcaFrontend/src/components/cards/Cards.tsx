import Card from '../card/Card';
import type { FormInterface } from '../../interfaces/form';
import type { CardsPropsType } from '../../types/cardsProps';
import './Cards.css';

export default function Cards(props: CardsPropsType): JSX.Element {
  const { forms } = props;

  return (
    <div className="card_container">
      {forms?.map((el: FormInterface) => (
        <Card
          key={el.id}
          id={el.id}
          foto_encuestado={el.foto_encuestado}
          nombre_encuestado={el.nombre_encuestado}
          municipio={el.pregunta_8}
          organizacion={el.pregunta_2}
          organizacion_otro={el.pregunta_3_otro}
        />
      ))}
    </div>
  );
}
