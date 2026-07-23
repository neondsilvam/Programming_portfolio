import type {Project, HighlightProjects} from '../types'

//Same portfolio
import IMGPort from '../assets/IMGPortfolio/Base.png'
import PrePort1 from '../assets/IMGPortfolio/preproduction1.png'
import PrePort2 from '../assets/IMGPortfolio/preproduction2.png'
import ProPort from '../assets/IMGPortfolio/production.png'
import PostPort from '../assets/IMGPortfolio/postproduction.png'

//Web Experiment
import PreWeb from '../assets/FlappyBirdExperiment/preproduction.png'
import ProWeb from '../assets/FlappyBirdExperiment/production.png'
import PostWeb from '../assets/FlappyBirdExperiment/postproduction.png'

//Villarica
import PreVilla1 from '../assets/Villarica/preprocess1.png'
import PreVilla2 from '../assets/Villarica/preprocess2.png'
import PreVilla3 from '../assets/Villarica/preprocess3.png'
import PreVilla4 from '../assets/Villarica/preprocess4.png'
import ProVilla1 from '../assets/Villarica/process1.png'
import ProVilla2 from '../assets/Villarica/process2.png'
import PostVilla1 from '../assets/Villarica/postprocess1.png'
import PostVilla2 from '../assets/Villarica/postprocess2.png'

//(Des)conectado
import PreDes1 from '../assets/(Des)conectado/predes1.png'
import PreDes2 from '../assets/(Des)conectado/predes2.png'
import PreDes3 from '../assets/(Des)conectado/predes3.png'
import ProDes1 from '../assets/(Des)conectado/prodes1.png'
import ProDes2 from '../assets/(Des)conectado/prodes2.png'
import ProDes3 from '../assets/(Des)conectado/prodes3.png'
import PostDes1 from '../assets/(Des)conectado/postdes1.png'
import PostDes2 from '../assets/(Des)conectado/postdes2.png'
import DesConectado from '../assets/(Des)conectado/(des)conectado.jpg'

//TaskManagerApp
import imgCocktail from '../assets/TaskManagerApp/taskManagerIMG.png'
import preTaskManager from '../assets/TaskManagerApp/preprocess.png'
import proTaskManager from '../assets/TaskManagerApp/process.png'
import postTaskManager from '../assets/TaskManagerApp/postprocess.png'

//CocktailApp
import preCocktail from '../assets/CocktailApp/preprocess.png'
import proCocktail from '../assets/CocktailApp/process.png'
import postCocktail from '../assets/CocktailApp/postprocess.png'

//Deck Building
import DeckIMG from '../assets/DeckUI/DeckUIIMG.png'
import DeckPre from '../assets/DeckUI/preprocess.png'
import DeckPro from '../assets/DeckUI/process.png'
import DeckPost from '../assets/DeckUI/postprocess.png'

//EcoRanger
import PreEco1 from '../assets/EcoRanger/preprocess01.png'
import PreEco2 from '../assets/EcoRanger/preprocess02.png'
import ProEco1 from '../assets/EcoRanger/process01.png'
import ProEco2 from '../assets/EcoRanger/process02.png'
import ProEco3 from '../assets/EcoRanger/process03.png'
import PostEco1 from '../assets/EcoRanger/postprocess01.png'
import PostEco2 from '../assets/EcoRanger/postprocess02.png'

//Rekindled - TODO

