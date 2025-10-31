import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.rim}>
      <div className={styles.rimInner}>
        <img className={styles.logo} src="/nexusscope.svg" />
      </div>
    </div>
  );
};
