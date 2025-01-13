import styles from './TechSpecs.module.scss';

const data = [
  { title: 'Screen', description: '6.5” OLED' },
  { title: 'Resolution', description: '2688x1242' },
  { title: 'Processor', description: 'Apple A12 Bionic' },
  { title: 'RAM', description: '3 GB' },
  { title: 'Built in memory', description: '64 GB' },
  { title: 'Camera', description: '12 Mp + 12 Mp + 12 Mp (Triple)' },
  { title: 'Zoom', description: 'Optical, 2x' },
  { title: 'Ceil', description: 'GSM, LTE, UMTS' },
];

export const TechSpecs = () => {
  return (
    <>
      <h4 className={`${styles.title} h4`}>Tech specs</h4>
      <div className={styles.wrapper}>
        <dl className={styles.tech_specs}>
          {data.map((spec, index) => (
            <dt
              key={index}
              className={styles.tech_specs_title}
            >
              {spec.title}
            </dt>
          ))}
        </dl>
        <dl className={styles.tech_specs}>
          {data.map((spec, index) => (
            <dd
              key={index}
              className={styles.tech_specs_description}
            >
              {spec.description}
            </dd>
          ))}
        </dl>
      </div>
    </>
  );
};
