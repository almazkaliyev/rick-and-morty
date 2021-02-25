import { Link } from 'react-router-dom';

import Card from '../Card';
import styles from './CharactersList.module.scss';

const CharactersList = ({ items }) => {
  if (!items || items.length === 0) {
    return <h3>There is no characters...</h3>;
  }

  return (
    <ul className={styles.charactersList}>
      {items?.map((item) => (
        <li key={item.id}>
          <Link
            className={styles.charactersListLink}
            to={`/character/${item.id}`}
          >
            <Card character={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
