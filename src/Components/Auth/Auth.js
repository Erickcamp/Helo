import React, {Component} from 'react'

export default class Auth extends Component {
    constructor(){
        super()
        this.class = {
            username: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <input placeholder='Username' />
                <input placeholder='Password' />
            </div>
        )
    }
}