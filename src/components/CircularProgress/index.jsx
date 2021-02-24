import styles from './CircularProgress.module.scss';

const CircularProgress = () => (
  <div className={styles.container}>
    <div className={styles.circularProgress}>
      <svg className={styles.circularProgressSvg} viewBox="22 22 44 44">
        <circle
          className={styles.circularProgressCircle}
          cx="44"
          cy="44"
          fill="none"
          r="20.2"
          strokeWidth="3.6"
        />
      </svg>
    </div>
  </div>
);

export default CircularProgress;
