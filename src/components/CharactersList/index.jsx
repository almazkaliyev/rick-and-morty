import { Link } from 'react-router-dom';

import Card from '../Card';
import styles from './CharactersList.module.scss';

const CharactersList = () => (
  <ul className={styles.charactersList}>
    {Array(42)
      .fill(0)
      .map(() => (
        <li>
          <Link className={styles.charactersListLink} to="/character/1">
            <Card />
          </Link>
        </li>
      ))}
  </ul>
);

export default CharactersList;
