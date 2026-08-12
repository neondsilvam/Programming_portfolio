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
        description: 'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
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
        },
        CaseStudy: [
            {
                id: "p1",
                title: "Nav",
                description: {
                    context: "Durante el desarrollo de este portafolio, uno de los desafíos recurrentes estuvo relacionado con la gestión del sistema de navegación. Inicialmente, implementé la lógica de navegación directamente dentro de un componente específico, lo que generaba un acoplamiento considerable entre la funcionalidad de navegación y dicho componente.\n" +
                        "\n" +
                        "A medida que el portafolio creció, este enfoque comenzó a generar restricciones cuando diferentes componentes necesitaban interactuar con el sistema de navegación o responder a sus cambios.",
                    problem: "La arquitectura inicial dificultaba que otros componentes y páginas pudieran acceder o interactuar con el sistema de navegación.\n" +
                        "\n" +
                        "Debido a que la lógica estaba directamente vinculada a un componente específico, algunos componentes no podían responder fácilmente a los cambios de navegación ni utilizar el mismo estado sin introducir dependencias adicionales.",
                    possibilities: "La primera solución consistía en trasladar la lógica de navegación a un React Context. Aunque esto implicaría introducir una capa adicional de abstracción y aumentar inicialmente la complejidad de la arquitectura, permitiría compartir el estado de navegación a lo largo de toda la aplicación sin acoplar directamente los diferentes componentes al componente de navegación.\n" +
                        "\n" +
                        "La segunda alternativa consistía en modificar individualmente los componentes para que pudieran leer o interactuar directamente con el componente de navegación cuando fuera necesario. Aunque este enfoque requeriría menos cambios estructurales, introduciría redundancia y aumentaría las dependencias entre componentes.",
                    decision: "Finalmente, decidí implementar el sistema de navegación utilizando un React Context.\n" +
                        "\n" +
                        "Este enfoque permitió compartir el estado y las funcionalidades de navegación a lo largo de la aplicación sin depender de un uso extensivo de prop drilling ni crear dependencias innecesarias entre componentes.\n" +
                        "\n" +
                        "Además, ayudó a mantener un estado de navegación consistente a lo largo del portafolio y proporcionó una base más escalable para futuros componentes y funcionalidades.",
                    outcome: "La nueva arquitectura facilitó considerablemente la gestión de la navegación y permitió que diferentes componentes interactuaran con el sistema de manera más independiente.\n" +
                        "\n" +
                        "También simplificó la implementación de funcionalidades adicionales, como el indicador de resaltado (highlight) de navegación, ya que estos componentes podían acceder directamente al estado compartido mediante el Context.\n" +
                        "\n" +
                        "Esta experiencia reforzó mi comprensión sobre la importancia de separar el estado compartido de la interfaz de usuario individual. Al trasladar la navegación a un contexto centralizado, pude reducir las dependencias entre componentes, mejorar la reutilización del código y establecer una arquitectura más mantenible para el portafolio."
                }
            }
        ]
    },
    {
        id: 'p2',
        title: 'Proyecto web - Plataforma de juego',
        description: 'Esta página web, desarrollada en 2026 como proyecto de clase, fue construida con React como base. ' +
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
        },
        CaseStudy: [{
            id: "p1",
            title: "Telemetria y admin",
            description: {
                context: "Durante este proyecto de desarrollo web, necesitábamos implementar un sistema de acceso restringido que permitiera únicamente a los administradores autorizados acceder al sistema de telemetría. En ese momento, todavía no tenía un conocimiento profundo de las diferentes librerías y soluciones de autenticación disponibles para implementar este tipo de funcionalidad de manera segura.\n" +
                    "\n" +
                    "El objetivo principal era crear un sistema de acceso administrativo para Firebase y los datos de telemetría sin depender de usuarios específicos definidos directamente en el código, permitiendo que el sistema fuera flexible y fácil de mantener.",
                problem: "El principal desafío consistía en implementar un sistema de acceso administrativo que pudiera restringir el acceso a Firebase y a las funcionalidades de telemetría, manteniendo al mismo tiempo la flexibilidad necesaria para admitir múltiples administradores.\n" +
                    "\n" +
                    "Además, el sistema debía evitar comprobaciones de usuarios codificadas directamente en el frontend, ya que esto dificultaría su mantenimiento y expansión.",
                possibilities: "La primera solución consistía en utilizar las Firebase Security Rules para restringir el acceso según los permisos o el rol del usuario autenticado. Este enfoque habría proporcionado una capa de seguridad más sólida, ya que el control de acceso se realizaría a nivel del backend y no dependería exclusivamente del frontend.\n" +
                    "\n" +
                    "La segunda alternativa consistía en crear una lista blanca (whitelist) de administradores dentro de la base de datos. De esta manera, el sistema podría almacenar múltiples administradores autorizados y comprobar si el usuario actual formaba parte de dicha lista.\n" +
                    "\n" +
                    "Aunque el enfoque basado en una lista blanca implicaba operaciones adicionales sobre la base de datos y era técnicamente más pesado, resultaba considerablemente más sencillo de implementar teniendo en cuenta el tiempo disponible para el proyecto.",
                decision: "Debido a las limitaciones de tiempo del proyecto y a mi experiencia limitada en ese momento con las funcionalidades avanzadas de autorización de Firebase, decidí implementar la lista blanca de administradores.\n" +
                    "\n" +
                    "Esto permitió que el frontend determinara dinámicamente si un usuario contaba con permisos administrativos sin necesidad de definir individualmente a cada usuario directamente dentro del código de la aplicación. Además, era posible añadir o eliminar administradores sin modificar el código fuente.",
                outcome: "La solución funcionó correctamente para controlar el acceso desde el frontend y proporcionó la funcionalidad necesaria dentro del alcance del proyecto.\n" +
                    "\n" +
                    "Sin embargo, esta implementación también evidenció una limitación importante de seguridad: el control de acceso realizado exclusivamente desde el frontend no debe considerarse un mecanismo suficiente para proteger información sensible o funcionalidades administrativas. Un usuario con suficientes conocimientos podría potencialmente evadir las restricciones del frontend si los recursos subyacentes de Firebase no cuentan con reglas de autorización adecuadas.\n" +
                    "\n" +
                    "Mirando el proyecto en retrospectiva, reconozco que una solución más robusta habría consistido en implementar la autorización mediante las reglas de seguridad de Firebase o mediante un sistema de autorización en el backend, de manera que las restricciones de acceso fueran aplicadas independientemente del frontend.\n" +
                    "\n" +
                    "Esta experiencia me permitió comprender mejor la diferencia entre control de acceso en el frontend y autorización real. También reforzó la importancia de investigar las buenas prácticas de seguridad y los sistemas de autenticación y autorización específicos de cada plataforma antes de implementar funcionalidades administrativas.\n" +
                    "\n" +
                    "En futuros proyectos, priorizaría la implementación de la autorización a nivel del backend o de la seguridad de la base de datos, utilizando el frontend principalmente como una interfaz para reflejar los permisos del usuario y no como la capa principal de seguridad."
            }
        }]
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to prepare',
        description: 'Este es un proyecto desarrollado con React Native, que consiste en una aplicación web con acceso a una amplia variedad de cócteles para preparar, indicando los ingredientes, los pasos y el tiempo necesario para su elaboración. ' +
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
        },
        CaseStudy: [
            
        ]
    },
]

