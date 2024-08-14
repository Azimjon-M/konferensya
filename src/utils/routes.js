// USER
import Home from "../pages/Home";
// Front
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
// Admin
// Home
import AdminCarousel from "../pages/AdminHome/AdminCarousel";
import AdminWelcome from "../pages/AdminHome/AdminWelcome";
import AdminBolim from "../pages/AdminHome/AdminBolim";
import AdminJarayon from "../pages/AdminHome/AdminJarayon";
import AdminMuhimSana from "../pages/AdminHome/AdminMuhimSana";
import AdminMaqolaTopshirish from "../pages/AdminHome/AdminMaqolaTopshirish";
import AdminFotogalareya from "../pages/AdminHome/AdminFotogalareya";
import AdminVideogalareya from "../pages/AdminHome/AdminVideogalareya";
// Ma'lumot
import MuhimSana from "../pages/AdminMalumotlar/MuhimSana";
import Qomita from "../pages/AdminMalumotlar/Qomita";
import IlmiyMaslaxatQomita from "../pages/AdminMalumotlar/IlmiyMaslaxatQomita";
import OtganVoqealar from "../pages/AdminMalumotlar/OtganVoqealar";
import Nashr from "../pages/AdminMalumotlar/Nashr";
// Maqola
import MaqolaTalablar from "../pages/AdminMaqola/MaqolaTalablar";
import MaqolaJonatish from "../pages/AdminMaqola/MaqolaJonatish";
// Bog'lanish
import AdminBoglanish from "../pages/AdminBoglanish";
// Dastur
import AsosiyMaruzachi from "../pages/AdminDastur/AsosiyMaruzachi";
import TaklifEtilganlar from "../pages/AdminDastur/TaklifEtilganlar";

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
        path: "/admin-panel/home/carousel",
        element: AdminCarousel,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 15,
        path: "/admin-panel/home/welcome",
        element: AdminWelcome,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 16,
        path: "/admin-panel/home/bolim",
        element: AdminBolim,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 17,
        path: "/admin-panel/home/jarayon",
        element: AdminJarayon,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 18,
        path: "/admin-panel/home/muhim-sana",
        element: AdminMuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 19,
        path: "/admin-panel/home/maqola-topshirish",
        element: AdminMaqolaTopshirish,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 20,
        path: "/admin-panel/home/fotogalareya",
        element: AdminFotogalareya,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 21,
        path: "/admin-panel/home/videogalareya",
        element: AdminVideogalareya,
        isPrivate: true,
        hidden: true,
    },

    {
        id: 22,
        path: "/admin-panel/malumot/muhim-sana",
        element: MuhimSana,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 23,
        path: "/admin-panel/malumot/qomita",
        element: Qomita,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 24,
        path: "/admin-panel/malumot/ilmiy-maslaxat-qomita",
        element: IlmiyMaslaxatQomita,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 27,
        path: "/admin-panel/malumot/otgan-voqealar",
        element: OtganVoqealar,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 27,
        path: "/admin-panel/malumot/nashr",
        element: Nashr,
        isPrivate: true,
        hidden: true,
    },

    {
        id: 28,
        path: "/admin-panel/maqola/maqola-talab",
        element: MaqolaTalablar,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 29,
        path: "/admin-panel/maqola/maqola-jonatish",
        element: MaqolaJonatish,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 30,
        path: "/admin-panel/boglanish",
        element: AdminBoglanish,
        isPrivate: true,
        hidden: true,
    },

    {
        id: 31,
        path: "/admin-panel/dastur/asosiy-maruzachi",
        element: AsosiyMaruzachi,
        isPrivate: true,
        hidden: true,
    },
    {
        id: 32,
        path: "/admin-panel/dastur/taklif-etilganlar",
        element: TaklifEtilganlar,
        isPrivate: true,
        hidden: true,
    },
];

export default routes;