export const WebProjectsES: Project[] = [
    {
        id: 'p1',
        title: 'Proyecto base - Portafolio web',
        description:
            'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        "Mi portafolio digital ha pasado por diversas herramientas y procesos: desde crearlo con plataformas existentes como Adobe Express, hasta programarlo con HTML y CSS vainilla en servidores como Glitch.",
                        "Sin embargo, una vez comprendí cómo desarrollarme como programador frontend y comencé a avanzar con React, logré formalizar un proyecto más sólido.",
                        "Este portafolio no solo sirve como base para mostrar mis otros proyectos, sino también para demostrar mi potencial de aprendizaje y crecimiento personal."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: [
                        'El concepto inicial fue generar la estructura de las páginas navegables, luego el sistema de idiomas y finalmente el contenido en sí.',
                        'Era necesario que toda la información estuviera disponible en ambos idiomas, dado que algunos proyectos contaban únicamente con uno de los dos.',
                        'La idea fue crear interfaces y variables reutilizables dentro del módulo de cada sección, con el fin de permitir el cambio de idioma de forma dinámica.',
                        'De igual forma, el contenido requería su propia versión tanto en inglés como en español; y aunque es una lógica repetitiva, al ser ambas descripciones únicas, resultan necesarias.',
                        'Todo esto también dividido por módulo y por proyecto.',
                        'Aclaración: soy consciente de que estos datos deberían estar en un archivo .env, pero en este caso particular no representa un riesgo de seguridad significativo.'
                    ],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: [
                        "En la etapa final, el enfoque estuvo en organizar el contenido, realizar pruebas y verificar que todo estuviera en su lugar.",
                        "Durante esta fase se agregaron sonidos, se refinaron detalles visuales y se aseguró la coherencia general del proyecto.",
                        "Todo con el objetivo de concluir el proyecto de la mejor manera posible.",
                        "Cabe mencionar que este no es el fin del proyecto, ya que continuará evolucionando conforme mejoren mis habilidades."
                    ],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido web y visual es de creación propia, salvo que se indique lo contrario.",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p2',
        title: 'Proyecto web - Plataforma de juego',
        description:
            'Esta página web, desarrollada en 2026 como proyecto de clase, fue construida con React como base. ' +
            'Se conecta directamente con una base de datos mediante el servicio Google Firebase, el cual almacena los datos de las partidas y los registra en la tabla de posiciones. ' +
            'También está vinculada con un juego desarrollado en Unity, el cual es una réplica del clásico "Flappy Bird". ' +
            'Cuenta con registro mediante Google, acceso a metadatos a través de un script en Python, y un panel de administrador controlado desde el propio Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        'Al ser un proyecto de aprendizaje, este no contaba con mucha libertad creativa en cuanto a diseño ni funcionalidad.',
                        'El concepto inicial era simplemente lograr que la página web se conectara con el juego entregado previamente.',
                        'Dentro de este proceso, el objetivo no era solo entender la funcionalidad básica, sino también desarrollar el pensamiento lógico necesario para comprender cómo debían funcionar los sistemas internos.'
                    ],
                    media: [PreWeb],
                },
                production: {
                    title: "La producción en sí",
                    description: [
                        'Durante este proyecto, fue necesario implementar diferentes elementos en distintos lenguajes de código.',
                        'En primer lugar, estaba el juego desarrollado en Unity con C#, exportado como aplicación web mediante GitHub Pages.',
                        'Luego, la plataforma web construida en React con TypeScript, conectada a Firebase desde el backend.',
                        'Finalmente, se desarrolló el módulo de integración entre ambos entornos, permitiendo un flujo de datos continuo y consistente.'
                    ],
                    media: [ProWeb],
                },
                postproduction: {
                    title: "Telemetría",
                    description: [
                        'En la etapa final, el enfoque no fue pulir detalles visuales, sino implementar la telemetría del sistema.',
                        'Esto incluyó las opciones de administrador, reguladas desde Firebase y accesibles únicamente con las credenciales correspondientes (más información en GitHub).',
                        'Este sistema utiliza los datos recolectados para mostrar estadísticas personalizadas del jugador, presentadas como un panel de análisis de datos configurable.'
                    ],
                    media: [PostWeb],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p3',
        title: 'Villarica - P5.js',
        description:
            'Este proyecto fue desarrollado para el semillero de investigación "SENDA" de la Universidad de los Andes, Colombia. ' +
            'Su propósito principal fue construir un relato periodístico expresado a través de una propuesta de código narrativo. ' +
            'El enfoque central era lograr que el usuario experimentara lo mismo que vivieron los sobrevivientes, desde sus distintas perspectivas, en uno de los eventos más trágicos de la historia de Colombia. ' +
            'Está desarrollado en P5.js, un framework de JavaScript orientado a la programación creativa, y apoyado por la librería ml5 para la captura de movimiento en pantalla.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto Inicial",
                    description: [
                        'En síntesis, la tragedia de Villarica es uno de los eventos más violentos y dolorosos de la historia de Colombia.',
                        'Trajo consigo muerte, desplazamiento y abandono, y marca el origen de uno de los grupos armados más peligrosos del país.',
                        'No era un evento que pudiera abordarse a la ligera; requería una investigación profunda y rigurosa.',
                        'Fue necesario comprender los detalles del suceso: quiénes fueron las víctimas, cómo fueron afectadas y cuál fue su experiencia.',
                        'Finalmente, decidí narrar la historia de Ana María Molina, una joven que sobrevivió al bombardeo del pueblo escondiéndose en un hueco bajo su casa.',
                        'La intención era contar su historia con el mayor respeto posible, al mismo tiempo que transmitir el dolor que vivió.',
                        'Durante esta etapa también fue necesario investigar el aspecto técnico: comprender el funcionamiento de la librería P5.js y obtener los recursos necesarios para el proyecto.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Creando la pieza",
                    description: [
                        'Con un plan sólido, el desarrollo se volvió más directo y estructurado.',
                        'Utilizamos P5.js para construir un sistema de escenas que avanza o retrocede según las decisiones del usuario.',
                        'Todo controlado mediante captura de movimiento, que analiza el video en tiempo real e identifica las manos a partir de una serie de puntos de referencia específicos.',
                        'La única excepción es el botón de inicio, controlado por el mouse como medida de seguridad para evitar activaciones prematuras.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentación",
                    description: [
                        'Para presentar la propuesta creativa, se desarrolló un concepto de presentación sólido y coherente.',
                        'El objetivo era demostrar un ciclo narrativo completo: el inicio, el conflicto y el desenlace.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
]

export const WebProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'Base Project - Web Portfolio',
        description:
            'This project was developed in 2026, following multiple previous versions built with different tools. This portfolio was created using React and hosted on GitHub Pages. It reflects my evolution as a developer, as well as my level of organization and personal growth over the years.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Idea",
                    description: [
                        "My digital portfolio has gone through various tools and processes, from building it with existing platforms like Adobe Express, to coding it from scratch with vanilla HTML and CSS on servers like Glitch.",
                        "However, once I understood how to grow as a frontend developer and began advancing with React, I was able to formalize a more structured and professional project.",
                        "This portfolio not only serves as a base to showcase my other projects, but also as a demonstration of my learning potential and personal growth."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "Current Development",
                    description: [
                        'The initial concept was to build the navigable page structure first, then the language system, and finally the content itself.',
                        'All information needed to be available in both languages, since some projects were only documented in one of the two.',
                        'The goal was to create reusable interfaces and variables within each section module, enabling dynamic language switching throughout the app.',
                        'Similarly, the content required its own version in both English and Spanish; and while this involves repetitive logic, both descriptions are unique and therefore necessary.',
                        'This structure was also divided by module and by individual project.',
                        'Note: I am aware that this data should ideally be stored in a .env file, but in this particular case it does not represent a significant security risk.'
                    ],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Polishing the Details",
                    description: [
                        "In the final stage, the focus shifted to organizing content, running tests, and ensuring everything was in its proper place.",
                        "During this phase, sounds were added, visual details were refined, and the overall coherence of the project was reviewed.",
                        "All of this was done with the goal of delivering the project in the best possible state.",
                        "It is worth noting that this is not the end of the project, it will continue to evolve as my skills improve."
                    ],
                    media: [PostPort],
                },
            },
            sectionFooter: "All web and visual content is original and self-authored, unless otherwise stated.",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p2',
        title: 'Web Project - Gaming Platform',
        description:
            'This web application, developed in 2026 as a class project, with the purpose of fully learning React framework.' +
            'It connects directly to a database through Google Firebase, which stores gameplay data and registers it on the leaderboard. ' +
            'It is also integrated with a Unity-based game, a recreation of the classic "Flappy Bird." ' +
            'The platform features Google authentication, metadata access via a Python script, and an admin panel managed through Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Idea",
                    description: [
                        'As a learning project, this one had limited creative freedom in terms of design and functionality.',
                        'The initial goal was simply to establish a working connection between the web platform and the previously developed game.',
                        'Beyond understanding the basic functionality, the process was also about developing the logical thinking required to understand how the internal systems should work together.'
                    ],
                    media: [PreWeb],
                },
                production: {
                    title: "The Development Process",
                    description: [
                        'Throughout this project, it was necessary to implement different elements across multiple coding languages.',
                        'First, there was the Unity game written in C#, exported as a web application and deployed via GitHub Pages.',
                        'Then came the web platform, built with React and TypeScript, connected to Firebase on the backend.',
                        'Finally, an integration module was developed to bridge both environments, enabling a seamless and consistent flow of data between them.'
                    ],
                    media: [ProWeb],
                },
                postproduction: {
                    title: "Telemetry",
                    description: [
                        'In the final stage, the focus was not on polishing visual details, but on implementing the system telemetry.',
                        'This included the admin panel features, regulated through Firebase and accessible only with the appropriate credentials (more details available on GitHub).',
                        'The system uses the collected data to display personalized player statistics, presented as a configurable data analytics dashboard.'
                    ],
                    media: [PostWeb],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p3',
        title: 'Villarica - P5.js',
        description:
            'This project was developed for the "SENDA" research group at Universidad de los Andes, Colombia. ' +
            'Its main purpose was to build a journalistic narrative expressed through a creative coding piece. ' +
            'The central focus was to make the user feel what the survivors experienced, from their different perspectives, during one of the most tragic events in Colombian history. ' +
            'It was built using P5.js, a JavaScript framework focused on creative programming, and supported by the ml5 library for on-screen motion capture.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concept",
                    description: [
                        'In brief, the tragedy of Villarica is one of the most violent and painful events in Colombian history.',
                        'It brought death, forced displacement, and abandonment; and marks the origin of one of the most dangerous armed groups in the country.',
                        'This was not a subject that could be approached lightly; it required deep and rigorous research.',
                        'It was necessary to understand the details of the event: who the victims were, how they were affected, and what their experience was like.',
                        'Ultimately, I chose to tell the story of Ana María Molina, a young woman who survived the bombing of her village by hiding in a hollow beneath her home.',
                        'The intention was to tell her story with the utmost respect, while also conveying the pain and trauma she endured.',
                        'This stage also required technical research: understanding how the P5.js library works and gathering the resources needed for the project.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Building the Piece",
                    description: [
                        'With a solid plan in place, the development process became more direct and structured.',
                        'We used P5.js to build a scene system that advances or rewinds based on the user\'s decisions.',
                        'Everything is controlled through motion capture, which analyzes the video feed in real time and identifies the user\'s hands through a set of specific reference points.',
                        'The only exception is the start button, which is controlled by the mouse as a safeguard to prevent unintended early activation.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentation",
                    description: [
                        'To present the creative proposal, a solid and coherent presentation concept was developed.',
                        'The goal was to demonstrate a complete narrative cycle: the beginning, the conflict, and the resolution.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
]

export const MobileProjectsES: Project[] = [
    {
        id: 'p1',
        title: '(Des)Conectado - Un juego fuera del dispositivo',
        description:
            'Este proyecto fue desarrollado en colaboración con la Universidad de los Andes. ' +
            'Presenta el DEMO de una novela gráfica interactiva para dispositivos móviles Android, centrada en Ashley, una joven con nomofobia que se pierde en un bosque mientras su familia acampa y debe encontrar el camino de regreso. ' +
            'Este proyecto representa mi primer acercamiento profesional a Unity y mi inicio formal en el área de programación, ya que con anterioridad únicamente había realizado ejercicios menores. \n' +
            'Dentro del siguiente link se puede descagar el APK del DEMO para dispositivos android. (Toca dar permiso para instalar APK de Google Drive.)',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DesConectado,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: 'https://drive.google.com/file/d/1n4myrYNwOT26SZzVxjacrb08SkOo9OlP/view?usp=sharing',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Proceso de creación y diseño",
                    description: [
                        'El concepto inicial surgió de la idea de crear un juego que motivara a las personas a reducir la nomofobia, también conocida como el miedo a estar desconectado del mundo digital.',
                        'Esto bajo el objetivo de fomentar hábitos responsables en el consumo de aplicaciones y tecnología.',
                        'Con esto en mente, la preproducción se enfocó en construir la narrativa, investigar sobre los sistemas necesarios y generar un diseño sólido.',
                        'En cuanto a la narrativa, el trabajo inicial consistió en definir los personajes, especialmente la protagonista: sus motivaciones, sus ambiciones y la manera de materializarlas.',
                        'La investigación se orientó hacia la exploración de C#, el entorno de Unity y su adaptación para dispositivos móviles.',
                        'Finalmente, se procedió a generar el concepto de diseño visual, construir el wireframe y establecer la base del frontend de la aplicación.'
                    ],
                    media: [PreDes1, PreDes2, PreDes3],
                },
                production: {
                    title: "Producción de la aplicación",
                    description: [
                        'Como único desarrollador de este proyecto, fui responsable de comprender y crear todos los aspectos del juego.',
                        'En cuanto al arte, mediante el uso de referentes reales y la construcción de elementos combinados, logré generar paneles sólidos para la narrativa, siguiendo fielmente el estilo de una novela gráfica.',
                        'Esto incluye todos los personajes, los objetos interactivos, la interfaz de usuario, los fondos y las texturas.',
                        'Desde el ámbito del código, el trabajo se centró principalmente en el control de la interfaz y la narrativa, gestionando el avance de los eventos a través de puntos específicos dentro del nivel.',
                        'Los aspectos más complejos se relacionaron con la persistencia de datos mediante PlayerPrefs, los minijuegos, cada uno con su mecánica única, y el sistema general de control del juego.',
                        'Como característica adicional, la aplicación contaba con un sistema que leía el tiempo de uso del teléfono y lo empleaba como penalización para otorgar una segunda oportunidad al jugador.',
                        'El resto de los detalles consistió principalmente en implementar el audio, las transiciones entre escenas y las opciones de configuración.',
                        'Este proceso no fue lineal; requirió múltiples prototipos y versiones hasta alcanzar el demo actual.'
                    ],
                    media: [ProDes1, ProDes2, ProDes3],
                },
                postproduction: {
                    title: "Playtest y correcciones",
                    description: [
                        'Una vez finalizado el demo, se inició la fase de pruebas para observar la reacción de los usuarios.',
                        'Durante este proceso identifiqué un error de diseño: no realicé pruebas durante la producción misma.',
                        'Esta experiencia me permitió entender que era necesaria una mayor investigación para comprender al usuario objetivo, además de mejorar la optimización de varios sistemas.',
                        'Dado que este proyecto fue desarrollado en colaboración con la universidad, no me está permitido continuarlo por el momento.',
                        'No obstante, esta experiencia me dejó clara mi capacidad de desarrollo y la dirección hacia la cual puedo orientarla.',
                        'Pueden probar el demo escaneando el código QR o accediendo al enlace del proyecto.'
                    ],
                    media: [PostDes1, PostDes2],
                },
            },
            sectionFooter: "Agradecimientos especiales a la Universidad de los Andes por la colaboración.",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p2',
        title: 'Lista de Tareas',
        description: 'Este es un proyecto de menor escala desarrollado con Android Studio. ' +
            'Replica la lógica de una lista de tareas con almacenamiento en una base de datos Firebase, la cual es responsiva según el usuario y permite compartir tareas entre distintos usuarios. ' +
            'El propósito principal fue de aprendizaje, tanto con Android Studio como entorno de desarrollo como con Kotlin como lenguaje de programación.',
        isProjectDeployed: true,
        iframeSrc: 'https://www.youtube.com/embed/J2kiRcF9dIU?si=YJMyYrTy2aoj2F_t',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Task_manager_App_JDS",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del proyecto",
                    description: [
                        'Este era un proyecto de alcance acotado, al cual consistia en expandir una base mas alla de su funcionamiento inicial.',
                        'Primero se definió el diseño, estableciendo que la aplicación requería una página de usuario, un menú principal con función de reciclaje de vistas, una plantilla para editar tareas y otra para visualizarlas.',
                        'Esto, sumado al aprendizaje de Kotlin y del entorno de desarrollo.'
                    ],
                    media: [preTaskManager],
                },
                production: {
                    title: "Desarrollo del proyecto",
                    description: [
                        'La experiencia de desarrollarlo me brindó una perspectiva clara sobre los sistemas de gestión de tareas dentro de un dispositivo móvil.',
                        'Principalmente, aprendí a utilizar interfaces para generar una base capaz de registrar y mostrar todas las tareas sin sobrecargar la memoria del dispositivo.',
                        'Además, fue la primera vez que integré una aplicación con Firebase, lo que me permitió utilizar una base de datos compartida entre todos los usuarios.',
                        'En el backend, la información almacenada incluía el usuario propietario, los usuarios invitados, la tarea, las subtareas y su estado de completitud.'
                    ],
                    media: [proTaskManager],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: [
                        'Dentro del desarrollo final, las pruebas son un paso fundamental, dado que es necesario considerar la diversidad de hardware existente en la actualidad.',
                        'Fue necesario probar la aplicación en múltiples dispositivos para determinar el límite de compatibilidad, ajustar la resolución según cada pantalla, verificar la consistencia de los colores y evaluar otros aspectos relevantes.',
                        'Esto, además de comprobar que el diseño fuera adecuado y no generara conflictos con la experiencia del usuario.'
                    ],
                    media: [postTaskManager],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to prepare',
        description:
            'Este es un proyecto desarrollado con React Native, que consiste en una aplicación web con acceso a una amplia variedad de cócteles para preparar, indicando los ingredientes, los pasos y el tiempo necesario para su elaboración. ' +
            'El proyecto se conecta con Firebase para verificar que los usuarios sean mayores de edad, accede a una API gratuita con información detallada de cada cóctel e incluso utiliza el acelerómetro del dispositivo para simular el proceso de mezcla de la bebida.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: imgCocktail,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/Cocktail-app",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Diseño y planeación",
                    description: [
                        'La idea inicial era aprovechar la base de datos disponible para generar una aplicación entretenida y útil para el usuario.',
                        'El enfoque se dirigió principalmente hacia usuarios mayores de edad que quisieran tener a la mano una guía para preparar bebidas en fiestas o eventos sociales.',
                        'La interfaz presenta un estilo sencillo e intuitivo, que compacta la información de manera eficiente sin excluir a ningún tipo de usuario.'
                    ],
                    media: [preCocktail],
                },
                production: {
                    title: "Desarrollo del proyecto",
                    description: [
                        'Al estar desarrollado con React Native, la lógica del proyecto sigue los mismos principios del framework.',
                        'Esta consiste en crear pequeños módulos que dan forma a la aplicación en su conjunto.',
                        'A esto se suma el sistema de navegación nativo del framework, que permite crear pestañas para orientar al usuario de manera más clara y eficiente.',
                        'En este punto ya contaba con experiencia previa trabajando con JavaScript y React como framework, lo que facilitó considerablemente el proceso de desarrollo.'
                    ],
                    media: [proCocktail],
                },
                postproduction: {
                    title: "Refinamiento del proyecto",
                    description: [
                        'Este proyecto aún no está finalizado, por lo que quedan detalles pendientes por resolver.',
                        'Sin embargo, existen aspectos que también valdrá la pena refactorizar, como el uso de módulos internos o la integración de contextos para evitar el prop drilling dentro del programa.'
                    ],
                    media: [postCocktail],
                },
            },
            sectionFooter:'Hay un prototipo de la app en el siguiente link:',
            footerHasLink: true,
            footerLink: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
        }
    },
]

