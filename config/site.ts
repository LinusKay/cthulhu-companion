export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Call of Cthulhu Companion",
  description:
    "Reference Cthulhu Skills & Occupations and build your investigator with ease!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Occupations",
      href: "/occupations",
    },
    {
      label: "Weapons",
      href: "/weapons",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Occupations",
      href: "/occupations",
    },
    {
      label: "Weapons",
      href: "/weapons",
    },
  ],
  links: {
    github: "https://github.com/linuskay/cthulhu-companion",
    sponsor: "https://ko-fi.com/libus_",
  },
};
