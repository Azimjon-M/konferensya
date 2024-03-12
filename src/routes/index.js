import React from 'react';
import Root from '../root';
import HomePage from '../pages/Home';
import AdminPanelPage from '../pages/AdminPanel';
import LoginPage from '../pages/Login';

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
        ]
    }
]