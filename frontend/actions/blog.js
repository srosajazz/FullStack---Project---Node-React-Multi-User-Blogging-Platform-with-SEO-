import fetch from 'isomorphic-fetch';
import { API } from '../config';


export const createBlog = (blog, token) => {
    return fetch(`${API}/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog,
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories= () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


