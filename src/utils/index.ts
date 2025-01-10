export const getNavLinkClass = (
  isActive: boolean,
  activeClass: string,
  defaultClass: string,
) => (isActive ? activeClass : defaultClass);