export const WebProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'Base Project - Web Portfolio',
        description: 'This project was developed in 2026, following multiple previous versions built with different tools. This portfolio was created using React and hosted on GitHub Pages. It reflects my evolution as a developer, as well as my level of organization and personal growth over the years.',
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
        },
        CaseStudy: [{
            id: "p1",
            title: "Nav",
            description: {
                context: "During the development of this portfolio, one of the recurring challenges was managing the navigation system. Initially, I implemented the navigation logic directly within a specific component, which tightly coupled the navigation functionality to that component and limited its accessibility from other parts of the application.\n" +
                    "\n" +
                    "As the portfolio grew, this approach began to create restrictions when different components needed to interact with or respond to the navigation state.",
                problem: "The existing navigation architecture made it difficult for other components and pages to access or interact with the navigation system.\n" +
                    "\n" +
                    "Because the navigation logic was tied directly to a specific component, certain components could not easily respond to navigation changes or use the same navigation state without introducing additional dependencies.",
                possibilities: "The first solution was to move the navigation logic into a React Context. Although this would introduce an additional layer of abstraction and increase the initial complexity of the architecture, it would make the navigation state accessible throughout the application without tightly coupling individual components to the navigation component.\n" +
                    "\n" +
                    "The second option was to modify individual components so that they could directly read or interact with the navigation component when necessary. While this approach would require fewer architectural changes, it would introduce redundancy and increase dependencies between components.",
                decision: "Ultimately, I decided to implement the navigation system using a React Context.\n" +
                    "\n" +
                    "This approach allowed the navigation state and functionality to be shared across the application without relying on extensive prop drilling or creating unnecessary dependencies between components.\n" +
                    "\n" +
                    "It also helped maintain a consistent navigation state throughout the portfolio and provided a more scalable foundation for future components and features.",
                outcome: "The new architecture made navigation significantly easier to manage and allowed different components to interact with the navigation system more independently.\n" +
                    "\n" +
                    "It also simplified the implementation of additional features, such as the navigation highlight indicator, because these components could access the shared navigation state directly through the Context.\n" +
                    "\n" +
                    "This experience reinforced my understanding of the importance of separating shared application state from individual UI components. By moving navigation into a centralized context, I was able to reduce component dependencies, improve reusability, and create a more maintainable architecture for the portfolio."
            }
        }]
    },
    {
        id: 'p2',
        title: 'Web Project - Gaming Platform',
        description: 'This web application, developed in 2026 as a class project, with the purpose of fully learning React framework.' +
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
        },
        CaseStudy: [
            {
                id: "p1",
                title: "Telemtry and admin access",
                description: {
                    context: "During this web development project, we needed to implement a restricted access system that would allow only authorized administrators to access the telemetry system. At the time, I was not yet familiar with the different libraries and authentication solutions available for implementing this type of functionality securely.\n" +
                        "\n" +
                        "The main objective was to create an administrative access system for Firebase and the telemetry data without hardcoding specific users into the application, allowing the system to remain flexible and maintainable.",
                    problem: "The main challenge was implementing an administrator access system that could restrict access to Firebase and telemetry functionality while remaining flexible enough to support multiple administrators.\n" +
                        "\n" +
                        "The system also needed to avoid hardcoded user checks within the frontend, as this would make the application more difficult to maintain and expand.",
                    possibilities: "The first solution was to use Firebase Security Rules to restrict access based on the authenticated user's permissions or role. This approach would provide a stronger security layer by enforcing access control at the backend level rather than relying exclusively on the frontend.\n" +
                        "\n" +
                        "The second solution was to create an administrator whitelist within the database. This would allow the system to store multiple authorized administrators and check whether the current user was included in that list.\n" +
                        "\n" +
                        "Although the whitelist approach introduced additional database operations and was technically heavier, it was considerably simpler to implement within the project's available time.",
                    decision: "Due to the project's time constraints and my limited experience with Firebase's more advanced authorization features at the time, I decided to implement the administrator whitelist.\n" +
                        "\n" +
                        "This allowed the frontend to dynamically determine whether a user had administrator privileges without requiring individual users to be hardcoded directly into the application. It also made it possible to add or remove administrators from the system without modifying the application's source code.",
                    outcome: "The solution worked effectively for controlling access from the frontend and provided the required functionality for the project's scope.\n" +
                        "\n" +
                        "However, this implementation also exposed an important security limitation: frontend-based access control should not be considered a sufficient security mechanism for protecting sensitive data or administrative functionality. A determined user could potentially bypass frontend restrictions if the underlying Firebase resources were not protected by appropriate backend authorization rules.\n" +
                        "\n" +
                        "Looking back, I recognize that a more robust solution would have involved implementing server-side or Firebase Security Rules-based authorization to ensure that access restrictions were enforced independently of the frontend.\n" +
                        "\n" +
                        "This experience highlighted the distinction between frontend access control and actual authorization. It also reinforced the importance of researching security practices and platform-specific authentication and authorization systems before implementing administrative functionality.\n" +
                        "\n" +
                        "In future projects, I would prioritize implementing authorization at the backend or database-security level and use the frontend primarily as an interface for communicating the user's permissions rather than as the primary security layer."
                }
            }
        ]
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to Prepare',
        description: 'This is a project developed with React Native, consisting of a web application that provides access to a wide variety of cocktails to prepare, including ingredients, preparation steps, and the time required for each. ' +
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
        },
        CaseStudy: []
    },
]

