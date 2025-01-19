import { useState, useEffect } from 'react';
import styles from './TechSpecs.module.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      <h3 className={styles.title}>{t('details.title.tech_specs')}</h3>
      <div className={styles.wrapper}>
        <dl className={styles.tech_specs}>
          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>{t('details.screen')}</dt>
            <dd className={styles.tech_specs_description}>{specs.screen}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>
              {t('details.resolution')}
            </dt>
            <dd className={styles.tech_specs_description}>
              {specs.resolution}
            </dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>
              {' '}
              {t('details.processor')}
            </dt>
            <dd className={styles.tech_specs_description}>{specs.processor}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>
              {t('details.built_in_memory')}
            </dt>

            <dd className={styles.tech_specs_description}>{specs.ram}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}> {t('details.camera')}</dt>
            <dd className={styles.tech_specs_description}>{specs.camera}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>Zoom</dt>
            <dd className={styles.tech_specs_description}>{specs.zoom}</dd>
          </div>

          <div className={styles.tech_spec}>
            <dt className={styles.tech_specs_title}>{t('details.cell')}</dt>
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
