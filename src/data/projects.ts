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

//CocktailApp
import imgCocktail from '../assets/CocktailApp/JulianDSilva.png'
import preCocktail from '../assets/CocktailApp/preprocess.png'
import proCocktail from '../assets/CocktailApp/process.png'
import postCocktail from '../assets/CocktailApp/postprocess.png'

//EcoRanger
import PreEco1 from '../assets/EcoRanger/preprocess01.png'
import PreEco2 from '../assets/EcoRanger/preprocess02.png'
import ProEco1 from '../assets/EcoRanger/process01.png'
import ProEco2 from '../assets/EcoRanger/process02.png'
import ProEco3 from '../assets/EcoRanger/process03.png'
import PostEco1 from '../assets/EcoRanger/postprocess01.png'
import PostEco2 from '../assets/EcoRanger/postprocess02.png'

//Rekindled 
import preprocesss1 from '../assets/Rekindled/preprocess01.png'
import preprocesss2 from '../assets/Rekindled/preprocess02.png'
import preprocesss3 from '../assets/Rekindled/preprocess03.png'
import processs1 from '../assets/Rekindled/process01.png'
import processs2 from '../assets/Rekindled/process02.png'
import processs3 from '../assets/Rekindled/process03.png'
import processs4 from '../assets/Rekindled/process04.png'
import postprocesss1 from '../assets/Rekindled/current01.png'
import postprocesss2 from '../assets/Rekindled/current02.png'


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
        externalLinks: "https://github.com/neondsilvam/Programming_portfolio",
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
            itHasBeenPublished: false,
            publishedLink: ""
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
            itHasBeenPublished: false,
            publishedLink: ""
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
            sectionFooter: 'Hay un prototipo de la app en el siguiente link:',
            footerHasLink: true,
            footerLink: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
            itHasBeenPublished: false,
            publishedLink: ""
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
        externalLinks: "https://github.com/neondsilvam/Programming_portfolio",
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
            itHasBeenPublished: false,
            publishedLink: ""
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
            itHasBeenPublished: false,
            publishedLink: ""
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
            sectionFooter: 'Also to test an early prototype on here:',
            footerHasLink: true,
            footerLink: 'https://snack.expo.dev/@pg29julians/cocktail-app---final',
            itHasBeenPublished: false,
            publishedLink: ""
        }
    },
]