export const MobileProjectsEN: Project[] = [
    {
        id: 'p1',
        title: '(Dis)Connected - An Off-Device Game',
        description:
            'This project was developed in collaboration with Universidad de los Andes. ' +
            'It presents the DEMO of an interactive graphic novel for Android mobile devices, centered on Ashley, a young woman with nomophobia who gets lost in a forest while her family goes camping and must find her way back. ' +
            'This project represents my first professional approach to Unity and my formal entry into software development, as I had previously only completed minor exercises.' +
            '\n On the next link there is available the APK Demo to download from android. (The download is from google drive, so you need to use an android device that allow to install external apps.)',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DesConectado,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: 'https://drive.google.com/file/d/1n4myrYNwOT26SZzVxjacrb08SkOo9OlP/view?usp=sharing',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Creation and Design Process",
                    description: [
                        'The initial concept emerged from the idea of creating a game that would motivate people to reduce nomophobia, the fear of being disconnected from the digital world.',
                        'This was guided by the objective of encouraging responsible consumption habits around applications and technology.',
                        'With this in mind, pre-production focused on building the narrative, researching the necessary systems, and establishing a solid design foundation.',
                        'Regarding the narrative, early work involved defining the characters; especially the protagonist, including her motivations, ambitions, and the means to achieve them.',
                        'Research was directed toward exploring C#, the Unity environment, and its adaptation for mobile devices.',
                        'Finally, the visual design concept was developed, the wireframe was constructed, and the frontend of the application was laid out.'
                    ],
                    media: [PreDes1, PreDes2, PreDes3],
                },
                production: {
                    title: "Application Production",
                    description: [
                        'As the sole developer of this project, I was responsible for understanding and creating every aspect of the game.',
                        'Regarding the art, by using real references and combining design elements, I was able to generate solid panels for the narrative in the style of a traditional graphic novel.',
                        'This includes all characters, interactive objects, the user interface, backgrounds, and textures.',
                        'On the code side, the work focused primarily on UI and narrative control, managing event progression through specific trigger points within each level.',
                        'The most complex aspects involved persistent data management using PlayerPrefs, the minigames, each with its own unique mechanic, and the overall game control system.',
                        'As an additional feature, the application included a system that tracked the phone\'s screen-on time and used it as a penalty mechanic to grant the player a second chance.',
                        'The remaining details consisted primarily of implementing audio, scene transitions, and configuration options.',
                        'This process was not linear; it required multiple prototypes and iterations to arrive at the current demo.',
                    ],
                    media: [ProDes1, ProDes2, ProDes3],
                },
                postproduction: {
                    title: "Playtesting and Fixes",
                    description: [
                        'Once the demo was complete, the testing phase began to observe how users interacted with it.',
                        'During this process, I identified a design mistake: I had not conducted tests throughout the production phase itself.',
                        'This experience made it clear that further research was needed to better understand the target user, in addition to improving the optimization of several systems.',
                        'Since this project was developed in collaboration with the university, I am not permitted to continue it at this time.',
                        'Nevertheless, this experience gave me a clear sense of my development potential and the direction in which I can channel it.',
                        'You can try the demo by scanning the QR code or accessing the project link.'
                    ],
                    media: [PostDes1, PostDes2],
                },
            },
            sectionFooter: "Special thanks to Universidad de los Andes for the collaboration.",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p2',
        title: 'Task Manager App',
        description: 'This is a smaller-scale project built with Android Studio. ' +
            'It replicates the logic of a task list application with storage in a Firebase database, which is user-responsive and allows tasks to be shared between different users. ' +
            'The main purpose was learning both, Android Studio as a development environment and Kotlin as a programming language.',
        isProjectDeployed: true,
        iframeSrc: 'https://www.youtube.com/embed/J2kiRcF9dIU?si=YJMyYrTy2aoj2F_t',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Task_manager_App_JDS",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Project Concept",
                    description: [
                        'This was a project with a limited scope, to which we wanted to add a solid foundation from the very beginning.',
                        'The first step was to define the design, establishing that the application required a user page, a main menu with view recycling functionality, a template for editing tasks, and another for displaying them.',
                        'This was accompanied by the goal of learning Kotlin and the development environment.'
                    ],
                    media: [preTaskManager],
                },
                production: {
                    title: "Development",
                    description: [
                        'The development experience gave me a clear perspective on task management systems within a mobile device.',
                        'In particular, I learned how to use interfaces to build a foundation capable of registering and displaying all tasks without overloading the device\'s memory.',
                        'Additionally, this was the first time I integrated an application with Firebase, which allowed me to use a shared database across all users.',
                        'On the backend, the stored information included the owner user, invited users, the task itself, subtasks, and their completion status.'
                    ],
                    media: [proTaskManager],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        'Testing is a fundamental step in the final stage of development, given the wide variety of hardware available today.',
                        'It was necessary to test the application on multiple devices to determine compatibility limits, adjust resolution per screen, verify color consistency, and evaluate other relevant aspects.',
                        'This also included confirming that the design was appropriate and did not create conflicts with the user experience.'
                    ],
                    media: [postTaskManager],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: '',
        }
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to Prepare',
        description:
            'This is a project developed with React Native, consisting of a web application that provides access to a wide variety of cocktails to prepare, including ingredients, preparation steps, and the time required for each. ' +
            'The project connects with Firebase to verify that users are of legal drinking age, accesses a free API with detailed information on each cocktail, and even uses the device\'s accelerometer to simulate the drink mixing process.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: imgCocktail,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/Cocktail-app",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Design and Planning",
                    description: [
                        'The initial idea was to leverage the available database to build an entertaining and useful application for the user.',
                        'The focus was directed primarily toward adult users who wanted a handy guide for preparing drinks at parties or social events.',
                        'The interface features a simple and intuitive style that presents information compactly and efficiently without excluding any type of user.'
                    ],
                    media: [preCocktail],
                },
                production: {
                    title: "Project Development",
                    description: [
                        'Being built with React Native, the project\'s logic follows the same principles as the framework.',
                        'This consists of creating small modules that collectively shape the application.',
                        'This is complemented by the framework\'s native navigation system, which allows the creation of tabs to guide users in a clear and efficient manner.',
                        'At this stage, I already had prior experience working with JavaScript and React as a framework, which considerably streamlined the development process.'
                    ],
                    media: [proCocktail],
                },
                postproduction: {
                    title: "Project Refinement",
                    description: [
                        'This project is not yet complete, so there are still details pending resolution.',
                        'However, there are also aspects worth refactoring, such as the use of internal modules or the integration of contexts to avoid prop drilling throughout the application.'
                    ],
                    media: [postCocktail],
                },
            },
            sectionFooter:'Also to test an early prototype on here:',
            footerHasLink: true,
            footerLink: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
        }
    },
]

