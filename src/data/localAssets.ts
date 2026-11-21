import type { LocalHighlightData, LocalProjectData, ProjectCategory } from "../types/index";

// Portafolio
import IMGPort from "../assets/IMGPortfolio/Base.png";
import PrePort1 from "../assets/IMGPortfolio/preproduction1.png";
import PrePort2 from "../assets/IMGPortfolio/preproduction2.png";
import ProPort from "../assets/IMGPortfolio/production.png";
import PostPort from "../assets/IMGPortfolio/postproduction.png";

// Web Experiment
import PreWeb from "../assets/FlappyBirdExperiment/preproduction.png";
import ProWeb from "../assets/FlappyBirdExperiment/production.png";
import PostWeb from "../assets/FlappyBirdExperiment/postproduction.png";

// (Des)conectado
import PreDes1 from "../assets/(Des)conectado/predes1.png";
import PreDes2 from "../assets/(Des)conectado/predes2.png";
import PreDes3 from "../assets/(Des)conectado/predes3.png";
import ProDes1 from "../assets/(Des)conectado/prodes1.png";
import ProDes2 from "../assets/(Des)conectado/prodes2.png";
import ProDes3 from "../assets/(Des)conectado/prodes3.png";
import PostDes1 from "../assets/(Des)conectado/postdes1.png";
import PostDes2 from "../assets/(Des)conectado/postdes2.png";
import DesConectado from "../assets/(Des)conectado/(des)conectado.jpg";

// CocktailApp
import imgCocktail from "../assets/CocktailApp/JulianDSilva.png";
import preCocktail from "../assets/CocktailApp/preprocess.png";
import proCocktail from "../assets/CocktailApp/process.png";
import postCocktail from "../assets/CocktailApp/postprocess.png";

// EcoRanger
import PreEco1 from "../assets/EcoRanger/preprocess01.png";
import PreEco2 from "../assets/EcoRanger/preprocess02.png";
import ProEco1 from "../assets/EcoRanger/process01.png";
import ProEco2 from "../assets/EcoRanger/process02.png";
import ProEco3 from "../assets/EcoRanger/process03.png";
import PostEco1 from "../assets/EcoRanger/postprocess01.png";
import PostEco2 from "../assets/EcoRanger/postprocess02.png";

// Rekindled
import RekPre1 from "../assets/Rekindled/preprocess01.png";
import RekPre2 from "../assets/Rekindled/preprocess02.png";
import RekPre3 from "../assets/Rekindled/preprocess03.png";
import RekPro1 from "../assets/Rekindled/process01.png";
import RekPro2 from "../assets/Rekindled/process02.png";
import RekPro3 from "../assets/Rekindled/process03.png";
import RekPro4 from "../assets/Rekindled/process04.png";
import RekPost1 from "../assets/Rekindled/current01.png";
import RekPost2 from "../assets/Rekindled/current02.png";

export const localProjects: Record<ProjectCategory, Record<string, LocalProjectData>> = {
    webProjects: {
        p1: {
            imageSrc: IMGPort,
            media: { preproduction: [PrePort2, PrePort1], production: [ProPort], postproduction: [PostPort] },
        },
        p2: {
            imageSrc: "",
            media: { preproduction: [PreWeb], production: [ProWeb], postproduction: [PostWeb] },
        },
        p3: {
            imageSrc: imgCocktail,
            media: { preproduction: [preCocktail], production: [proCocktail], postproduction: [postCocktail] },
        },
    },
    gameExp: {
        p3: {
            imageSrc: RekPost1,
            media: {
                preproduction: [RekPre1, RekPre2, RekPre3],
                production: [RekPro1, RekPro2, RekPro3, RekPro4],
                postproduction: [RekPost1, RekPost2],
            },
        },
        p2: {
            imageSrc: PostEco1,
            media: {
                preproduction: [PreEco1, PreEco2],
                production: [ProEco1, ProEco2, ProEco3],
                postproduction: [PostEco1, PostEco2],
            },
        },
        p1: {
            imageSrc: DesConectado,
            media: {
                preproduction: [PreDes1, PreDes2, PreDes3],
                production: [ProDes1, ProDes2, ProDes3],
                postproduction: [PostDes1, PostDes2],
            },
        },
    },
};

export const localHighlights: Record<string, LocalHighlightData> = {
    p1: { imgSrc: IMGPort, posInList: 0 },
    p2: { imgSrc: RekPost1, posInList: 1 },
};