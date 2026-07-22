import { createContext, useContext, useState, type ReactNode } from 'react'
import type {Lang, Translations} from '../types'

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      logo: 'Julian D Silva',
      profile: 'Inicio',
      web: 'Proyectos de desarrollo web',
      mobile: 'Experiencia en desarrollo Móvil y Apps',
      contact: 'Contacto',
      langBtn: 'ES',
      gameExp: "Experiencia como programador de videojuegos",
      uiExp: "Experience con UI"
    },
    profilePage: {
      name: 'Julian D Silva',
      role: 'Desarrollador de Aplicaciones Web y Móviles.',
      description: 'Soy graduado de la Universidad de los Andes (Colombia) en Narrativas Digitales, con especializaciones en Cine, Video y Animación, y Computación Visual. Actualmente, curso un programa intensivo en la Vancouver Film School, enfocado en programación de videojuegos, desarrollo web y aplicaciones móviles.\n' +
          '\n' +
          'Durante los últimos dos años, he enfocado mi crecimiento en el desarrollo de software, fortaleciendo mis habilidades en programación, desarrollo web y desarrollo móvil, con un interés especial en la creación de soluciones digitales .\n' +
          '\n' +
          'He trabajado con tecnologías y lenguajes como Python, C++, C#, Kotlin y TypeScript, además de herramientas y frameworks como Processing, p5.js, CMD Script y HLSL. Actualmente, continúo expandiendo mis conocimientos con un enfoque principal en React, React Native y Vue, desarrollando aplicaciones modernas, eficientes y con una sólida experiencia de usuario.\n' +
          '\n' +
          'Del mismo modo, estoy aprendiendo sobre Unity y unreal, desarrollando juegos y projectos de diferentes generos e indoles.' +
          '\n' +
          'Me gusta combinar la creatividad con la tecnología para construir experiencias digitales.',
      tags: ['HTML - 2 años', 'CSS - 2 años', 'JavaScript - 1 año', 'C# - 1 año', 'Vue - 6 meses', 'React - 6 meses', 'React Native - 6 meses', 'C++ - 6 meses'],
      catchPhrase: "La oportunidad de expandir tus posibilidades",
      identitySentence: "Soy un programmador, experto en desarrollo de frontend y de sistemas generales. He estudiado mas de 10 lenguajes diferentes desarrollando juegos, paginas web y aplicaciones moviles. Mi objetivo es desarrollarme inicialmente como frontend y eventualmente como desarrollador fullstack."
    },
    webProjects: {
      sections: [
        {id: '2026', label: '2026'},
        {id: '2025', label: '2025'},
      ],
      clarification: 'Estos han sido algunos de mis proyectos mas recientes (Incluyendo esta página)',
      projects: [],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    mobileProjects: {
      sections: [
        {id: '2026', label: '2026'},
        {id: '2025', label: '2025'},
      ],
      clarification: 'Estos son mis proyectos para desarrollo móvil.',
      projects: [],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    gameExp: {
      sections: [
        { id: '2025', label: '2025' },
      ],
      clarification: 'Experiencia en desarrollo de videojuegos.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    uiExp: {
      sections: [
        { id: '2026', label: '2026' },
      ],
      aclaration: 'Experiencia en desarrollo de UI.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Mostrar proceso",
      showingProcessButtonTextTrue: "Ocultar proceso",
    },
    contactPage: {
      title: 'Información de contacto',
      subtitle1: 'Desde aplicaciones web y móviles hasta experiencias interactivas, disfruto desarrollando soluciones que combinan creatividad y tecnología. Hablemos sobre cómo podemos trabajar juntos.',
      subtitle2: " \n\n No dejes tus ideas en borrador. Escríbeme y llevemos tu idea al siguiente nivel.",
      labels: {
        email: 'Email',
        phoneCol: 'Teléfono',
        phoneCad: 'Teléfono',
        location: 'Ubicación',
        linkedin: 'LinkedIn',
        MainGithub: 'GitHub Principal (Projectos principales)',
        SecondaryGithub: 'Github Secundarios (Experimentos y exploración)'
      },
    }
  },
  en: {
    nav: {
      logo: 'Julian D Silva',
      profile: 'Home',
      web: 'Web Framework Projects',
      mobile: 'Mobile & App Experience',
      contact: 'Contact',
      langBtn: 'EN',
      gameExp: "Game Projects",
      uiExp: "UI Projects"
    },
    profilePage: {
      name: 'Julian D Silva',
      role: 'Frontend & Mobile Developer',
      description: 'I hold a degree in Digital Narratives from Universidad de los Andes (Colombia), with specializations in Film, Video and Animation, and Visual Computing. I am currently enrolled in an intensive program at Vancouver Film School, focused on video game programming, web development, and mobile application development.' +
          '\n' +
          'Over the past two years, I have concentrated my professional growth on software development, strengthening my skills in programming, web development, and mobile development, with a particular interest in building effective digital solutions.' +
          '\n' +
          'I have worked with technologies and languages such as Python, C++, C#, Kotlin, and TypeScript, as well as tools and frameworks including Processing, p5.js, CMD Script, and HLSL. I am currently expanding my knowledge with a primary focus on React, React Native, and Vue, developing modern, efficient applications with a strong emphasis on user experience.' +
          '\n' +
          'Likewise, I had also worked with engines such as Unity and Unreal to work on multiple games of a variety of genres. ' +
          '\n' +
          'I am passionate about merging creativity with technology to craft meaningful digital experiences.',
      tags: ['HTML - 2 years', 'CSS - 2 years', 'JavaScript - 1 year', 'C# - 1 year', 'Vue - 6 months', 'React - 6 months', 'React Native - 6 months', 'C++ - 6 months'],
      catchPhrase: "Expand your horizon",
      identitySentence: "I am a programmer, specialized on frontend and systems development. I had studied more than 10 coding languages, reflected on projects such as games, web pages and mobile apps. My objective is to grow initially as a frontend developer and eventually as a fullstack developer."
    },
    webProjects: {
      sections: [
        {id: '2026', label: '2026'},
        {id: '2025', label: '2025'},
      ],
      clarification: 'These are some of my best Web projects. (Including this web page.)',
      projects: [],
      showingProcessButtonTextFalse: "Show Process",
      showingProcessButtonTextTrue: "Hide Process",
    },
    mobileProjects: {
      sections: [
        {id: '2026', label: '2026'},
        {id: '2025', label: '2025'},
      ],
      clarification: 'Experience in mobile and applications.',
      projects: [],
      showingProcessButtonTextFalse: "Show Process",
      showingProcessButtonTextTrue: "Hide Process",
    },
    contactPage: {
      title: 'Contact info',
      subtitle1: 'From web and mobile applications to interactive experiences, I enjoy developing solutions that blend creativity and technology. Let\'s talk about how we can work together.',
      subtitle2: " \n\n Don't scrap those ideas. Send me a message and let's develop your idea's full potential!",
      labels: {
        email: 'Email',
        phoneCol: 'Phone',
        phoneCad: 'Phone',
        location: 'Location',
        linkedin: 'LinkedIn',
        MainGithub: 'Main GitHub Link (Main projects)',
        SecondaryGithub: 'Secondary Github Link (Self learn and exploration)'
      },
    },
    gameExp: {
      sections: [
        { id: '2025', label: '2025' },
      ],
      clarification: 'Experience in video game development.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Show Process",
      showingProcessButtonTextTrue: "Hide Process",
    },
    uiExp: {
      sections: [
        { id: '2026', label: '2026' },
      ],
      aclaration: 'Experience in UI development.',
      projects: [
      ],
      showingProcessButtonTextFalse: "Show Process",
      showingProcessButtonTextTrue: "Hide Process",
    }
  },
}

interface LangContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
