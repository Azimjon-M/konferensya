// USER
import Home from "../pages/Home";
// import Login from "../pages/Login";
import AdminPanel from "../pages/AdminPanel";

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

const routes = [
    {
        id: 1,
        title_id: "navHome",
        path: "/",
        element: Home,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 2,
        title_id: "muhim-sanalar",
        path: "/muhim-sanalar",
        element: MuhimSanaPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 3,
        title_id: "qo'mita",
        path: "/qo'mita",
        element: QomitaPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 4,
        title_id: "ilmiy-maslaxat-qo'mita",
        path: "/ilmiy-maslaxat-qo'mita",
        element: IMQomitaPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 5,
        title_id: "o'tgan-voqealar",
        path: "/o'tgan-voqealar",
        element: OtganVoqealarPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 6,
        title_id: "nashrlar",
        path: "/nashrlar",
        element: NashrlarPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 7,
        title_id: "to'lovlar",
        path: "/to'lovlar",
        element: TolovlarPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 8,
        title_id: "maqola-talablari",
        path: "/maqola-talablari",
        element: MaqolaTalablariPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 9,
        title_id: "maqola-jo'natish",
        path: "/maqola-jo'natish",
        element: MaqolaJonatishPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 10,
        title_id: "bog'lanish",
        path: "/bog'lanish",
        element: BoglanishPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 11,
        title_id: "asosiy-maruzachilar",
        path: "/asosiy-maruzachilar",
        element: AsosiyMaruzachiPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    }, 

    {
        id: 12,
        title_id: "taklif-etilganlar",
        path: "/taklif-etilganlar",
        element: TaklifEtilganPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 13,
        title_id: "authors",
        path: "/authors",
        element: AuthorPage,
        isPrivate: false,
        hidden: false,
        role: "user",
    },
    {
        id: 14,
        title_id: "admin-panel",
        path: "/admin-panel",
        element: AdminPanel,
        isPrivate: true,
        hidden: true,
        role: "admin",
    },
];

export default routes;
