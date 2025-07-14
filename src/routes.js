/* eslint-disable */

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

/* Home */
const HomePage = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/about/About'));

const AppRoutes = ({ }) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route
                path='/'
                element={<HomePage />}
            />
            <Route
                path='/home'
                element={<AboutPage />}
            />
        </Routes>
    </Suspense>
);

export default AppRoutes;
