import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])