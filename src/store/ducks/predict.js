import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    changePredict: ['predict']
});

const INITIAL_STATE = null;

const changePredic = (state = INITIAL_STATE, action) => {
    return action.predict ? action.predict : null;
};

export default createReducer(INITIAL_STATE, {
    [Types.CHANGE_PREDICT]: changePredic
});