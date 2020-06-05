import React, {Component} from 'react'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.class = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    render(){
        return(
            <div>
                This Component is Dashboard
            </div>
        )
    }
}