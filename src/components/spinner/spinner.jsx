import * as styles from './spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles.spinner}>
      {Array.from(
          { length: 12 },
          (_, i) => <div className={styles['spinner__element']} key={i}/>,
      )}
    </div>
  );
}