export const GameExpES: Project[] = [
    {
        id: 'p3',
        title: 'Rekindled - Actualmente en desarrollo',
        description: 'Este es un juego de combate a distancia en tercera persona, que combina personajes 2D dentro de un mundo 3D. ' +
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
        },
        CaseStudy: [{
            id: "p1",
            title: "Data persistente",
            description: {
                context: "Este proyecto es uno de los trabajos más ambiciosos en los que he participado hasta el momento y representa uno de los pasos más importantes en mi desarrollo como programador. Durante su desarrollo he adquirido una cantidad significativa de conocimientos y experiencia práctica, particularmente en el diseño, implementación y mantenimiento de sistemas de juego más complejos.\n" +
                    "\n" +
                    "Para este proyecto decidimos utilizar Unity, principalmente porque queríamos experimentar con características menos convencionales, incluyendo la combinación de personajes en 2D dentro de un entorno tridimensional. Unity nos proporcionó un flujo de trabajo conocido y, al mismo tiempo, nos permitió experimentar con este enfoque híbrido sin introducir una complejidad técnica innecesaria en el proyecto.",
                problem: "Uno de los principales desafíos técnicos estuvo relacionado con la implementación del sistema de datos persistentes. Inicialmente, el sistema presentaba problemas al guardar y restaurar la información del juego, especialmente cuando los valores persistentes interactuaban con valores que se estaban modificando durante la partida.\n" +
                    "\n" +
                    "Esto generaba situaciones en las que el sistema de persistencia podía proporcionar incorrectamente al jugador contenido que todavía no había desbloqueado. Por ejemplo, un jugador podía obtener acceso a hechizos poderosos o recibir logros sin haber cumplido previamente con los requisitos necesarios.",
                possibilities: "La primera solución considerada consistía en implementar un sistema interno para realizar un seguimiento de los datos temporales del juego. Este sistema almacenaría determinados valores temporalmente y los restauraría cuando el jugador muriera o alcanzara un punto adecuado para reiniciarlos.\n" +
                    "\n" +
                    "Aunque este enfoque podía resultar menos organizado desde el punto de vista de la arquitectura del sistema, permitiría mantener una relación más directa entre los datos temporales y el estado actual de la partida.\n" +
                    "\n" +
                    "La segunda alternativa consistía en mantener referencias explícitas sobre los elementos que el jugador debería haber desbloqueado en un momento determinado del juego y reducir la cantidad de información tratada como datos persistentes. Este enfoque proporcionaba una estructura más organizada, aunque podía introducir una mayor carga de procesamiento en determinados casos límite.",
                decision: "Finalmente, decidí combinar ambos enfoques en lugar de depender exclusivamente de uno de ellos.\n" +
                    "\n" +
                    "Para los elementos más directos y controlados de la progresión, como los elementos y hechizos que el jugador había desbloqueado, decidí utilizar referencias al estado esperado de progresión. Estos valores eran relativamente predecibles y no dependían significativamente de las decisiones individuales del jugador.\n" +
                    "\n" +
                    "Sin embargo, reconocí que este enfoque no sería adecuado para las estadísticas del jugador, ya que estas dependen directamente de sus acciones durante la partida. Para estos valores implementé información temporal que se actualiza en cada punto de control. De esta manera, las estadísticas del jugador solamente se almacenan de forma persistente en momentos controlados del juego.\n" +
                    "\n" +
                    "Este enfoque híbrido permitió diferenciar entre datos relacionados con la progresión, que podían validarse mediante referencias predefinidas, y datos generados por las acciones del jugador, que debían reflejar su comportamiento real durante la partida.",
                outcome: "El sistema resultante permitió gestionar correctamente los datos persistentes sin sobrescribir de manera incorrecta los valores actuales del juego ni otorgar al jugador contenido que todavía no había desbloqueado.\n" +
                    "\n" +
                    "El principal costo de esta solución fue el incremento de la complejidad tanto de la arquitectura de los scripts como del sistema general de persistencia. Como consecuencia, el sistema se volvió más sensible a cambios futuros y requirió una mayor planificación al introducir nuevas funcionalidades o modificar las estructuras de datos existentes.\n" +
                    "\n" +
                    "Sin embargo, esta complejidad también permitió establecer una base más confiable y controlada para gestionar la progresión y las estadísticas del jugador.\n" +
                    "\n" +
                    "Esta experiencia también me permitió comprender la importancia de diseñar sistemas pensando en su flexibilidad futura. En lugar de concentrarme únicamente en solucionar el problema inmediato, aprendí que estructurar los sistemas teniendo en cuenta posibles modificaciones puede reducir considerablemente las dificultades de desarrollo a medida que un proyecto crece.\n" +
                    "\n" +
                    "Como resultado, ahora busco aplicar este enfoque de manera más frecuente al diseñar sistemas de juego, especialmente aquellos relacionados con datos persistentes, progresión modular y funcionalidades que probablemente evolucionarán durante el desarrollo."
            }
        }, {
            id: "p2",
            title: "Sistema de Logros",
            description: {
                context: "Uno de los sistemas más complejos que desarrollé fue el sistema de logros. Su complejidad se debía principalmente a que los logros dependían de acciones muy específicas realizadas por el jugador, las cuales no podían generalizarse fácilmente dentro de un único conjunto de condiciones.\n" +
                    "\n" +
                    "Además, cada logro debía interactuar correctamente con el resto de los sistemas del juego y con sus respectivos tiempos de ejecución, incluyendo enemigos, hechizos, transiciones entre escenas y otros eventos de gameplay. Por esta razón, era necesario desarrollar un sistema capaz de responder a una gran variedad de condiciones sin interferir con las funcionalidades principales del juego.",
                problem: "El principal desafío consistía en crear un sistema que pudiera integrarse fácilmente con diferentes tipos de código y componentes de gameplay, al mismo tiempo que permitiera que otros programadores continuaran trabajando de manera independiente sobre esos mismos sistemas.\n" +
                    "\n" +
                    "Debido a que varios programadores trabajaban simultáneamente en diferentes partes del proyecto, modificar directamente los sistemas existentes para implementar las condiciones de los logros podía generar conflictos innecesarios durante la integración del código y dificultar el mantenimiento futuro.\n" +
                    "\n" +
                    "Por lo tanto, el sistema de logros debía ser modular, fácil de integrar y suficientemente flexible como para incorporar nuevas condiciones sin requerir modificaciones significativas en el código existente.",
                possibilities: "La primera solución consistía en crear una arquitectura modular en la que cada condición de logro fuera implementada como un componente independiente que pudiera añadirse al prefab o al objeto de gameplay correspondiente.\n" +
                    "\n" +
                    "Aunque este enfoque podía generar una mayor cantidad de componentes individuales y potencialmente resultar más difícil de organizar a medida que el proyecto creciera, reducía significativamente el riesgo de conflictos durante la integración del código y facilitaba la modificación o sustitución de condiciones individuales.\n" +
                    "\n" +
                    "La segunda alternativa consistía en implementar las condiciones de los logros directamente dentro de los sistemas de gameplay existentes y organizarlas mediante variables, métodos o condiciones claramente definidas.\n" +
                    "\n" +
                    "Este enfoque habría permitido mantener la lógica más centralizada y potencialmente más organizada dentro de cada sistema. Sin embargo, también habría aumentado el riesgo de conflictos durante la integración y habría generado una mayor dependencia entre la lógica de los logros y los sistemas en los que estuviera implementada. Como consecuencia, depurar y modificar los logros posteriormente habría sido más complejo.",
                decision: "Finalmente, decidimos implementar el enfoque modular.\n" +
                    "\n" +
                    "Esta arquitectura permitió que las condiciones de los logros existieran de manera independiente respecto a los sistemas principales de gameplay, mientras que seguían teniendo la capacidad de escuchar y responder a los eventos necesarios para activarse.\n" +
                    "\n" +
                    "También proporcionó a los diseñadores una mayor libertad para modificar y configurar los logros sin requerir cambios significativos en el código principal del juego. Más importante aún, la estructura modular hizo que el sistema fuera altamente mutable, permitiendo introducir nuevos tipos de logros sin necesidad de reestructurar los sistemas existentes.",
                outcome: "Aunque la implementación final dio como resultado múltiples componentes únicos, todos ellos heredaban de un componente base común. Esto nos permitió mantener una estructura consistente mientras cada logro podía implementar la lógica específica que necesitaba.\n" +
                    "\n" +
                    "El resultado fue un sistema de logros más limpio y fácil de mantener, que también podía ser depurado y modificado con mayor facilidad. Cada logro podía aislarse y probarse de manera independiente, reduciendo la necesidad de investigar sistemas de gameplay no relacionados cuando un logro no se activaba correctamente.\n" +
                    "\n" +
                    "Los beneficios de esta arquitectura fueron aún más evidentes posteriormente, cuando decidimos ampliar el número de logros disponibles. Debido a que el sistema ya era modular, agregar nuevos logros se volvió considerablemente más rápido y requirió modificaciones mínimas sobre el código existente.\n" +
                    "\n" +
                    "Este proyecto reforzó mi comprensión sobre la importancia de priorizar la mutabilidad y modularidad del código. Los sistemas no deberían diseñarse únicamente para resolver los requerimientos inmediatos, sino también para adaptarse a cambios futuros sin obligar a los desarrolladores a modificar o reestructurar partes del proyecto que no están directamente relacionadas.\n" +
                    "\n" +
                    "Al diseñar sistemas alrededor de componentes independientes y reutilizables, es posible reducir las dependencias técnicas, minimizar los conflictos dentro de un equipo y hacer que las futuras iteraciones sean considerablemente más eficientes."
            }
        }]
    },
    {
        id: 'p2',
        title: 'EcoRanger',
        description: 'EcoRanger es un proyecto desarrollado en Unity como entrega de mitad de programa del curso de Programación para Juegos, Web y Móvil de la Vancouver Film School. ' +
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
        externalLinks: "https://vi-tran.itch.io/eco-ranger",
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
        },
        CaseStudy: [{
            id: "p1",
            title: "Analisis de movimiento de enemigos",
            description: {
                context: "Este fue uno de los primeros proyectos que completé íntegramente como parte de un equipo utilizando Unity. El proyecto me proporcionó una base sólida en el desarrollo colaborativo de videojuegos y me permitió familiarizarme con diversos principios y metodologías de trabajo que continúo aplicando actualmente en proyectos más grandes y complejos.\n" +
                    "\n" +
                    "Desarrollamos el proyecto utilizando Unity, principalmente porque el equipo contaba con mayor experiencia en C# y porque varios de sus integrantes provenían de contextos artísticos o no técnicos, con poca experiencia previa en desarrollo de videojuegos. Unity ofrecía un entorno de desarrollo más accesible e intuitivo para el equipo en comparación con alternativas como Godot o Unreal Engine.",
                possibilities: "Una de las primeras alternativas consideradas fue reemplazar completamente la arquitectura existente de la IA por otro enfoque, como un árbol de comportamiento (behavior tree) o una cola de acciones (action queue). Sin embargo, reconstruir el sistema desde cero no garantizaba que los problemas subyacentes fueran solucionados y, además, podía introducir nuevos errores.\n" +
                    "\n" +
                    "La segunda posibilidad consistía en mantener la arquitectura existente y realizar pruebas sistemáticas para identificar y solucionar progresivamente los casos límite hasta conseguir un comportamiento consistente. Aunque este enfoque requería más tiempo, representaba una alternativa de menor riesgo dentro del alcance del proyecto y me permitía comprender con mayor profundidad el sistema desarrollado.",
                decision: "Finalmente, decidí mantener el sistema existente y abordar los casos límite mediante un proceso sistemático de pruebas e iteración. Este enfoque me permitió comprender mejor la arquitectura que había implementado, identificar cómo interactuaban los diferentes estados y analizar cómo estos comportamientos afectaban la experiencia del jugador.\n" +
                    "\n" +
                    "Además, consideré que, incluso si reemplazaba completamente la arquitectura, tendría que realizar un proceso considerable de depuración y pruebas para identificar y solucionar los casos límite. Por esta razón, mejorar progresivamente el sistema existente representaba una estrategia más controlada dentro del tiempo disponible para el proyecto.",
                outcome: "Logré identificar y solucionar la mayoría de los casos límite encontrados durante el desarrollo del proyecto. Sin embargo, esta experiencia también me permitió identificar varios aspectos del proceso que podría haber gestionado de una manera más eficiente.\n" +
                    "\n" +
                    "En primer lugar, subestimé el tiempo necesario para identificar y solucionar los diferentes casos límite. Una mejor estimación del alcance y una colaboración más temprana con otros integrantes del equipo podrían haber permitido resolver algunos de estos problemas de manera más eficiente.\n" +
                    "\n" +
                    "En segundo lugar, podría haber realizado una investigación más profunda sobre arquitecturas alternativas para sistemas de inteligencia artificial. Al concentrarme principalmente en mejorar el sistema existente, reduje potencialmente la posibilidad de encontrar una solución más sencilla o eficiente.\n" +
                    "\n" +
                    "El principal costo técnico de esta decisión se hizo evidente cuando el juego comenzó a presentar problemas de rendimiento durante los enfrentamientos con una alta concentración de enemigos. En ese momento, solucioné el problema limitando la cantidad de enemigos que podían aparecer simultáneamente en cada nivel.\n" +
                    "\n" +
                    "Mirando el proyecto en retrospectiva, considero que una solución más escalable habría sido implementar un sistema de object pooling y reducir algunas llamadas innecesarias. Estas estrategias habrían disminuido el costo computacional asociado con la creación, destrucción y procesamiento constante de los objetos enemigos.\n" +
                    "\n" +
                    "En última instancia, este proyecto representó una experiencia fundamental para mi aprendizaje sobre sistemas de inteligencia artificial, depuración, toma de decisiones técnicas y gestión del alcance de un proyecto en relación con los recursos y el tiempo disponibles.",
                problem: "Uno de los principales desafíos técnicos estuvo relacionado con la inteligencia artificial de los enemigos. Estos presentaban comportamientos inconsistentes tanto durante el desplazamiento como al momento de detenerse. Durante el desarrollo identificamos múltiples casos límite en los que la IA no se comportaba de acuerdo con lo establecido en el diseño. El problema se originaba principalmente en las transiciones entre los diferentes estados de la inteligencia artificial. Esto no solamente estaba causando bugs sino tambien rompiendo el juego."
            }
        }, {
            id: "p2",
            title: "Spawn de enemigos y la dificultad",
            description: {
                context: "Uno de los principales desafíos durante el desarrollo del juego fue gestionar la aparición y eliminación de los enemigos a lo largo de los cinco minutos de duración de la partida. El sistema debía distribuir los enemigos de manera consistente, evitando tanto una cantidad excesiva como una presencia insuficiente de enemigos.\n" +
                    "\n" +
                    "Esto era especialmente importante debido a que el jugador no podía simplemente ignorar a los enemigos presentes en la arena y continuar jugando de manera efectiva. Por esta razón, la cantidad y frecuencia de aparición de enemigos tenían un impacto directo tanto en la dificultad del juego como en la experiencia general del jugador.",
                problem: "La aparición simultánea de demasiados enemigos generaba problemas de rendimiento, balance de juego y experiencia del usuario. Por otro lado, generar una cantidad insuficiente de enemigos reducía el nivel de desafío esperado y podía hacer que la experiencia resultara vacía o repetitiva.\n" +
                    "\n" +
                    "Por lo tanto, el sistema debía encontrar un equilibrio entre el rendimiento técnico y una experiencia de juego atractiva.",
                possibilities: "Una de las posibles soluciones consistía en implementar una cantidad fija de enemigos a lo largo del nivel. Este enfoque habría sido relativamente sencillo y predecible de gestionar, pero también habría hecho que la experiencia fuera más repetitiva y habría reducido la posibilidad de ajustar dinámicamente la dificultad.\n" +
                    "\n" +
                    "Otra alternativa consistía en implementar un sistema de aparición basado en temporizadores, que permitiera a los diseñadores modificar tanto la cantidad como la frecuencia de aparición de los enemigos durante el proceso de producción. Este enfoque proporcionaba una flexibilidad considerablemente mayor, aunque también implicaba un mayor riesgo de generar errores e inconsistencias a medida que el sistema fuera modificado durante el desarrollo.",
                decision: "Decidimos implementar un sistema de aparición basado en temporizadores que generara una cantidad específica de enemigos en posiciones aleatorias a intervalos determinados.\n" +
                    "\n" +
                    "Esta decisión estuvo principalmente relacionada con el hecho de que el balance del juego todavía se encontraba sujeto a cambios. Debido a que esperábamos que los diseñadores continuaran realizando pruebas y ajustando la dificultad, el sistema de aparición debía ser flexible y fácil de modificar.\n" +
                    "\n" +
                    "En lugar de optimizar el sistema exclusivamente para su configuración inicial, priorizamos la creación de una estructura capaz de adaptarse a futuros cambios de diseño sin requerir modificaciones significativas en su funcionamiento interno.",
                outcome: "Aunque el sistema introdujo algunos errores adicionales durante el desarrollo, finalmente funcionó de acuerdo con lo esperado y proporcionó a los diseñadores la flexibilidad necesaria para probar y modificar el balance de dificultad del juego. Esto permitió ajustar posteriormente la progresión de dificultad a partir de las pruebas de juego y los comentarios obtenidos durante la producción.\n" +
                    "\n" +
                    "En comparación con el sistema de cantidad fija de enemigos, la otra alternativa probablemente habría sido más segura desde el punto de vista técnico y más sencilla de controlar. Sin embargo, habría generado una experiencia de juego más predecible y habría sido considerablemente más difícil de adaptar si los requisitos de diseño hubieran cambiado.\n" +
                    "\n" +
                    "Esta experiencia me permitió comprender la importancia de encontrar un equilibrio entre estabilidad técnica y flexibilidad del sistema. Una solución no debería limitarse a resolver el problema inmediato, sino que también debe considerar la posibilidad de que los requerimientos cambien durante el desarrollo. En este caso, aceptar un pequeño nivel adicional de riesgo técnico nos permitió crear un sistema que apoyaba mejor la iteración y la colaboración entre programación y diseño de videojuegos."
            }
        }]
    },
    {
        id: 'p1',
        title: '(Des)Conectado - Un juego fuera del dispositivo',
        description: 'Este proyecto fue desarrollado en colaboración con la Universidad de los Andes. ' +
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
        },
        CaseStudy: [
            {
                id: "p1",
                title: "Assets y dispositivo movil",
                description: {
                    context: "Durante la gestión de los assets del juego, particularmente de los elementos correspondientes al fondo, uno de los principales desafíos que encontré durante el desarrollo para dispositivos móviles fue garantizar que los elementos visuales se adaptaran correctamente a las diferentes dimensiones de pantalla.\n" +
                        "\n" +
                        "Este problema se originó a partir de un error de diseño de mi parte. Durante el desarrollo, realicé múltiples pruebas utilizando un único dispositivo y diseñé los assets específicamente alrededor de sus dimensiones. Inicialmente asumí que Unity adaptaría automáticamente estos elementos a diferentes tamaños de pantalla, lo cual no ocurrió.",
                    problem: "Los assets no se escalaban ni se adaptaban correctamente a las diferentes dimensiones de los dispositivos, lo que generaba espacios blancos visibles e inconsistencias en la presentación visual del juego.\n" +
                        "\n" +
                        "Debido a que el proyecto estaba destinado a dispositivos móviles, garantizar una experiencia visual consistente independientemente del tamaño de pantalla y la relación de aspecto era fundamental.",
                    possibilities: "La primera solución consistía en crear diferentes variantes de los assets para cada una de las dimensiones o relaciones de aspecto relevantes. Esto habría proporcionado un mayor control visual y habría permitido adaptar correctamente los elementos a cada dispositivo.\n" +
                        "\n" +
                        "Sin embargo, esta alternativa habría requerido una cantidad considerable de trabajo adicional y, para ese momento del desarrollo, el proyecto contaba con un tiempo muy limitado antes de su despliegue.\n" +
                        "\n" +
                        "La segunda alternativa consistía en implementar una capa de fondo universal capaz de cubrir el espacio restante independientemente de las dimensiones del dispositivo. Aunque este enfoque no solucionaría directamente el problema de adaptabilidad, permitiría ocultar los espacios blancos y proporcionar una presentación visual más consistente.",
                    decision: "Para ese momento, el proyecto ya se encontraba próximo a la etapa de despliegue, lo que limitaba considerablemente el tiempo disponible para reestructurar los assets.\n" +
                        "\n" +
                        "Por esta razón, decidí implementar la solución del fondo universal como una medida de mitigación a corto plazo. Al añadir una capa de fondo capaz de adaptarse al espacio disponible, pude eliminar los espacios blancos visibles y conseguir una apariencia más consistente entre diferentes dispositivos.\n" +
                        "\n" +
                        "Aunque esta no representaba la solución técnica ideal, era la alternativa más práctica considerando el tiempo restante del proyecto.",
                    outcome: "La solución permitió eliminar las inconsistencias visuales más evidentes y realizar el despliegue del juego sin los espacios blancos que aparecían inicialmente en dispositivos con diferentes dimensiones de pantalla.\n" +
                        "\n" +
                        "Sin embargo, esta experiencia también evidenció una debilidad importante en mi proceso de desarrollo. El problema podría haberse evitado realizando pruebas con múltiples dispositivos y relaciones de aspecto desde etapas más tempranas de la producción.\n" +
                        "\n" +
                        "Aprendí que, en el desarrollo para dispositivos móviles, la adaptabilidad debe considerarse desde las primeras etapas de diseño e implementación y no tratarse únicamente como un ajuste previo al lanzamiento.\n" +
                        "\n" +
                        "En futuros proyectos, establecería una estrategia de pruebas más amplia desde las primeras etapas del desarrollo, utilizando diferentes dimensiones y relaciones de aspecto para validar la composición visual antes de finalizar los assets.\n" +
                        "\n" +
                        "Esta experiencia reforzó la importancia de diseñar los elementos visuales y los sistemas teniendo en cuenta su escalabilidad y capacidad de adaptación, especialmente al desarrollar para plataformas con una gran variedad de dispositivos y configuraciones de pantalla."
                }
            }
        ]
    },
]

