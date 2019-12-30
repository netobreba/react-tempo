import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WeatherPredictPage from './pages/WeatherPredict/WeatherPredictPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={WeatherPredictPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;