export const GameExpES: Project[] = [
    {
        id: 'p1',
        title: '(Des)Conectado - Un juego fuera del dispositivo',
        description:
            'Este proyecto fue desarrollado en colaboración con la Universidad de los Andes. ' +
            'Presenta el DEMO de una novela gráfica interactiva para dispositivos móviles Android, centrada en Ashley, una joven con nomofobia que se pierde en un bosque mientras su familia acampa y debe encontrar el camino de regreso. ' +
            'Este proyecto representa mi primer acercamiento profesional a Unity y mi inicio formal en el área de programación, ya que con anterioridad únicamente había realizado ejercicios menores. ' +
            'Puedes descargar un DEMO del projecto en formato APK para dispositivos Android (Para esto es necesario autorizar el dispositivo para instalar aplicaciones externas.)',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DesConectado,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: 'https://drive.google.com/file/d/1n4myrYNwOT26SZzVxjacrb08SkOo9OlP/view?usp=sharing',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Proceso de creación y diseño",
                    description: [
                        'El concepto inicial surgió de la idea de crear un juego que motivara a las personas a reducir la nomofobia, también conocida como el miedo a estar desconectado del mundo digital.',
                        'Esto bajo el objetivo de fomentar hábitos responsables en el consumo de aplicaciones y tecnología.',
                        'Con esto en mente, la preproducción se enfocó en construir la narrativa, investigar sobre los sistemas necesarios y generar un diseño sólido.',
                        'En cuanto a la narrativa, el trabajo inicial consistió en definir los personajes, especialmente la protagonista: sus motivaciones, sus ambiciones y la manera de materializarlas.',
                        'La investigación se orientó hacia la exploración de C#, el entorno de Unity y su adaptación para dispositivos móviles.',
                        'Finalmente, se procedió a generar el concepto de diseño visual, construir el wireframe y establecer la base del frontend de la aplicación.'
                    ],
                    media: [PreDes1, PreDes2, PreDes3],
                },
                production: {
                    title: "Producción de la aplicación",
                    description: [
                        'Como único desarrollador de este proyecto, fui responsable de comprender y crear todos los aspectos del juego.',
                        'En cuanto al arte, mediante el uso de referentes reales y la construcción de elementos combinados, logré generar paneles sólidos para la narrativa, siguiendo fielmente el estilo de una novela gráfica.',
                        'Esto incluye todos los personajes, los objetos interactivos, la interfaz de usuario, los fondos y las texturas.',
                        'Desde el ámbito del código, el trabajo se centró principalmente en el control de la interfaz y la narrativa, gestionando el avance de los eventos a través de puntos específicos dentro del nivel.',
                        'Los aspectos más complejos se relacionaron con la persistencia de datos mediante PlayerPrefs, los minijuegos, cada uno con su mecánica única, y el sistema general de control del juego.',
                        'Como característica adicional, la aplicación contaba con un sistema que leía el tiempo de uso del teléfono y lo empleaba como penalización para otorgar una segunda oportunidad al jugador.',
                        'El resto de los detalles consistió principalmente en implementar el audio, las transiciones entre escenas y las opciones de configuración.',
                        'Este proceso no fue lineal; requirió múltiples prototipos y versiones hasta alcanzar el demo actual.'
                    ],
                    media: [ProDes1, ProDes2, ProDes3],
                },
                postproduction: {
                    title: "Playtest y correcciones",
                    description: [
                        'Una vez finalizado el demo, se inició la fase de pruebas para observar la reacción de los usuarios.',
                        'Durante este proceso identifiqué un error de diseño: no realicé pruebas durante la producción misma.',
                        'Esta experiencia me permitió entender que era necesaria una mayor investigación para comprender al usuario objetivo, además de mejorar la optimización de varios sistemas.',
                        'Dado que este proyecto fue desarrollado en colaboración con la universidad, no me está permitido continuarlo por el momento.',
                        'No obstante, esta experiencia me dejó clara mi capacidad de desarrollo y la dirección hacia la cual puedo orientarla. ',
                        'Pueden probar el demo escaneando el código QR o accediendo al enlace del proyecto (Es requerido autorizar aplicaciones externas).'
                    ],
                    media: [PostDes1, PostDes2],
                },
            },
            sectionFooter: "Agradecimientos especiales a la Universidad de los Andes por la colaboración.",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p2',
        title: 'Villarica - P5.js',
        description:
            'Este proyecto fue desarrollado para el semillero de investigación "SENDA" de la Universidad de los Andes, Colombia. ' +
            'Su propósito principal fue construir un relato periodístico expresado a través de una propuesta de código narrativo. ' +
            'El enfoque central era lograr que el usuario experimentara lo mismo que vivieron los sobrevivientes, desde sus distintas perspectivas, en uno de los eventos más trágicos de la historia de Colombia. ' +
            'Está desarrollado en P5.js, un framework de JavaScript orientado a la programación creativa, y apoyado por la librería ml5 para la captura de movimiento en pantalla.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto Inicial",
                    description: [
                        'En síntesis, la tragedia de Villarica es uno de los eventos más violentos y dolorosos de la historia de Colombia.',
                        'Trajo consigo muerte, desplazamiento y abandono, y marca el origen de uno de los grupos armados más peligrosos del país.',
                        'No era un evento que pudiera abordarse a la ligera; requería una investigación profunda y rigurosa.',
                        'Fue necesario comprender los detalles del suceso: quiénes fueron las víctimas, cómo fueron afectadas y cuál fue su experiencia.',
                        'Finalmente, decidí narrar la historia de Ana María Molina, una joven que sobrevivió al bombardeo del pueblo escondiéndose en un hueco bajo su casa.',
                        'La intención era contar su historia con el mayor respeto posible, al mismo tiempo que transmitir el dolor que vivió.',
                        'Durante esta etapa también fue necesario investigar el aspecto técnico: comprender el funcionamiento de la librería P5.js y obtener los recursos necesarios para el proyecto.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Creando la pieza",
                    description: [
                        'Con un plan sólido, el desarrollo se volvió más directo y estructurado.',
                        'Utilizamos P5.js para construir un sistema de escenas que avanza o retrocede según las decisiones del usuario.',
                        'Todo controlado mediante captura de movimiento, que analiza el video en tiempo real e identifica las manos a partir de una serie de puntos de referencia específicos.',
                        'La única excepción es el botón de inicio, controlado por el mouse como medida de seguridad para evitar activaciones prematuras.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentación",
                    description: [
                        'Para presentar la propuesta creativa, se desarrolló un concepto de presentación sólido y coherente.',
                        'El objetivo era demostrar un ciclo narrativo completo: el inicio, el conflicto y el desenlace.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p3',
        title: 'EcoRanger',
        description:
            'EcoRanger es un proyecto desarrollado en Unity como entrega de mitad de programa del curso de Programación para Juegos, Web y Móvil de la Vancouver Film School. ' +
            'Fue desarrollado en equipo de 5 personas, donde desempeñé el rol de uno de los dos programadores del proyecto. ' +
            'EcoRanger es un shooter 3D de conflicto ambiental que presenta a Ekko, un Ranger espacial enviado a la Tierra con la misión de impedir que los peligrosos Eco Breakers la destruyan mediante una contaminación masiva. ' +
            'Durante el juego, Ekko deberá resistir durante 5 minutos hasta que lleguen los refuerzos, utilizando su pistola teletransportadora para eliminar los distintos tipos de basura presentes en el área. ' +
            'En este proyecto, estuve a cargo del desarrollo de sistemas generales de juego, así como de la programación de máquinas de estados e inteligencia artificial. ' +
            'La duración total del proyecto fue de 2 meses, distribuidos en 3 semanas para prototipo, 3 para Alpha, 2 para Beta, y una semana final para pulir los detalles del proyecto. ' +
            'Revisa el enlace para descargar el juego (PC):',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: PostEco1,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://drive.google.com/file/d/1GoQA0IisxHC7e2BwZPhe3x2339Xcieno/view?usp=sharing",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Diseño inicial y prototipo",
                    description: [
                        'Durante las primeras 3 semanas, cada área del equipo debía tener definido su concepto inicial. Desde mi rol como programador, me correspondía diseñar el sistema de interacción entre el jugador y los enemigos.',
                        'Con esto en mente, mientras el resto del equipo se encargaba del arte, la narrativa y el diseño de mecánicas, me enfoqué en establecer una arquitectura de código eficiente y ordenada.',
                        'Mi lista de tareas iniciales consistía en planear el sistema de inputs del jugador, definir los estados de los enemigos y sus acciones, y establecer las condiciones de victoria y derrota.',
                        'Dado que el siguiente hito exigía tener el 80% de las funciones básicas implementadas, prioricé la solidez sobre la complejidad.',
                        'Me enfoqué en desarrollar un enemigo funcional y concreto, capaz de demostrar las funciones vitales del proyecto.'
                    ],
                    media: [PreEco1, PreEco2],
                },
                production: {
                    title: "Alpha y Beta",
                    description: [
                        'Durante esta etapa, el desarrollo del proyecto se centró principalmente en mejorar y refinar sus distintos componentes.',
                        'Mientras el artista creaba los assets y las animaciones, el diseñador de niveles construía el escenario y la directora del proyecto gestionaba las tareas del equipo; el co-programador y yo nos enfocamos en perfeccionar los sistemas a cargo de cada uno.',
                        'Mientras mi compañero trabajaba en el jugador y su perspectiva, yo desarrollé un sistema de ataque más robusto para los enemigos e implementé otros sistemas generales del juego.',
                        'En cuanto a los enemigos, agregué un sistema de evasión de obstáculos, modifiqué la trayectoria de ataque para que estimara matemáticamente la posición del jugador y le disparara con una trayectoria en órbita, implementé el sistema de "muerte", integré sus animaciones y mejoré su movimiento general.',
                        'Dado que el proyecto contemplaba un único tipo de enemigo, nos enfocamos en pulirlo lo mejor posible.',
                        'En lo que respecta a los sistemas generales, me concentré en crear un Game Manager, un spawner de enemigos, un tracker del nivel de contaminación en el escenario y un sistema de notificaciones para la interfaz de usuario del jugador.'
                    ],
                    media: [ProEco1, ProEco2, ProEco3],
                },
                postproduction: {
                    title: "Entrega final y presentación",
                    description: [
                        'El proyecto final presenta un juego completo y bien estructurado, apto para una experiencia de 5 minutos.',
                        'El jugador vive una experiencia frenética y emocionante, respaldada por un comportamiento de los enemigos con un nivel de reto adecuado para mantener la tensión del juego.',
                        'Durante las últimas dos semanas, también nos dedicamos a revisar bugs finales, realizar una revisión general del código y optimizarlo en la medida de lo posible, cerrando así el ciclo de crecimiento de este proyecto.',
                        'Asimismo, llevamos a cabo el post mortem correspondiente, donde identificamos áreas de mejora. Sin embargo, el objetivo de estos proyectos también es aprender y crecer, con miras a desarrollar experiencias de mayor calidad en el futuro.',
                        'ACLARACIÓN: El repositorio de GitHub es privado, por lo que no es posible compartirlo directamente, pero en el enlace de arriba se encuentra la build más reciente del proyecto.'
                    ],
                    media: [PostEco1, PostEco2],
                },
            },
            sectionFooter: 'Agradecimientos especiales a VFS y a Kizuna Interactive por su apoyo en el desarrollo de este proyecto.',
            footerHasLink: false,
            footerLink: ""
        }
    },
]

