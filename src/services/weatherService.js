import api from './api';

export const predictCity = (cityName) => {
    const params = {
        q: cityName
    };
    return api.get('', {params});
};
