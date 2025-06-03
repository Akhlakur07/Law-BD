import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <Error></Error>
    }
])