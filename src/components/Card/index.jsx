import cx from 'classnames';

import styles from './Card.module.scss';

const Card = ({ character, horizontal = false, children }) => (
  <article
    className={cx(styles.card, {
      [styles.cardHorizontal]: horizontal,
    })}
  >
    <img
      alt={character.name}
      className={styles.cardImage}
      src={character.image}
    />
    <div className={styles.cardBody}>
      <span className={styles.cardTitle}>{character.name}</span>
      <span className={styles.cardText}>
        <ul>
          <li>{character.species}</li>
          <li>{character.status}</li>
        </ul>
        {children}
      </span>
    </div>
  </article>
);

export default Card;
