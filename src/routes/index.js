import React from 'react';
import Root from '../root';
import HomePage from '../pages/Home';
import AdminPanelPage from '../pages/AdminPanel';

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
        ]
    }
]