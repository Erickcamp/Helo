import axios from 'axios'

const initialState = {
    user: {username: '', profile: '', userId: ''}
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return{
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')

    return {
        type: GET_USER,
        payload: user
    }
}

