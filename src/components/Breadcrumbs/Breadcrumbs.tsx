import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useTranslation } from 'react-i18next';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const { t } = useTranslation();
  const BreadcrumbsHome = () => <div className={styles.home} />;

  const routes = [
    { path: '/', breadcrumb: BreadcrumbsHome },
    {
      path: '/tablets',
      breadcrumb: () => t('breadcrumbs.tablets'),
    },
    {
      path: '/accessories',
      breadcrumb: () => t('breadcrumbs.accessories'),
    },
    {
      path: '/phones',
      breadcrumb: () => t('breadcrumbs.phones'),
    },
    {
      path: '/favorites',
      breadcrumb: () => t('breadcrumbs.favorites'),
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <div
          key={match.pathname}
          className={styles.container}
        >
          <Link
            to={match.pathname}
            className={`${styles.link} ${index < breadcrumbs.length - 1 ? styles.linkWithFilter : ''}`}
          >
            {breadcrumb}
          </Link>

          {index < breadcrumbs.length - 1 && <div className={styles.arrow} />}
        </div>
      ))}
    </div>
  );
};
