import styles from './ContactsPage.module.scss';

import Daniil from '../../../public/img/contacts/Daniil.jpg';
import Oksana from '../../../public/img/contacts/Oksana.jpg';
import Oleksandr from '../../../public/img/contacts/Oleksandr.jpg';
import Semen from '../../../public/img/contacts/Semen.jpg';
import Stanislav from '../../../public/img/contacts/Stanislav.jpg';
import Yuliia from '../../../public/img/contacts/Yuliia.jpg';

export const ContactsPage: React.FC = () => {
  window.scrollTo({
    top: 0,
  });

  const contacts = [
    {
      name: 'Daniil Kononchuk',
      image: Daniil,
      githubLink: 'https://github.com/Daniil-102',
    },
    {
      name: 'Oksana Moroz',
      image: Oksana,
      githubLink: 'https://github.com/OkMoroz',
    },
    {
      name: 'Oleksandr Kotliar',
      image: Oleksandr,
      githubLink: 'https://github.com/k0tlik02',
    },
    {
      name: 'Semen Vodolazkij',
      image: Semen,
      githubLink: 'https://github.com/SemenVodolazskij',
    },
    {
      name: 'Stanislav Sokolov',
      image: Stanislav,
      githubLink: 'https://github.com/StasSokolov1',
      role: 'Mentor',
    },
    {
      name: 'Yuliia Zubenko',
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
          key={contact.name}
        >
          <div className={styles.wrapper}>
            <div className={styles.img}>
              <img
                src={contact.image}
                alt={contact.name}
                className="img"
              />
            </div>
            <p className={styles.name}>{contact.name}</p>
            <p className={styles.text}>
              {contact.role ? contact.role : 'Fullstack developer'}
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
