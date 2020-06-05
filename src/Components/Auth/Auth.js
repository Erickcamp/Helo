import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


export default class Auth extends Component {
    constructor(){
        super()
        this.class = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        const {push} = this.props.history
        e.preventDefault()
        const {username, password} = this.state
        axios
        .post('/auth/login', {username, password})
        .then(res => {
            
        })
    }

    render(){
        return(
            <div>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}