export const GameExpES: Project[] = [
    {
        id: 'p3',
        title: 'Rekindled - Actualmente en desarrollo',
        description:
            'Este es un juego de combate a distancia en tercera persona, que combina personajes 2D dentro de un mundo 3D. ' +
            'Aquí seguimos a Cinder, un mago con temática de fénix que debe escalar un volcán mortal para entregar el último huevo de fénix a la lava hirviente y salvar a su especie. ' +
            'Deberá combinar distintos elementos para lanzar hechizos poderosos, usados para enfrentar a todos los monstruos mortales que habitan el volcán. ' +
            'Este proyecto no solo es una de las cosas más ambiciosas en las que he trabajado hasta ahora, sino también uno de los pasos más importantes en mi carrera, tanto por el conocimiento como por las habilidades que obtuve durante su desarrollo. ' +
            'Fue desarrollado en el motor Unity 3D, usando C# como lenguaje de programación principal. Está publicado en Steam, con actualizaciones por venir.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: postprocesss1,
        section: '2026',
        hasExternalLinks: false,
        externalLinks: 'https://store.steampowered.com/app/4926530/Rekindled/',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Contexto de creación",
                    description: [
                        'El proceso de preproducción del proyecto consistió en crear el concepto del juego. Aquí simplemente hicimos una lluvia de ideas con lo que teníamos y lo que queríamos hacer.',
                        'Queríamos generar muchas ideas, como crear un juego de 4 elementos o un combate multijugador, y al final decidimos crear un juego con temática de fénix.',
                        'Nuestro equipo tenía 3 programadores, por lo que tuvimos que distribuir las diferentes tareas, especialmente porque queríamos tener un prototipo totalmente funcional antes de terminarlo.',
                        'Organizamos todos nuestros documentos dentro de un archivo de Notion, donde también establecimos convenciones de nomenclatura y estructuras de organización.',
                        'Esto nos permitió no solo visualizar todo el potencial del proyecto, sino también entender la escala que necesitábamos manejar en relación con el tiempo que teníamos.'
                    ],
                    media: [preprocesss1, preprocesss2, preprocesss3],
                },
                production: {
                    title: "Mayor desafío",
                    description: [
                        'Una de las principales cosas que nuestros diseñadores nos pidieron fue la persistencia de datos. Querían darle al jugador la posibilidad de guardar su progreso y volver más tarde a terminar su partida.',
                        'Al implementarlo, hubo problemas para guardar y se sobrescribían valores dentro del juego. Este error hacía que los datos persistentes le dieran al jugador elementos del juego que aún no debían estar disponibles, como desbloquear hechizos poderosos o logros sin cumplir los requisitos necesarios.',
                        'Esto se debía principalmente a que los datos guardaban el progreso según acciones específicas después del checkpoint, generando múltiples casos límite en los que, si el jugador moría, reaparecía con condiciones distintas a las que debería tener. Dependiendo del caso, el jugador podía saltarse zonas o quedar bloqueado por tener o no tener el progreso correcto de los datos.',
                        'La forma de solucionarlo fue rastrear variables según los elementos específicos que el jugador necesitaba, y ver exactamente dónde y bajo qué acciones se estaban guardando. Esto llevó a tener una variable interna que funciona como rastreador de datos temporales, capaz de revertir los valores cuando el jugador moría.',
                        'Llegué a esta decisión al darme cuenta de que el jugador tendría libertad para realizar un rango específico de acciones en el juego, lo que significaba que la única forma de asegurar que no faltaran pasos era rastrearlos individualmente.',
                        'Aun así, seguía habiendo casos límite en los que los datos no eran precisos. Por eso, además de esto, decidí implementar una referencia de qué elementos debía tener el jugador en un punto específico y eliminar el aspecto persistente de esa parte.',
                        'Al final, esto creó un bloqueo seguro para el progreso, donde para algunos aspectos directos, como los elementos o hechizos que el jugador había desbloqueado, decidí usar una referencia de los datos, ya que son más controlados y no dependen de las decisiones del jugador. Sin embargo, también usé un valor temporal, que se actualiza en cada checkpoint, para asegurarme de que las estadísticas solo se guarden ahí.',
                        'El resultado de estas decisiones hizo que el juego funcionara correctamente con datos persistentes sin sobrescribir los elementos en el script. La única desventaja fue que la complejidad del script y del sistema aumentó, haciéndolo más reactivo a futuros cambios. Lamentablemente, esto también tuvo otra contrapartida, ya que este sistema necesita pulirse aún más en el futuro. Sin embargo, gracias a esto pude entender el flujo necesario que deben tener los datos y cómo resolverlo.'
                    ],
                    media: [processs1, processs2, processs3, processs4],
                },
                postproduction: {
                    title: "Progreso actual",
                    description: [
                        'Aunque ya obtuvimos la aprobación de Steam, todavía necesitamos pulir algunos detalles.',
                        'Queremos asegurarnos de que el juego esté lo más optimizado posible y lo más libre de errores que podamos.',
                        'Acabamos de llegar a Alpha, y estamos a punto de llegar a Beta, para pronto lanzarlo oficialmente en Steam.',
                        'Prelanzamiento el 6 de agosto de 2026'
                    ],
                    media: [postprocesss1, postprocesss2],
                },
            },
            sectionFooter: "Un agradecimiento especial a VFS y al equipo de Rekindled por su apoyo durante todo el desarrollo de este proyecto.",
            footerHasLink: false,
            footerLink: "",
            itHasBeenPublished: true,
            publishedLink: "https://store.steampowered.com/widget/4926530/"
        }
    },
    {
        id: 'p2',
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
            footerLink: "",
            itHasBeenPublished: false,
            publishedLink: ""
        }
    },
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
            footerLink: "",
            itHasBeenPublished: false,
            publishedLink: ""
        }
    },
]