export const GameExpEN: Project[] = [
    {
        id: 'p1',
        title: '(Dis)Connected - An Off-Device Game',
        description:
            'This project was developed in collaboration with Universidad de los Andes. ' +
            'It presents the DEMO of an interactive graphic novel for Android mobile devices, centered on Ashley, a young woman with nomophobia who gets lost in a forest while her family goes camping and must find her way back. ' +
            'This project represents my first professional approach to Unity and my formal entry into software development, as I had previously only completed minor exercises.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DesConectado,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: 'https://drive.google.com/file/d/1n4myrYNwOT26SZzVxjacrb08SkOo9OlP/view?usp=sharing',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Creation and Design Process",
                    description: [
                        'The initial concept emerged from the idea of creating a game that would motivate people to reduce nomophobia, the fear of being disconnected from the digital world.',
                        'This was guided by the objective of encouraging responsible consumption habits around applications and technology.',
                        'With this in mind, pre-production focused on building the narrative, researching the necessary systems, and establishing a solid design foundation.',
                        'Regarding the narrative, early work involved defining the characters; especially the protagonist, including her motivations, ambitions, and the means to achieve them.',
                        'Research was directed toward exploring C#, the Unity environment, and its adaptation for mobile devices.',
                        'Finally, the visual design concept was developed, the wireframe was constructed, and the frontend of the application was laid out.'
                    ],
                    media: [PreDes1, PreDes2, PreDes3],
                },
                production: {
                    title: "Application Production",
                    description: [
                        'As the sole developer of this project, I was responsible for understanding and creating every aspect of the game.',
                        'Regarding the art, by using real references and combining design elements, I was able to generate solid panels for the narrative in the style of a traditional graphic novel.',
                        'This includes all characters, interactive objects, the user interface, backgrounds, and textures.',
                        'On the code side, the work focused primarily on UI and narrative control, managing event progression through specific trigger points within each level.',
                        'The most complex aspects involved persistent data management using PlayerPrefs, the minigames, each with its own unique mechanic, and the overall game control system.',
                        'As an additional feature, the application included a system that tracked the phone\'s screen-on time and used it as a penalty mechanic to grant the player a second chance.',
                        'The remaining details consisted primarily of implementing audio, scene transitions, and configuration options.',
                        'This process was not linear; it required multiple prototypes and iterations to arrive at the current demo.',
                    ],
                    media: [ProDes1, ProDes2, ProDes3],
                },
                postproduction: {
                    title: "Playtesting and Fixes",
                    description: [
                        'Once the demo was complete, the testing phase began to observe how users interacted with it.',
                        'During this process, I identified a design mistake: I had not conducted tests throughout the production phase itself.',
                        'This experience made it clear that further research was needed to better understand the target user, in addition to improving the optimization of several systems.',
                        'Since this project was developed in collaboration with the university, I am not permitted to continue it at this time.',
                        'Nevertheless, this experience gave me a clear sense of my development potential and the direction in which I can channel it.',
                        'You can try the demo by scanning the QR code or accessing the project link. (It is required to allow external apps to install in order to test it.)'
                    ],
                    media: [PostDes1, PostDes2],
                },
            },
            sectionFooter: "Special thanks to Universidad de los Andes for the collaboration.",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p2',
        title: 'Villarica - P5.js',
        description:
            'This project was developed for the "SENDA" research group at Universidad de los Andes, Colombia. ' +
            'Its main purpose was to build a journalistic narrative expressed through a creative coding piece. ' +
            'The central focus was to make the user feel what the survivors experienced, from their different perspectives, during one of the most tragic events in Colombian history. ' +
            'It was built using P5.js, a JavaScript framework focused on creative programming, and supported by the ml5 library for on-screen motion capture.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concept",
                    description: [
                        'In brief, the tragedy of Villarica is one of the most violent and painful events in Colombian history.',
                        'It brought death, forced displacement, and abandonment; and marks the origin of one of the most dangerous armed groups in the country.',
                        'This was not a subject that could be approached lightly; it required deep and rigorous research.',
                        'It was necessary to understand the details of the event: who the victims were, how they were affected, and what their experience was like.',
                        'Ultimately, I chose to tell the story of Ana María Molina, a young woman who survived the bombing of her village by hiding in a hollow beneath her home.',
                        'The intention was to tell her story with the utmost respect, while also conveying the pain and trauma she endured.',
                        'This stage also required technical research: understanding how the P5.js library works and gathering the resources needed for the project.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Building the Piece",
                    description: [
                        'With a solid plan in place, the development process became more direct and structured.',
                        'We used P5.js to build a scene system that advances or rewinds based on the user\'s decisions.',
                        'Everything is controlled through motion capture, which analyzes the video feed in real time and identifies the user\'s hands through a set of specific reference points.',
                        'The only exception is the start button, which is controlled by the mouse as a safeguard to prevent unintended early activation.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentation",
                    description: [
                        'To present the creative proposal, a solid and coherent presentation concept was developed.',
                        'The goal was to demonstrate a complete narrative cycle: the beginning, the conflict, and the resolution.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p3',
        title: 'EcoRanger',
        description:
            'EcoRanger is a project developed in Unity as a mid-program deliverable for the Game, Web & Mobile Programming course at Vancouver Film School. ' +
            'It was developed by a team of 5, where I served as one of the two programmers on the project. ' +
            'EcoRanger is a 3D environmental conflict shooter featuring Ekko, a space Ranger sent to Earth on a mission to prevent the dangerous Eco Breakers from destroying it through massive pollution. ' +
            'Throughout the game, Ekko must hold out for 5 minutes until reinforcements arrive, using a teleportation gun to eliminate different types of waste scattered across the area. ' +
            'In this project, I was responsible for the development of general game systems as well as the programming of state machines and artificial intelligence. ' +
            'The total duration of the project was 2 months, distributed across 3 weeks for the prototype, 3 for Alpha, 2 for Beta, and a final week dedicated to polishing the project. ' +
            'Check the link bellow to download the game (PC):',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: PostEco1,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://drive.google.com/file/d/1GoQA0IisxHC7e2BwZPhe3x2339Xcieno/view?usp=sharing",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Design and Prototype",
                    description: [
                        'During the first 3 weeks, each area of the team was expected to have its initial concept defined. In my role as programmer, I was responsible for designing the interaction system between the player and the enemies.',
                        'With this in mind, while the rest of the team handled art, narrative, and mechanic design, I focused on establishing an efficient and well-structured code architecture.',
                        'My initial task list primarily consisted of planning the player input system, defining enemy states and their corresponding actions, and establishing the win and lose conditions.',
                        'Since the next milestone required 80% of the core features to be implemented, I prioritized solidity over complexity.',
                        'I focused on developing a concrete, functional enemy capable of demonstrating the project\'s core features.'
                    ],
                    media: [PreEco1, PreEco2],
                },
                production: {
                    title: "Alpha and Beta",
                    description: [
                        'During this stage, the development of the project focused primarily on improving and refining its various components.',
                        'While the artist created assets and animations, the level designer built the environment, and the project director managed the team\'s tasks; my co-programmer and I focused on perfecting the systems each of us was responsible for.',
                        'While my teammate worked on the player and their perspective, I developed a more robust attack system for the enemies and implemented additional general game systems.',
                        'Regarding the enemies, I added an obstacle avoidance system, modified the attack trajectory to mathematically estimate the player\'s position and fire along an orbital path, implemented the enemy "death" system, integrated their animations, and improved their overall movement.',
                        'Since the project featured only one enemy type, we focused on polishing it as thoroughly as possible.',
                        'On the general systems side, I concentrated on building a Game Manager, an enemy spawner, a pollution level tracker for the environment, and a notification system for the player\'s HUD.'
                    ],
                    media: [ProEco1, ProEco2, ProEco3],
                },
                postproduction: {
                    title: "Final Delivery and Presentation",
                    description: [
                        'The final project presents a complete and well-structured game, suitable for a 5-minute play session.',
                        'Players experience a fast-paced and engaging gameplay loop, supported by enemy behavior that provides an appropriate level of challenge to sustain the game\'s tension.',
                        'During the final two weeks, we also dedicated time to reviewing remaining bugs, conducting a general code review, and optimizing the project as much as possible — closing out this project\'s development cycle on a strong note.',
                        'We also carried out the corresponding post mortem, through which we identified areas for improvement. Ultimately, the goal of these projects is also to learn and grow, with the aim of delivering higher-quality experiences in the future.',
                        'NOTE: The GitHub repository is private and therefore cannot be shared directly, but the most recent build of the project is available through the link above.'
                    ],
                    media: [PostEco1, PostEco2],
                },
            },
            sectionFooter: 'Special thanks to VFS and Kizuna Interactive for their support throughout the development of this project.',
            footerHasLink: false,
            footerLink: ""
        }
    },
]

