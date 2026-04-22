export type Lang = "en" | "de";

export const languages: Record<Lang, string> = {
  en: "English",
  de: "Deutsch",
};

export const defaultLang: Lang = "en";

type UI = {
  nav: {
    services: string;
    resources: string;
    framework: string;
    about: string;
    contact: string;
    skipToContent: string;
    switchLang: string;
  };
  footer: {
    services: string;
    resources: string;
    ecosystem: string;
    company: string;
    privacy: string;
    terms: string;
    imprint: string;
    tagline: string;
    colophon: string;
  };
  common: {
    workWithUs: string;
    learnMore: string;
    seeAllWork: string;
    comingSoon: string;
    youAreHere: string;
  };
};

export const ui: Record<Lang, UI> = {
  en: {
    nav: {
      services: "Services",
      resources: "Resources",
      framework: "Framework",
      about: "About",
      contact: "Contact",
      skipToContent: "Skip to content",
      switchLang: "Deutsch",
    },
    footer: {
      services: "Services",
      resources: "Resources",
      ecosystem: "Ecosystem",
      company: "Company",
      privacy: "Privacy",
      terms: "Terms",
      imprint: "Imprint",
      tagline: "Work is for bots. Life is for humans.",
      colophon:
        "The Blank Collar — AI-native transformation agency. Zurich.",
    },
    common: {
      workWithUs: "Work with us",
      learnMore: "Learn more",
      seeAllWork: "See all work",
      comingSoon: "Coming soon",
      youAreHere: "You're here",
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      resources: "Ressourcen",
      framework: "Framework",
      about: "Über uns",
      contact: "Kontakt",
      skipToContent: "Zum Inhalt springen",
      switchLang: "English",
    },
    footer: {
      services: "Leistungen",
      resources: "Ressourcen",
      ecosystem: "Ökosystem",
      company: "Unternehmen",
      privacy: "Datenschutz",
      terms: "AGB",
      imprint: "Impressum",
      tagline: "Arbeit ist für Bots. Leben ist für Menschen.",
      colophon:
        "The Blank Collar — KI-native Transformationsagentur. Zürich.",
    },
    common: {
      workWithUs: "Mit uns arbeiten",
      learnMore: "Mehr erfahren",
      seeAllWork: "Alle Arbeit ansehen",
      comingSoon: "Bald verfügbar",
      youAreHere: "Sie sind hier",
    },
  },
};

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "de") return "de";
  return defaultLang;
}

export function t(lang: Lang): UI {
  return ui[lang];
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return clean === "/" ? "/" : clean;
  return clean === "/" ? "/de/" : `/de${clean}`;
}

export function switchLangPath(lang: Lang, pathname: string): string {
  const target: Lang = lang === "en" ? "de" : "en";
  let stripped = pathname;
  if (stripped.startsWith("/de/")) stripped = stripped.slice(3);
  else if (stripped === "/de") stripped = "/";
  if (target === "en") return stripped || "/";
  if (stripped === "/" || stripped === "") return "/de/";
  return `/de${stripped}`;
}
