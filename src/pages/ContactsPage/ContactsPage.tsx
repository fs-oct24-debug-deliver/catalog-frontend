import styles from './ContactsPage.module.scss';

import Daniil from './contacts/Daniil.jpg';
import Oksana from './contacts/Oksana.jpg';
import Oleksandr from './contacts/Oleksandr.jpg';
import Semen from './contacts/Semen.jpg';
import Stanislav from './contacts/Stanislav.jpg';
import Yuliia from './contacts/Yuliia.jpg';
import { useTranslation } from 'react-i18next';

export const ContactsPage: React.FC = () => {
  window.scrollTo({ top: 0 });
  const { t } = useTranslation();

  const contacts = [
    {
      nameKey: 'daniil_kononchuk',
      image: Daniil,
      githubLink: 'https://github.com/Daniil-102',
    },
    {
      nameKey: 'oksana_moroz',
      image: Oksana,
      githubLink: 'https://github.com/OkMoroz',
    },
    {
      nameKey: 'oleksandr_kotliar',
      image: Oleksandr,
      githubLink: 'https://github.com/k0tlik02',
    },
    {
      nameKey: 'semen_vodolazkij',
      image: Semen,
      githubLink: 'https://github.com/SemenVodolazskij',
    },
    {
      nameKey: 'stanislav_sokolov',
      image: Stanislav,
      githubLink: 'https://github.com/StasSokolov1',
      role: 'mentor',
    },
    {
      nameKey: 'yuliia_zubenko',
      image: Yuliia,
      githubLink: 'https://github.com/yuliiazubenko',
    },
  ];

  return (
    <div
      className={styles.contacts}
      data-aos="fade-down"
    >
      {contacts.map((contact) => (
        <div
          className={styles.container}
          key={contact.nameKey}
        >
          <div className={styles.wrapper}>
            <div className={styles.img}>
              <img
                src={contact.image}
                alt={t(`contact_us.names.${contact.nameKey}`)}
                className="img"
              />
            </div>
            <p className={styles.name}>
              {t(`contact_us.names.${contact.nameKey}`)}
            </p>
            <p className={styles.text}>
              {contact.role ?
                t(`contact_us.roles.${contact.role}`)
              : t('contact_us.roles.fullstack_developer')}
            </p>
            <a
              href={contact.githubLink}
              target="_blank"
              rel="noreferrer"
              className={styles.github}
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