export const UIExpES: Project[] = [
    {
        id: 'p1',
        title: 'Lista de Tareas',
        description: 'Este es un proyecto de menor escala desarrollado con Android Studio. ' +
            'Replica la lógica de una lista de tareas con almacenamiento en una base de datos Firebase, la cual es responsiva según el usuario y permite compartir tareas entre distintos usuarios. ' +
            'El propósito principal fue de aprendizaje, tanto con Android Studio como entorno de desarrollo como con Kotlin como lenguaje de programación.',
        isProjectDeployed: true,
        iframeSrc: 'https://www.youtube.com/embed/J2kiRcF9dIU?si=YJMyYrTy2aoj2F_t',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Task_manager_App_JDS",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del proyecto",
                    description: [
                        'Este era un proyecto de alcance acotado, al cual se le quiso dar una base sólida desde su desarrollo inicial.',
                        'Primero se definió el diseño, estableciendo que la aplicación requería una página de usuario, un menú principal con función de reciclaje de vistas, una plantilla para editar tareas y otra para visualizarlas.',
                        'Esto, sumado al aprendizaje de Kotlin y del entorno de desarrollo.'
                    ],
                    media: [preTaskManager],
                },
                production: {
                    title: "Desarrollo del proyecto",
                    description: [
                        'La experiencia de desarrollarlo me brindó una perspectiva clara sobre los sistemas de gestión de tareas dentro de un dispositivo móvil.',
                        'Principalmente, aprendí a utilizar interfaces para generar una base capaz de registrar y mostrar todas las tareas sin sobrecargar la memoria del dispositivo.',
                        'Además, fue la primera vez que integré una aplicación con Firebase, lo que me permitió utilizar una base de datos compartida entre todos los usuarios.',
                        'En el backend, la información almacenada incluía el usuario propietario, los usuarios invitados, la tarea, las subtareas y su estado de completitud.'
                    ],
                    media: [proTaskManager],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: [
                        'Dentro del desarrollo final, las pruebas son un paso fundamental, dado que es necesario considerar la diversidad de hardware existente en la actualidad.',
                        'Fue necesario probar la aplicación en múltiples dispositivos para determinar el límite de compatibilidad, ajustar la resolución según cada pantalla, verificar la consistencia de los colores y evaluar otros aspectos relevantes.',
                        'Esto, además de comprobar que el diseño fuera adecuado y no generara conflictos con la experiencia del usuario.'
                    ],
                    media: [postTaskManager],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p2',
        title: 'Diseño Figma - Menú de juego Deck Building UI',
        description:
            'Este es un diseño de alcance acotado que me permitió comprender mejor la interfaz de usuario para dispositivos móviles y su aplicación en el desarrollo. ' +
            'Consiste en un wireframe con diagrama de flujo para un posible diseño de la pantalla de gestión de cartas del mazo en un juego de cartas coleccionables.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DeckIMG,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://www.figma.com/design/xehLclTiWcFHi1Wg4kppPu/Deck-Building-Screen-Layout?node-id=38-792&p=f&t=1YTbaEQum96jx0xR-0",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Diagrama de flujo",
                    description: [
                        'El objetivo principal en esta etapa fue comprender, desde la perspectiva del usuario, cómo navegaría por la pantalla.',
                        'Me enfoqué en jugadores novatos, quienes no son expertos en el género y podrían sentirse abrumados por un sistema tan complejo como el de construcción de mazos.',
                        'Con esto en mente, diseñé una ruta de decisiones lo más simple posible para facilitar la comprensión del usuario, apoyándome también en referentes de juegos ya existentes.',
                    ],
                    media: [DeckPre],
                },
                production: {
                    title: "Conexiones en el wireframe",
                    description: [
                        'El siguiente proceso se enfocó en explicar con claridad cómo fluiría el usuario visualmente a través de la interfaz.',
                        'Aquí se demuestra cómo cada pantalla es navegable, por qué el usuario la necesita y qué lógica sigue para evitar que se pierda dentro del flujo.',
                        'Todo esto sin sacrificar la identidad estética del proyecto.',
                    ],
                    media: [DeckPro],
                },
                postproduction: {
                    title: "Detalles de cada panel",
                    description: [
                        'Como se mencionó anteriormente, el público objetivo eran jugadores novatos; por lo tanto, cada pequeño detalle en cada pantalla es relevante.',
                        'Cualquier botón poco claro, acción no intuitiva o elemento difícil de entender resultaría contraproducente y generaría una barrera para el usuario. Por ello, todo debía estar completamente pulido a nivel conceptual antes de avanzar.',
                        'Esto es especialmente importante para detectar errores en esta etapa y no en el producto final.',
                    ],
                    media: [DeckPost],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to prepare',
        description:
            'Este es un proyecto desarrollado con React Native, que consiste en una aplicación web con acceso a una amplia variedad de cócteles para preparar, indicando los ingredientes, los pasos y el tiempo necesario para su elaboración. ' +
            'El proyecto se conecta con Firebase para verificar que los usuarios sean mayores de edad, accede a una API gratuita con información detallada de cada cóctel e incluso utiliza el acelerómetro del dispositivo para simular el proceso de mezcla de la bebida.',
        isProjectDeployed: true,
        iframeSrc: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/Cocktail-app",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Diseño y planeación",
                    description: [
                        'La idea inicial era aprovechar la base de datos disponible para generar una aplicación entretenida y útil para el usuario.',
                        'El enfoque se dirigió principalmente hacia usuarios mayores de edad que quisieran tener a la mano una guía para preparar bebidas en fiestas o eventos sociales.',
                        'La interfaz presenta un estilo sencillo e intuitivo, que compacta la información de manera eficiente sin excluir a ningún tipo de usuario.'
                    ],
                    media: [preCocktail],
                },
                production: {
                    title: "Desarrollo del proyecto",
                    description: [
                        'Al estar desarrollado con React Native, la lógica del proyecto sigue los mismos principios del framework.',
                        'Esta consiste en crear pequeños módulos que dan forma a la aplicación en su conjunto.',
                        'A esto se suma el sistema de navegación nativo del framework, que permite crear pestañas para orientar al usuario de manera más clara y eficiente.',
                        'En este punto ya contaba con experiencia previa trabajando con JavaScript y React como framework, lo que facilitó considerablemente el proceso de desarrollo.'
                    ],
                    media: [proCocktail],
                },
                postproduction: {
                    title: "Refinamiento del proyecto",
                    description: [
                        'Este proyecto aún no está finalizado, por lo que quedan detalles pendientes por resolver.',
                        'Sin embargo, existen aspectos que también valdrá la pena refactorizar, como el uso de módulos internos o la integración de contextos para evitar el prop drilling dentro del programa.'
                    ],
                    media: [postCocktail],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
]

export const UIExpEN: Project[] = [
    {
        id: 'p1',
        title: 'Task Manager App',
        description: 'This is a smaller-scale project built with Android Studio. ' +
            'It replicates the logic of a task list application with storage in a Firebase database, which is user-responsive and allows tasks to be shared between different users. ' +
            'The main purpose was educational, both in terms of Android Studio as a development environment and Kotlin as a programming language.',
        isProjectDeployed: true,
        iframeSrc: 'https://www.youtube.com/embed/J2kiRcF9dIU?si=YJMyYrTy2aoj2F_t',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Task_manager_App_JDS",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Project Concept",
                    description: [
                        'This was a project with a limited scope, to which we wanted to add a solid foundation from the very beginning.',
                        'The first step was to define the design, establishing that the application required a user page, a main menu with view recycling functionality, a template for editing tasks, and another for displaying them.',
                        'This was accompanied by the goal of learning Kotlin and the development environment.'
                    ],
                    media: [preTaskManager],
                },
                production: {
                    title: "Development",
                    description: [
                        'The development experience gave me a clear perspective on task management systems within a mobile device.',
                        'In particular, I learned how to use interfaces to build a foundation capable of registering and displaying all tasks without overloading the device\'s memory.',
                        'Additionally, this was the first time I integrated an application with Firebase, which allowed me to use a shared database across all users.',
                        'On the backend, the stored information included the owner user, invited users, the task itself, subtasks, and their completion status.'
                    ],
                    media: [proTaskManager],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        'Testing is a fundamental step in the final stage of development, given the wide variety of hardware available today.',
                        'It was necessary to test the application on multiple devices to determine compatibility limits, adjust resolution per screen, verify color consistency, and evaluate other relevant aspects.',
                        'This also included confirming that the design was appropriate and did not create conflicts with the user experience.'
                    ],
                    media: [postTaskManager],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p2',
        title: 'Figma Design - Deck Building Game Menu UI',
        description:
            'This is a small-scale design project that helped me develop a better understanding of mobile user interfaces and how to apply them in development. ' +
            'It consists of a wireframe with a flow diagram for a potential deck management screen layout in a card-building game.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DeckIMG,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://www.figma.com/design/xehLclTiWcFHi1Wg4kppPu/Deck-Building-Screen-Layout?node-id=38-792&p=f&t=1YTbaEQum96jx0xR-0",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Flow Diagram",
                    description: [
                        'The main objective at this stage was to understand, from the user\'s perspective, how they would navigate through the screen.',
                        'I focused on novice players, those who are not familiar with the genre and might feel overwhelmed by a system as complex as deck building.',
                        'With this in mind, I designed the simplest possible decision path to facilitate user comprehension, drawing on references from existing games in the genre.',
                    ],
                    media: [DeckPre],
                },
                production: {
                    title: "Wireframe Connections",
                    description: [
                        'The next stage focused on clearly explaining how the user would flow visually through the interface.',
                        'This demonstrates how each screen is navigable, why the user needs it, and what logic it follows to prevent them from getting lost within the flow.',
                        'All of this was achieved without compromising the aesthetic identity of the project.',
                    ],
                    media: [DeckPro],
                },
                postproduction: {
                    title: "Panel Details",
                    description: [
                        'As mentioned previously, the target audience was novice players; therefore, every small detail on each screen matters.',
                        'Any unclear button, non-intuitive action, or difficult-to-understand element would be counterproductive and create a barrier for the user. As a result, everything needed to be thoroughly refined at the conceptual level before moving forward.',
                        'This is especially important for catching errors at this stage rather than in the final product.',
                    ],
                    media: [DeckPost],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to Prepare',
        description:
            'This is a project developed with React Native, consisting of a web application that provides access to a wide variety of cocktails to prepare, including ingredients, preparation steps, and the time required for each. ' +
            'The project connects with Firebase to verify that users are of legal drinking age, accesses a free API with detailed information on each cocktail, and even uses the device\'s accelerometer to simulate the drink mixing process.',
        isProjectDeployed: true,
        iframeSrc: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/Cocktail-app",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Design and Planning",
                    description: [
                        'The initial idea was to leverage the available database to build an entertaining and useful application for the user.',
                        'The focus was directed primarily toward adult users who wanted a handy guide for preparing drinks at parties or social events.',
                        'The interface features a simple and intuitive style that presents information compactly and efficiently without excluding any type of user.'
                    ],
                    media: [preCocktail],
                },
                production: {
                    title: "Project Development",
                    description: [
                        'Being built with React Native, the project\'s logic follows the same principles as the framework.',
                        'This consists of creating small modules that collectively shape the application.',
                        'This is complemented by the framework\'s native navigation system, which allows the creation of tabs to guide users in a clear and efficient manner.',
                        'At this stage, I already had prior experience working with JavaScript and React as a framework, which considerably streamlined the development process.'
                    ],
                    media: [proCocktail],
                },
                postproduction: {
                    title: "Project Refinement",
                    description: [
                        'This project is not yet complete, so there are still details pending resolution.',
                        'However, there are also aspects worth refactoring, such as the use of internal modules or the integration of contexts to avoid prop drilling throughout the application.'
                    ],
                    media: [postCocktail],
                },
            },
            sectionFooter: "",
            footerHasLink: false,
            footerLink: ""
        }
    },
]

