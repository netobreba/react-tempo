import React from 'react';

import './WeatherPredictViewComponent.scss'

import { useSelector } from 'react-redux';

import { Row } from 'react-bootstrap';

function WeatherPredictViewComponent() {

    const predict = useSelector(state => state.predict);
    
    return (
        <>
            {!predict ? <h4 className="text-center">City not found.</h4> : ''}

            <Row>
                {predict ? <h3>{predict.name}</h3> : ''}
            </Row>

            <Row>
                {predict ? <h6>Now {predict.main?.temp} °C</h6> : ''} 
            </Row>

            <Row>
                {predict ? <h6 className="ml-2">Min {predict.main?.temp_min} °C</h6> : ''}
                {predict ? <h6 className="mr-2">Max {predict.main?.temp_max} °C</h6> : ''}
            </Row>
        </>
    );

}

export default WeatherPredictViewComponent;