export const GameExpEN: Project[] = [
    {
        id: 'p3',
        title: 'Rekindled - Currently a Work in Progress',
        description: 'This is a third-person ranged combat game, featuring 2D characters in a 3D world. ' +
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
        },
        CaseStudy: [
            {
                id: "p1",
                title: "Persistant Data",
                description: {
                    context: "This project is one of the most ambitious projects I have worked on so far and represents one of the most significant steps in my development as a programmer. Throughout its development, I have gained substantial technical knowledge and practical experience, particularly in designing, implementing, and maintaining more complex gameplay systems.\n" +
                        "\n" +
                        "For this project, we decided to use Unity, primarily because we wanted to experiment with less conventional features, including the combination of 2D characters within a 3D environment. Unity provided us with a familiar development workflow while allowing us to experiment with this hybrid approach without introducing unnecessary technical complexity into the project.",
                    problem: "One of the main technical challenges involved implementing the persistent data system. The system initially experienced problems when saving and restoring gameplay data, particularly when persistent values interacted with values currently being modified during gameplay.\n" +
                        "\n" +
                        "This resulted in situations where the persistent data system could incorrectly provide the player with content that had not yet been unlocked. For example, players could gain access to powerful spells or receive achievements without fulfilling the required conditions.",
                    possibilities: "The first solution considered was implementing an internal tracker for temporary gameplay data. This system would store temporary values independently and restore them when the player died or reached an appropriate reset point.\n" +
                        "\n" +
                        "Although this approach would have been somewhat less organized from a system architecture perspective, it would have maintained a stronger relationship between the temporary data and the player's current gameplay state.\n" +
                        "\n" +
                        "The second approach was to maintain explicit references to the content the player should have unlocked at a specific point in the game and reduce the amount of information treated as persistent data. This approach provided a more structured system, but it could introduce additional processing requirements in certain edge cases.",
                    decision: "At last, I decided to combine both approaches rather than relying exclusively on one system.\n" +
                        "\n" +
                        "For more direct and controlled aspects of progression, such as the elements and spells the player had unlocked, I decided to use references to the expected progression state. These values were relatively predictable and did not depend heavily on individual player decisions.\n" +
                        "\n" +
                        "However, I recognized that this approach would not be appropriate for player statistics, where the player's actions directly influence the stored data. For these values, I implemented temporary data that is updated at each checkpoint. This ensured that player statistics were only committed to persistent storage at controlled points during the game.\n" +
                        "\n" +
                        "This hybrid approach allowed the system to distinguish between progression-based data, which could be validated against predefined references, and player-driven data, which needed to reflect the player's actual actions.",
                    outcome: "The resulting system successfully handled persistent data without incorrectly overriding gameplay values or granting players content they had not yet unlocked.\n" +
                        "\n" +
                        "The primary trade-off was an increase in the complexity of both the script architecture and the overall persistence system. As a result, the system became more sensitive to future changes and required greater consideration when introducing new gameplay features or modifying existing data structures.\n" +
                        "\n" +
                        "However, this complexity also provided a more reliable and controlled foundation for managing progression and player statistics.\n" +
                        "\n" +
                        "This experience also helped me understand the importance of designing systems with future flexibility in mind. Rather than focusing exclusively on solving the immediate problem, I learned that structuring systems to accommodate future changes can significantly reduce development friction as a project grows.\n" +
                        "\n" +
                        "As a result, I now aim to apply this approach more consistently when designing gameplay systems, particularly when dealing with persistent data, modular progression, and systems that are expected to evolve throughout development."
                }
            }, {
                id: "p2",
                title: "Achievement system",
                description: {
                    context: "One of the most complex systems I developed was the achievement system. Its complexity came primarily from the fact that achievements were triggered by highly specific player actions that could not easily be generalized into a single set of conditions.\n" +
                        "\n" +
                        "Additionally, each achievement needed to interact correctly with the rest of the game's systems and their respective timing, including enemies, spells, scene transitions, and other gameplay events. This required a system capable of responding to a wide variety of conditions without interfering with the core functionality of the game.",
                    problem: "The main challenge was creating a system that could be integrated into different types of code and gameplay components while allowing other programmers to continue working on those systems independently.\n" +
                        "\n" +
                        "Since multiple programmers were working simultaneously on different parts of the project, directly modifying existing systems to implement achievement conditions could create unnecessary merge conflicts and make future maintenance more difficult.\n" +
                        "\n" +
                        "Therefore, the achievement system needed to be modular, easy to integrate, and flexible enough to accommodate new conditions without requiring significant modifications to existing code.",
                    possibilities: "The first solution was to create a modular architecture in which each achievement condition was implemented as an independent component that could be attached to the appropriate prefab or gameplay object.\n" +
                        "\n" +
                        "Although this approach could potentially result in a larger number of individual components and become more difficult to organize as the project grew, it significantly reduced the risk of merge conflicts and made individual achievement conditions easier to modify or replace.\n" +
                        "\n" +
                        "The second option was to implement the achievement conditions directly within the existing gameplay systems and organize them through clearly defined variables, methods, or conditions.\n" +
                        "\n" +
                        "This approach would have kept the logic more centralized and potentially more organized within each system. However, it also introduced a greater risk of merge conflicts and made the achievement logic more dependent on the implementation of the systems in which it was contained. As a result, debugging and modifying achievements in the future would have been more difficult.",
                    decision: "In the end, I decided to implement the modular approach.\n" +
                        "\n" +
                        "This architecture allowed achievement conditions to exist independently from the core gameplay systems while still being able to listen and respond to the events required to trigger them.\n" +
                        "\n" +
                        "It also gave designers greater freedom to modify and configure achievements without requiring significant changes to the underlying gameplay code. More importantly, the modular structure made the system highly mutable, allowing new achievement types to be introduced without restructuring existing systems.",
                    outcome: "Although the final implementation resulted in multiple unique components, all of them inherited from a common base component. This allowed us to maintain a consistent structure while giving each achievement the specific logic it required.\n" +
                        "\n" +
                        "The result was a cleaner and more maintainable achievement system that was easier to debug and modify. Each achievement could be isolated and tested independently, reducing the need to investigate unrelated gameplay systems when an achievement failed to trigger correctly.\n" +
                        "\n" +
                        "The benefits of this architecture became even more apparent later in development when we decided to expand the number of achievements. Because the system was already modular, adding new achievements became significantly faster and required minimal changes to existing code.\n" +
                        "\n" +
                        "This project reinforced my understanding of the importance of prioritizing code mutability and modularity. Systems should not only be designed to solve their immediate requirements, but also to accommodate future changes without forcing developers to modify or restructure unrelated parts of the project.\n" +
                        "\n" +
                        "By designing systems around independent and reusable components, it becomes possible to reduce technical dependencies, minimize conflicts within a team, and make future iteration significantly more efficient."
                }
            }
        ]
    },
    {
        id: 'p2',
        title: 'EcoRanger',
        description: 'EcoRanger is a project developed in Unity as a mid-program deliverable for the Game, Web & Mobile Programming course at Vancouver Film School. ' +
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
        externalLinks: "https://vi-tran.itch.io/eco-ranger",
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
        },
        CaseStudy: [{
            id: "p1",
            title: "Enemy movement analysis",
            description: {
                context: "This was one of the first projects I fully completed as part of a team using Unity. It provided me with a strong foundation in collaborative game development and introduced me to many of the principles and workflows that I continue to apply to larger and more complex projects today.\n" +
                    "\n" +
                    "We developed the project in Unity, primarily because our team had greater experience with C# and because several team members came from artistic or non-technical backgrounds with limited experience in game development. Unity provided a more accessible and intuitive development environment for the team compared with alternatives such as Godot or Unreal Engine.",
                possibilities: "One potential solution was to replace the existing AI architecture entirely with a different approach, such as a behavior tree or an action queue. However, restructuring the entire system would not necessarily guarantee that the underlying issues would be resolved and could potentially introduce additional problems.\n" +
                    "\n" +
                    "The second option was to maintain the existing architecture and systematically test and resolve the identified edge cases until the AI behaved consistently. Although this approach was more time-consuming, it represented a lower-risk solution within the project's scope and allowed me to gain a deeper understanding of the system.",
                decision: "Ultimately, I decided to maintain the existing system and address the edge cases through systematic testing and iteration. This approach allowed me to better understand the architecture I had implemented, identify how individual states interacted with one another, and evaluate how these behaviors affected the player experience.\n" +
                    "\n" +
                    "My reasoning was also that, even if I replaced the existing architecture, I would still need to perform extensive debugging and testing to identify and resolve edge cases. Therefore, improving the current system provided a more controlled approach within the project's available time.", 
                outcome: "I was able to identify and resolve the majority of the edge cases discovered during the project's development period. However, the experience also highlighted several areas where I could have approached the development process more effectively.\n" +
                    "\n" +
                    "First, I underestimated the amount of time required to identify and resolve edge cases. With better time estimation and earlier collaboration with other team members, some of these issues could have been addressed more efficiently.\n" +
                    "\n" +
                    "Second, I could have conducted more research into alternative AI architectures during development. By focusing primarily on improving the existing system, I potentially limited the opportunity to discover a simpler or more efficient solution.\n" +
                    "\n" +
                    "The main technical trade-off of this decision became apparent when the game experienced performance issues during encounters with a high concentration of enemies. At the time, I addressed this by limiting the number of enemies that could be spawned simultaneously within a level.\n" +
                    "\n" +
                    "Looking back, I recognize that a more scalable solution would have been to implement an object pooling system and reduce unnecessary function calls. These approaches would have reduced the computational overhead associated with repeatedly creating, destroying, and processing enemy objects.\n" +
                    "\n" +
                    "This project ultimately became an important learning experience in AI systems, debugging, technical decision-making, and balancing development scope against available resources.",
                problem: "One of the main technical challenges involved the enemy AI. The enemies had inconsistent movement and stopping behaviors, caused by errors in the transitions between different AI states. During development, we identified several edge cases in which the AI would behave differently from its intended design. This not only on a problematic, but on a buggy way, which it could break the game at some points"
            }
        }, {
            id: "p2",
            title: "Enemy spawn and difficulty",
            description: {
                context: "One of the main challenges during the development of the game was managing how enemies were spawned and despawned throughout the five-minute gameplay period. The system needed to distribute enemies consistently while avoiding both excessive spawning and insufficient enemy presence.\n" +
                    "\n" +
                    "This was particularly important because the player could not simply ignore enemies in the arena and still progress effectively. As a result, the number and frequency of enemies had a direct impact on both the game's difficulty and the overall player experience.",
                problem: "Spawning too many enemies simultaneously created problems with performance, gameplay balance, and the overall player experience. On the other hand, spawning too few enemies reduced the intended level of challenge and could make the gameplay feel empty or repetitive.\n" +
                    "\n" +
                    "The system therefore needed to maintain a balance between technical performance and an engaging gameplay experience.",
                possibilities: "One possible solution was to implement a fixed number of enemies throughout the level. This approach would have been relatively simple and predictable to manage, but it would also have made the gameplay more repetitive and reduced the possibility of dynamically adjusting the difficulty.\n" +
                    "\n" +
                    "Another option was to implement a timed spawning system that allowed designers to modify the number and frequency of enemies throughout the production process. This approach provided significantly more flexibility, but it also introduced a greater risk of bugs and inconsistencies as the system was modified during development.",
                decision: "We decided to implement a timed spawning system that would spawn a specific number of enemies at randomized locations at defined intervals.\n" +
                    "\n" +
                    "This decision was primarily based on the fact that the game's balance was still subject to change. Because we expected designers to continue testing and adjusting the difficulty, the spawning system needed to be flexible and easy to modify.\n" +
                    "\n" +
                    "Rather than optimizing the system exclusively for its initial configuration, we prioritized creating a system that could adapt to future design changes without requiring significant modifications to its underlying structure.",
                outcome: "Although the system introduced some additional bugs during development, it ultimately worked as intended and provided the designers with the flexibility they needed to test and modify the game's difficulty balance. This allowed the final difficulty progression to be refined later in production based on playtesting and feedback.\n" +
                    "\n" +
                    "Compared with the fixed-enemy approach, the alternative would likely have been safer from a technical perspective and easier to control. However, it would have resulted in a more predictable gameplay experience and would have been significantly more difficult to adapt if the design requirements changed.\n" +
                    "\n" +
                    "This experience helped me understand the importance of balancing technical stability with system flexibility. A solution should not only solve the immediate problem, but also consider how likely the requirements are to change throughout development. In this case, accepting a small amount of additional technical risk allowed us to create a system that better supported iteration and collaboration between programming and game design."
            }
        }]
    },
    {
        id: 'p1',
        title: '(Dis)Connected - An Off-Device Game',
        description: 'This project was developed in collaboration with Universidad de los Andes. ' +
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
        },
        CaseStudy: [
            {
                id: "p1",
                title: "Assets management with Device responsiveness",
                description: {
                    context: "While managing the game's assets, particularly the background elements, one of the main challenges I encountered during the mobile development process was ensuring that the visual assets adapted correctly to different device dimensions.\n" +
                        "\n" +
                        "This issue originated from a design mistake on my part. During development, I repeatedly tested the game on a single device and created the assets specifically around its dimensions. I initially assumed that Unity would automatically adapt these assets to different screen sizes, which was not the case.",
                    problem: "The assets did not scale or adapt correctly to different device dimensions, resulting in visible white spaces and inconsistencies in the visual presentation of the game.\n" +
                        "\n" +
                        "Because the project was intended for mobile devices, supporting different screen sizes and aspect ratios was essential to maintaining a consistent user experience.",
                    possibilities: "The first solution was to create different asset variants for each relevant screen dimension or aspect ratio. This would have provided greater visual control and ensured that the assets were properly adapted to each device.\n" +
                        "\n" +
                        "However, this approach would have required a significant amount of additional work, and by that stage of development, the project had limited time remaining before deployment.\n" +
                        "\n" +
                        "The second option was to implement a universal background layer that could fill the remaining space regardless of the device's dimensions. While this approach would not solve the underlying responsiveness issue, it would prevent the white spaces from being visible and provide a more consistent visual presentation.",
                    decision: "At that point, the project was already approaching deployment, which significantly limited the time available for restructuring the assets.\n" +
                        "\n" +
                        "Therefore, I decided to implement the universal background solution as a short-term mitigation. By adding a background layer that could adapt to the available space, I was able to eliminate the visible white areas and provide a more consistent appearance across different devices.\n" +
                        "\n" +
                        "Although this was not the ideal technical solution, it represented the most practical option within the project's remaining development time.",
                    outcome: "The solution successfully eliminated the most noticeable visual inconsistencies and allowed the game to be deployed without the white spaces that were initially appearing on devices with different screen dimensions.\n" +
                        "\n" +
                        "However, this experience also highlighted an important weakness in my development process. The problem could have been avoided by testing the game across multiple devices and aspect ratios much earlier in production.\n" +
                        "\n" +
                        "I learned that mobile development requires responsiveness to be considered from the beginning of the design and implementation process rather than treated as a final-stage adjustment.\n" +
                        "\n" +
                        "In future projects, I would establish a broader testing strategy from the early stages of development, using multiple screen dimensions and aspect ratios to validate the visual layout before finalizing the assets.\n" +
                        "\n" +
                        "This experience reinforced the importance of designing assets and systems with scalability and adaptability in mind, particularly when developing for platforms with highly varied hardware and display configurations."
                }
            }, {
                id: "p2",
                title: "Touch controls and unity mobile",
                description: {
                    context: "This was one of my first times using Unity, and jump to a mobile game was not a good choice." +
                        "During the early development, even with previews research, touch managing for mobile was really unstable." +
                        "This one presented constant bugs or blocking elements inside the raycast for the touch. ",
                    problem: "The touch Unity Manager package was really unstable, causing issues with the gameObjects on scene, even for the basic elements of the game.",
                    possibilities: "My first option was to try to patch it after multiple attempts, although it will consume a lot more of time and resources." +
                        "The second option was try to reduce the touch as much as possible, and do everything with UI form Unity",
                    decision: "Because of time and because I didn't have the resources to do so, ",
                    outcome: ""
                }
            }
        ]
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
