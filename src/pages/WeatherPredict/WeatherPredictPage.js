import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './WeatherPredictPage.scss';

import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input';
import WeatherPredictViewComponent from '../../components/WeatherPredictView/WeatherPredictViewComponent';
import * as weatherService from '../../services/weatherService'

import { Creators as PredictActions } from '../../store/ducks/predict';

function WeatherPredictPage() {

    const dispatch = useDispatch();
    const [city, setCity] = useState(null);

    useEffect(() => {
        if(city) {
            weatherService.predictCity(city.trim()).then(result => {
                dispatch(PredictActions.changePredict(result.data));
            }).catch(err => {
                dispatch(PredictActions.changePredict());
            });
        }
    }, [city, dispatch]);

    return (
        <Row>
            <Col md={{ span: 8, offset: 2 }} className="d-flex justify-content-center mt-5">
                <Card>

                    <Card.Header>
                        <Card.Title>Weather Predict</Card.Title>
                    </Card.Header>

                    <Card.Body>

                        <Row>
                            <Col md={6} className="d-flex justify-content-center flex-column align-items-center">
                                <Form onSubmit={(event) => {
                                    event.preventDefault();
                                    setCity(event.target.value);
                                }}>
                                    <Form.Group>
                                        <Form.Label>City *</Form.Label>
                                        <InputGroup>
                                        <DebounceInput
                                            className="form-control"
                                            placeholder="Enter to city"
                                            minLength={2}
                                            debounceTimeout={300}
                                            onChange={(event) => setCity(event.target.value)} />
                                            <InputGroup.Append>
                                                <Button onClick={(event) => setCity(event.target.value)}>Search</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                                <WeatherPredictViewComponent></WeatherPredictViewComponent>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default WeatherPredictPage;