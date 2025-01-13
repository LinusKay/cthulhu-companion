export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Call of Cthulhu Character Sheet Generator",
  description: "Generate your Call of Cthulhu character online.",
  navItems: [
    {
      label: "Home",
      href: "/",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    }
  ],
  links: {
    github: "https://github.com/linuskay/cthulhu-creator",
    sponsor: "https://ko-fi.com/libus_",
  },
};
