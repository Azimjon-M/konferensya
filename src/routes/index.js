import React from 'react';
import Root from '../root';
import HomePage from '../pages/Home';
import AdminPanelPage from '../pages/AdminPanel';
import LoginPage from '../pages/Login';
import MuhimSanaPage from '../pages/MuhimSana';
import QomitaPage from '../pages/QomitaPage';
import IMQomitaPage from '../pages/IlmiyMaslahatQomita';
import OtganVoqealarPage from '../pages/OtganVoqealar';
import NashrlarPage from '../pages/Nashrlar';
import TolovlarPage from '../pages/Tolovlar';
import MaqolaTalablariPage from '../pages/MaqolaTalablari';
import MaqolaJonatishPage from '../pages/MaqolaJonatish';
import BoglanishPage from '../pages/Boglanish';
import AsosiyMaruzachiPage from '../pages/AsosiyMaruzachiPage';
import TaklifEtilganPage from '../pages/TaklifEtilgan';
import AuthorPage from '../pages/Author';

export const routes = [
    {
        element: <Root />,
        path: "/",
        children: [
            {
                element: <HomePage />,
                path: '/'
            },
            {
                element: <AdminPanelPage />,
                path: '/admin-panel'
            },
            {
                element: <LoginPage />,
                path: '/login'
            },
            {
                element: <MuhimSanaPage />,
                path: '/muhim-sanalar'
            },
            {
                element: <QomitaPage />,
                path: "/qo'mita"
            },
            {
                element: <IMQomitaPage />,
                path: "/ilmiy-maslaxat-qo'mita"
            },
            {
                element: <OtganVoqealarPage />,
                path: "o'tgan-voqealar"
            },
            {
                element: <NashrlarPage />,
                path: "nashrlar"
            },
            {
                element: <TolovlarPage />,
                path: "/to'lovlar"
            },
            {
                element: <MaqolaTalablariPage />,
                path: "/maqola-talablari"
            },
            {
                element: <MaqolaJonatishPage />,
                path: "maqola-jo'natish"
            },
            {
                element: <BoglanishPage />,
                path: "/bog'lanish"
            },
            {
                element: <AsosiyMaruzachiPage />,
                path: "/asosiy-maruzachilar"
            },
            {
                element: <TaklifEtilganPage />,
                path: "/taklif-etilganlar"
            },
            {
                element: <AuthorPage />,
                path: "/authors"
            },
        ]
    }
]