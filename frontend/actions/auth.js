import fetch from 'isomorphic-fetch';
import {API} from '../config';

// create signup a new user
export const signup = (user) => {

    return fetch(`${API}/signup`,{

        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

// create signin a new user
export const signin = (user) => {

    return fetch(`${API}/signin`,{

        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};