export const HighlightsES: HighlightProjects[] = [
    {
        id: 'p1',
        title: 'Proyecto base - Portafolio web',
        description:
            'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
        imgSrc: IMGPort,
    },
    {
        id: 'p2',
        title: '(Des)Conectado - Un juego fuera del dispositivo',
        description:
            'Este proyecto fue desarrollado en colaboración con la Universidad de los Andes. ' +
            'Presenta el DEMO de una novela gráfica interactiva para dispositivos móviles Android, centrada en Ashley, una joven con nomofobia que se pierde en un bosque mientras su familia acampa y debe encontrar el camino de regreso. ' +
            'Este proyecto representa mi primer acercamiento profesional a Unity y mi inicio formal en el área de programación, ya que con anterioridad únicamente había realizado ejercicios menores. \n' +
            'Dentro del siguiente link se puede descagar el APK del DEMO para dispositivos android. (Toca dar permiso para instalar APK de Google Drive.)',
        imgSrc: DesConectado,
    },
    {
        id: 'p3',
        title: 'EcoRanger',
        description:
            'EcoRanger es un proyecto desarrollado en Unity como entrega de mitad de programa del curso de Programación para Juegos, Web y Móvil de la Vancouver Film School. ' +
            'Fue desarrollado en equipo de 5 personas, donde desempeñé el rol de uno de los dos programadores del proyecto. ' +
            'EcoRanger es un shooter 3D de conflicto ambiental que presenta a Ekko, un Ranger espacial enviado a la Tierra con la misión de impedir que los peligrosos Eco Breakers la destruyan mediante una contaminación masiva. ' +
            'Durante el juego, Ekko deberá resistir durante 5 minutos hasta que lleguen los refuerzos, utilizando su pistola teletransportadora para eliminar los distintos tipos de basura presentes en el área. ' +
            'En este proyecto, estuve a cargo del desarrollo de sistemas generales de juego, así como de la programación de máquinas de estados e inteligencia artificial. ' +
            'La duración total del proyecto fue de 2 meses, distribuidos en 3 semanas para prototipo, 3 para Alpha, 2 para Beta, y una semana final para pulir los detalles del proyecto. ' +
            'Revisa el enlace para descargar el juego (PC):',
        imgSrc: PostEco1,
    },
    {
        id: 'p4',
        title: 'Cocktail App - Learning to prepare',
        description:
            'Este es un proyecto desarrollado con React Native, que consiste en una aplicación web con acceso a una amplia variedad de cócteles para preparar, indicando los ingredientes, los pasos y el tiempo necesario para su elaboración. ' +
            'El proyecto se conecta con Firebase para verificar que los usuarios sean mayores de edad, accede a una API gratuita con información detallada de cada cóctel e incluso utiliza el acelerómetro del dispositivo para simular el proceso de mezcla de la bebida.',
        imgSrc: postCocktail,
    },
]

