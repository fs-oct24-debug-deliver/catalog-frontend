interface LinkInterface {
  id: number;
  title: string;
  link: string;
}

export const navLinks: LinkInterface[] = [
  {
    id: 0,
    title: 'home',
    link: '/',
  },
  {
    id: 1,
    title: 'phones',
    link: '/phones',
  },
  {
    id: 2,
    title: 'tablets',
    link: '/tablets',
  },
  {
    id: 3,
    title: 'accessories',
    link: '/accessories',
  },
];
