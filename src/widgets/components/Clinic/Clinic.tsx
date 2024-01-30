import styles from "./Clinic.module.scss";

export const Clinic = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src="/assets/clinic.jpg" alt="clinic" />

      <div className={styles.content}>
        <h5 className={styles.title}>Клиника хирургии</h5>

        <div className={styles.list}>
          <div className={styles.item}>
            <p>Страна:</p>
            <span>US</span>
          </div>

          <div className={styles.item}>
            <p>Город:</p>
            <span>New York</span>
          </div>

          <div className={styles.item}>
            <p>Адрес:</p>
            <span>New York Avenu 1300</span>
          </div>
        </div>
      </div>
    </div>
  );
};