export const GameExpEN: Project[] = [
    {
        id: 'p3',
        title: 'Rekindled - Currently a Work in Progress',
        description:
            'This is a third-person ranged combat game, featuring 2D characters in a 3D world. ' +
            'Here we follow Cinder, a phoenix-themed mage who has to climb a deadly volcano to deliver the last phoenix egg to the boiling lava and save his species. ' +
            'He will have to combine different elements to cast powerful spells, used to fight all the deadly monsters that inhabit the volcano. ' +
            'This project is not only one of the most ambitious things I have worked on so far, but also one of the biggest steps I have made in my career, both in the knowledge and the skill I obtained during this project. ' +
            'This one was developed in the Unity 3D engine, using C# as the main programming language. It is deployed on Steam, with updates to come.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: postprocesss1,
        section: '2026',
        hasExternalLinks: false,
        externalLinks: 'https://store.steampowered.com/app/4926530/Rekindled/',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Context of creation",
                    description: [
                        'The pre-production process of the project was to create the concept of the game. Here, we were just brainstorming with what we had and what we wanted to do.',
                        'We wanted to brainstorm a lot of ideas, like making a 4-element game or a multiplayer combat game, and in the end we decided to create a phoenix-themed game.',
                        'Our team had 3 programmers, which is why we had to distribute the different assignments, especially because we wanted to have a fully working prototype before finishing it.',
                        'We organized all of our documents inside a Notion file, where we also established naming conventions and organizational structures.',
                        'This allowed us not only to visualize the full potential of the project, but also to understand the scale we needed to handle in relation to the time we had.'
                    ],
                    media: [preprocesss1, preprocesss2, preprocesss3],
                },
                production: {
                    title: "Biggest challenge",
                    description: [
                        'One of the main things our designers asked us for was persistent data. They wanted to give the player the possibility to save their progress and return later to finish their run in the game.',
                        'When implementing it, there were issues saving and overriding in-game values. This bug caused the persistent data to provide the player with elements of the game that were not yet available, like unlocking powerful spells or achievements without meeting the necessary requirements.',
                        'This was mainly because the data was saving progress based on specific actions after the checkpoint, creating multiple edge cases where, if the player died, they respawned with conditions different from the ones they should have respawned with. Depending on each case, the player could skip areas or get soft-locked due to having or not having the correct progress data.',
                        'The way to fix it was to track variables based on the specific elements the player needed, and to see specifically where and under what actions they were being saved. This led to having an internal variable that works as a tracker for temporary data, which could revert the values when the player died.',
                        'I reached this decision after realizing that the player would have the freedom to take a specific range of actions in the game, which meant that the only way to ensure no steps were missing was to track them individually.',
                        'Even with this, there were still edge cases where the data could not be accurate. Therefore, in addition to this, I decided to implement a reference of which elements the player should have at a specific point and remove the persistent aspect of it.',
                        "In the end, this created a safe lock for the progress, where for some direct aspects, like the elements or spells the player had unlocked, I decided to use a reference of the data, because they are more controlled and don't depend on the player's decisions. However, I also used a temporary value, updated at each checkpoint, to make sure that the stats are only saved there.",
                        "The result of these decisions made the game work correctly with persistent data without overriding the elements in the script. The only drawback was that the complexity of the script and the system increased, making it more reactive to future changes. Unfortunately, this also had another trade-off, because this system needs to be polished even further in the future. However, from this I was able to understand the necessary flow the data must have and how to resolve it."
                    ],
                    media: [processs1, processs2, processs3, processs4],
                },
                postproduction: {
                    title: "Current progress",
                    description: [
                        'Although we already got the green light from Steam, we still need to polish some details.',
                        'We want to make sure the game is as optimized as possible, and as bug-free as we can.',
                        "We just reached Alpha, and we're about to get to Beta, in order to soon officially release it on Steam.",
                        'Pre-release on August 6, 2026'
                    ],
                    media: [postprocesss1, postprocesss2],
                },
            },
            sectionFooter: "Special thanks to VFS and Rekindled's team for their support throughout the development of this project.",
            footerHasLink: false,
            footerLink: "",
            itHasBeenPublished: true,
            publishedLink: "https://store.steampowered.com/widget/4926530/"
        }
    },
    {
        id: 'p2',
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
            footerLink: "",
            itHasBeenPublished: false,
            publishedLink: ""
        }
    },
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
            footerLink: "",
            itHasBeenPublished: false,
            publishedLink: ""
        }
    },
]

export const HighlightsES: HighlightProjects[] = [
    {
        id: 'p1',
        title: 'Proyecto base - Portafolio web',
        description: 'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
        imgSrc: IMGPort,
        posInList: 0,
        section: "webExp"
    },
    {
        id: 'p2',
        title: 'Rekindled',
        description: 'Este es un juego de combate a distancia en tercera persona, que combina personajes 2D dentro de un mundo 3D. ' +
            'Aquí seguimos a Cinder, un mago con temática de fénix que debe escalar un volcán mortal para entregar el último huevo de fénix a la lava hirviente y salvar a su especie. ' +
            'Deberá combinar distintos elementos para lanzar hechizos poderosos, usados para enfrentar a todos los monstruos mortales que habitan el volcán. ',
        imgSrc: postprocesss1,
        posInList: 1,
        section: "gameExp"
    },
]

export const HighlightsEN: HighlightProjects[] = [
    {
        id: 'p1',
        title: 'Base Project - Web Portfolio',
        description: 'This project was developed in 2026, following multiple previous versions built with different tools. This portfolio was created using React and hosted on GitHub Pages. It reflects my evolution as a developer, as well as my level of organization and personal growth over the years.',
        imgSrc: IMGPort,
        posInList: 0,
        section: "webExp"
    },
    {
        id: 'p2',
        title: 'Rekindled',
        description: 'This is a third-person ranged combat game, featuring 2D characters in a 3D world. ' +
            'Here we follow Cinder, a phoenix-themed mage who has to climb a deadly volcano to deliver the last phoenix egg to the boiling lava and save his species. ' +
            'He will have to combine different elements to cast powerful spells, used to fight all the deadly monsters that inhabit the volcano. ',
        imgSrc: postprocesss1,
        posInList: 1,
        section: "gameExp"
    },
]
