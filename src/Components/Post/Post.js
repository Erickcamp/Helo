import React, {Component} from 'react'

export default class Post extends Component {
    constructor(){
        super()
        this.class = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    render(){
        return(
            <div>
                This Component is Post
            </div>
        )
    }
}