export const HighlightsEN: HighlightProjects[] = [
    {
        id: 'p1',
        title: 'Base Project - Web Portfolio',
        description:
            'This project was developed in 2026, following multiple previous versions built with different tools. This portfolio was created using React and hosted on GitHub Pages. It reflects my evolution as a developer, as well as my level of organization and personal growth over the years.',
        imgSrc: IMGPort,
    },
    {
        id: 'p2',
        title: '(Dis)Connected - An Off-Device Game',
        description:
            'This project was developed in collaboration with Universidad de los Andes. ' +
            'It presents the DEMO of an interactive graphic novel for Android mobile devices, centered on Ashley, a young woman with nomophobia who gets lost in a forest while her family goes camping and must find her way back. ' +
            'This project represents my first professional approach to Unity and my formal entry into software development, as I had previously only completed minor exercises.' +
            '\n On the next link there is available the APK Demo to download from android. (The download is from google drive, so you need to use an android device that allow to install external apps.)',
         imgSrc: DesConectado,
    },
    {
        id: 'p3',
        title: 'EcoRanger',
        description:
            'EcoRanger is a project developed in Unity as a mid-program deliverable for the Game, Web & Mobile Programming course at Vancouver Film School. ' +
            'It was developed by a team of 5, where I served as one of the two programmers on the project. ' +
            'EcoRanger is a 3D environmental conflict shooter featuring Ekko, a space Ranger sent to Earth on a mission to prevent the dangerous Eco Breakers from destroying it through massive pollution. ' +
            'Throughout the game, Ekko must hold out for 5 minutes until reinforcements arrive, using a teleportation gun to eliminate different types of waste scattered across the area. ' +
            'In this project, I was responsible for the development of general game systems as well as the programming of state machines and artificial intelligence. ' +
            'The total duration of the project was 2 months, distributed across 3 weeks for the prototype, 3 for Alpha, 2 for Beta, and a final week dedicated to polishing the project. ' +
            'Check the link bellow to download the game (PC):',
        imgSrc: PostEco1,
    },
    {
        id: 'p4',
        title: 'Cocktail App - Learning to Prepare',
        description:
            'This is a project developed with React Native, consisting of a web application that provides access to a wide variety of cocktails to prepare, including ingredients, preparation steps, and the time required for each. ' +
            'The project connects with Firebase to verify that users are of legal drinking age, accesses a free API with detailed information on each cocktail, and even uses the device\'s accelerometer to simulate the drink mixing process.',
        imgSrc: postCocktail,
    },
]