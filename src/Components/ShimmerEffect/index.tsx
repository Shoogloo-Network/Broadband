import styles from './ShimmerEffect.module.scss';

const ShimmerEffect = () => {
  return (
    <>
      <div className={`${styles.box} ${styles.shine}`}></div>
      <div className={styles.block}>
        <div className={`${styles.lines} ${styles.shine}`}></div>
        <div className={`${styles.lines} ${styles.shine}`}></div>
        <div className={`${styles.lines} ${styles.shine}`}></div>
      </div>
      <div className={`${styles.photo} ${styles.shine}`}></div>
      <br />
      <div className={`${styles.box} ${styles.shine}`}></div>
      <div className={styles.block}>
        <div className={`${styles.lines} ${styles.shine}`}></div>
        <div className={`${styles.lines} ${styles.shine}`}></div>
        <div className={`${styles.lines} ${styles.shine}`}></div>
      </div>
    </>
  );
};

export default ShimmerEffect;
