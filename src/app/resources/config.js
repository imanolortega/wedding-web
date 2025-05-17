// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 100,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 90,
    x: 100,
    y: 60,
    width: 70,
    height: 50,
    tilt: -40,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 20,
    size: "2",
    color: "brand-on-background-weak",
  },
  grid: {
    display: true,
    opacity: 100,
    color: "accent-alpha-weak",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "The Boda | Somos Martín y Luján",
    description:
      "Somos Martín y Luján. It’s wedding time. Acompañanos este 6 de septiembre. #ThebodaM&L",
    image: "/martin-lujan-theboda.jpg",
    canonical: "https://www.theboda.top",
    robots: "index,follow",
    alternates: [{ href: "https://www.theboda.top", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "The Boda",
  description: meta.home.description,
  email: "example@example.com",
};

// social links
const social = {
  twitter: "https://www.twitter.com/example",
  linkedin: "https://www.linkedin.com/company/example/",
  discord: "https://discord.com/invite/example",
};

const event = [
  {
    id: 1,
    title: "Salón",
    description: "Abba Huasi",
  },
  {
    id: 2,
    title: "Fecha",
    description: "6/9/2025",
  },
  {
    id: 3,
    title: "Ubicación",
    description: "Ruta 9, Yanda, Santiago del Estero",
  },
];

const wedding = [
  {
    id: "1",
    title: "Lugar",
    description: "Parroquia San Juan Diego",
  },
  {
    id: "2",
    title: "Hora",
    description: "18:30",
  },
  {
    id: "3",
    title: "Fecha",
    description: "6/9/2025",
  },
  {
    id: "4",
    title: "Ubicación",
    description: "Av. San Patricio, entre Guevara y Yunes. Barrio San Germés.",
  },
];

export { baseURL, effects, event, font, meta, schema, social, style, wedding };
