import cx from 'classnames';

import styles from './Card.module.scss';

const Card = ({ title, image, horizontal = false, children }) => (
  <article
    className={cx(styles.card, {
      [styles.cardHorizontal]: horizontal,
    })}
  >
    {image && <img alt={title} className={styles.cardImage} src={image} />}
    <div className={styles.cardBody}>
      <span className={styles.cardTitle}>{title}</span>
      <span className={styles.cardText}>{children}</span>
    </div>
  </article>
);

export default Card;
