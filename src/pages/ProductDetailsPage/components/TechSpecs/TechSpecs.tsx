import { useState, useEffect } from 'react';
import styles from './TechSpecs.module.scss';

type TechSpecsProps = {
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[];
  };
};

export const TechSpecs = ({ specs }: TechSpecsProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <h3 className={styles.title}>Tech specs</h3>
      <div className={styles.wrapper}>
        <dl className={styles.tech_specs}>
          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Screen</dt>
            <dd className={styles.tech_specs_description}>{specs.screen}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Resolution</dt>
            <dd className={styles.tech_specs_description}>
              {specs.resolution}
            </dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Processor</dt>
            <dd className={styles.tech_specs_description}>{specs.processor}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>RAM</dt>
            <dd className={styles.tech_specs_description}>{specs.ram}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Camera</dt>
            <dd className={styles.tech_specs_description}>{specs.camera}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Zoom</dt>
            <dd className={styles.tech_specs_description}>{specs.zoom}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Cell</dt>
            <dd className={styles.tech_specs_description}>
              {isMobile ?
                specs.cell.slice(0, 4).join(', ')
              : specs.cell.join(', ')}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};
