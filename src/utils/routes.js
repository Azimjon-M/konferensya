// USER
import Home from "../pages/Home";
// import Login from "../pages/Login";
// import AdminPanel from "../pages/AdminPanel";

import MuhimSanaPage from "../pages/MuhimSana";
import QomitaPage from "../pages/QomitaPage";
import IMQomitaPage from "../pages/IlmiyMaslahatQomita";
import OtganVoqealarPage from "../pages/OtganVoqealar";
import NashrlarPage from "../pages/Nashrlar";
import TolovlarPage from "../pages/Tolovlar";
import MaqolaTalablariPage from "../pages/MaqolaTalablari";
import MaqolaJonatishPage from "../pages/MaqolaJonatish";
import BoglanishPage from "../pages/Boglanish";
import AsosiyMaruzachiPage from "../pages/AsosiyMaruzachiPage";
import TaklifEtilganPage from "../pages/TaklifEtilgan";
import AuthorPage from "../pages/Author";

import MuhimSana from "../pages/AdminMalumotlar/MuhimSana"
import Qomita from "../pages/AdminMalumotlar/Qomita"
import IlmiyMaslaxatQomita from "../pages/AdminMalumotlar/IlmiyMaslaxatQomita"
import OtganVoqealar from "../pages/AdminMalumotlar/OtganVoqealar"
import Nashr from "../pages/AdminMalumotlar/Nashr"

import AdminCarousel from "../pages/AdminHome/AdminCarousel"
import AdminWelcome from "../pages/AdminHome/AdminWelcome"
import AdminBolim from "../pages/AdminHome/AdminBolim"
import AdminJarayon from "../pages/AdminHome/AdminJarayon"
import AdminMuhimSana from "../pages/AdminHome/AdminMuhimSana"
import AdminMaqolaTopshirish from "../pages/AdminHome/AdminMaqolaTopshirish"
import AdminFotogalareya from "../pages/AdminHome/AdminFotogalareya"
import AdminVideogalareya from "../pages/AdminHome/AdminVideogalareya"

const routes = [
    {
        id: 1,
        path: "/",
        element: Home,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 2,
        path: "/muhim-sanalar",
        element: MuhimSanaPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 3,
        path: "/qo'mita",
        element: QomitaPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 4,
        path: "/ilmiy-maslaxat-qo'mita",
        element: IMQomitaPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 5,
        path: "/o'tgan-voqealar",
        element: OtganVoqealarPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 6,
        path: "/nashrlar",
        element: NashrlarPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 7,
        path: "/to'lovlar",
        element: TolovlarPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 8,
        path: "/maqola-talablari",
        element: MaqolaTalablariPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 9,
        path: "/maqola-jo'natish",
        element: MaqolaJonatishPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 10,
        path: "/bog'lanish",
        element: BoglanishPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 11,
        path: "/asosiy-maruzachilar",
        element: AsosiyMaruzachiPage,
        isPrivate: false,
        hidden: false,
    }, 

    {
        id: 12,
        path: "/taklif-etilganlar",
        element: TaklifEtilganPage,
        isPrivate: false,
        hidden: false,
    },
    {
        id: 13,
        path: "/authors",
        element: AuthorPage,
        isPrivate: false,
        hidden: false,
    },
    
    // Admin Panel
    {
        id: 14,
        path: "/admin-panel/carousel",
        element: AdminCarousel,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 15,
        path: "/admin-panel/welcome",
        element: AdminWelcome,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 16,
        path: "/admin-panel/bolim",
        element: AdminBolim,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 17,
        path: "/admin-panel/jarayon",
        element: AdminJarayon,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 18,
        path: "/admin-panel/muhim-sana",
        element: AdminMuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 19,
        path: "/admin-panel/maqola-topshirish",
        element: AdminMaqolaTopshirish,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 20,
        path: "/admin-panel/fotogalareya",
        element: AdminFotogalareya,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 21,
        path: "/admin-panel/videogalareya",
        element: AdminVideogalareya,
        isPrivate: true,
        hidden: true,
    },

    {
        id: 22,
        path: "/admin-panel/muhim-sana",
        element: MuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 23,
        path: "/admin-panel/qomita",
        element: Qomita,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 24,
        path: "/admin-panel/ilmiy-maslaxat-qomita",
        element: IlmiyMaslaxatQomita,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 25,
        path: "/admin-panel/muhim-sana",
        element: MuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 26,
        path: "/admin-panel/muhim-sana",
        element: MuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 27,
        path: "/admin-panel/otgan-voqealar",
        element: OtganVoqealar,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 27,
        path: "/admin-panel/nashr",
        element: Nashr,
        isPrivate: true,
        hidden: true,
    },
];

export default routes;
