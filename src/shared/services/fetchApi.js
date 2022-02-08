import { API } from "./api";



export const registerUser = (formData) => {
    API.post('/users/register', formData).then(res => {
        console.log('Register user', res);
    })
}

export const updateUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    API.put(`/users/${user._id}`, user).then(res => {
        console.log('Updated user', res);
    })
}

export const getUser = (id) => {
    API.get(`/users/${id}`).then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
    })
}

export const loginUser = (formData) => {
    API.post('/users/login', formData).then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        //setJwt(res.data.token);
    })
}

export const logoutUser = () => {
    API.post('/users/logout').then(res => {
        localStorage.setItem('token', null)
        localStorage.setItem('user', null)
        //setJwt(res.data.token);
    })
}

export const getAllergens = () => {
    API.get('/allergens').then(res => {
        return res;
    })
}

export const getProduct = (id) => {
    API.get(`/products/${id}`).then(res => {
        return res;
    })
}


export const getSearchs = () => {
    API.get(`/searchs`).then(res => {
        return res;
    })
}


export const getSearch = (id) => {
    API.get(`/searchs/${id}`).then(res => {
        return res;
    })
}
