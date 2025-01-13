import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const BreadcrumbsHome = () => <div className={styles.home} />;

  const routes = [{ path: '/', breadcrumb: BreadcrumbsHome }];
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
            className={`${styles.link}`}
          >
            {breadcrumb}
          </Link>

          {index < breadcrumbs.length - 1 && <div className={styles.arrow} />}
        </div>
      ))}
    </div>
  );
};
