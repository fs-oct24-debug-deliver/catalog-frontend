import styles from './/ItemCardTechSpecs.module.scss';

export const ItemCardTechSpecs = () => {
  return (
    <>
      <h4 className={`${styles.title} h4`}>Tech specs</h4>
      <div className={styles.wrapper}>
        <dl className={styles.tech_specs}>
          <dt className={styles.tech_specs_title}>Screen</dt>
          <dt className={styles.tech_specs_title}>Resolution</dt>
          <dt className={styles.tech_specs_title}>Processor</dt>
          <dt className={styles.tech_specs_title}>RAM</dt>
          <dt className={styles.tech_specs_title}>Built in memory</dt>
          <dt className={styles.tech_specs_title}>Camera</dt>
          <dt className={styles.tech_specs_title}>Zoom</dt>
          <dt className={styles.tech_specs_title}>Ceil</dt>
        </dl>
        <dl className={styles.tech_specs}>
          <dd className={styles.tech_specs_description}>6.5” OLED</dd>
          <dd className={styles.tech_specs_description}>2688x1242</dd>
          <dd className={styles.tech_specs_description}>Apple A12 Bionic</dd>
          <dd className={styles.tech_specs_description}>3 GB</dd>
          <dd className={styles.tech_specs_description}>64 GB</dd>
          <dd className={styles.tech_specs_description}>
            12 Mp + 12 Mp + 12 Mp (Triple)
          </dd>
          <dd className={styles.tech_specs_description}>Optical, 2x</dd>
          <dd className={styles.tech_specs_description}>GSM, LTE, UMTS</dd>
        </dl>
      </div>
    </>
  );
};
