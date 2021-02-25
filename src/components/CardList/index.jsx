import { Link } from 'react-router-dom';

import Card from '../Card';
import styles from './CardList.module.scss';

const CardList = ({ items }) => {
  if (!items || items.length === 0) {
    return <h3>There is no characters...</h3>;
  }

  return (
    <ul className={styles.cardList}>
      {items?.map(({ id, name, image, species, status }) => (
        <li key={id}>
          <Link className={styles.cardListLink} to={`/character/${id}`}>
            <Card image={image} title={name}>
              <ul>
                <li>{species}</li>
                <li>{status}</li>
              </ul>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
