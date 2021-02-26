import cx from 'classnames';

import styles from './Card.module.scss';

const Card = ({ title, subtitle, image, horizontal = false, children }) => (
  <article
    className={cx(styles.card, {
      [styles.cardHorizontal]: horizontal,
    })}
  >
    {image && <img alt={title} className={styles.cardImage} src={image} />}
    <div className={styles.cardBody}>
      <p className={styles.cardTitle}>{title}</p>
      {subtitle && (
        <p className={cx('hint', styles.cardSubtitle)}>{subtitle}</p>
      )}
      {children && <div className={styles.cardText}>{children}</div>}
    </div>
  </article>
);

export default Card;
