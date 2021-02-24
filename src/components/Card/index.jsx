import cx from 'classnames';

import styles from './Card.module.scss';

const Card = ({ horizontal = false, children }) => (
  <article
    className={cx(styles.card, {
      [styles.cardHorizontal]: horizontal,
    })}
  >
    <img
      alt="Abradolf Lincler"
      className={styles.cardImage}
      src="https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    />
    <div className={styles.cardBody}>
      <span className={styles.cardTitle}>Abradolf Lincler</span>
      <span className={styles.cardText}>
        <ul>
          <li>human</li>
          <li>unknown</li>
        </ul>
        {children}
      </span>
    </div>
  </article>
);

export default Card;
