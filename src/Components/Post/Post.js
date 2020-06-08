import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(){
        super()
        this.class = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: '',
            loading: true
        }
    }

    componentDidMount(){
        axios
        .get(`/api/post/${this.props.match.params.id}`)
        .then(res=> {
            this.setState({
                title: res.data,
                img: res.data,
                content: res.data,
                author: res.data,
                authorPicture: res.data,
                loading:false
            })
        })
    }

    render(){
        const {title, img, content, author, authorPicture, loading} = this.state
        return (
            <div className='Post content_box'>
              {!loading && title
                ?
                <div>
                  <div className='post_header'>
                    <h2 className='title'>{title}</h2>
                    <div className='author_box'>
                      <p>by {author}</p>
                      <img src={authorPicture} alt='author' />
                    </div>
                  </div>
                  <div className='post_content_box'>
                    {/* <div className='post_img' style={{ backgroundImage: `url('${img}') ` }} alt='post' ></div> */}
                    <p>{content}</p>
                  </div>
                </div>
                :
                !loading
                  ?
                  <div className='oops_box'>
                    <h2 className='title'>Oops!</h2>
                    <p>Looks like this post doesn't exist anymore</p>
                  </div>
                  :
                  <div className='load_box'>
                    <div className='load_background'></div>
                    <div className='load'></div>
                  </div>
              }
            </div>
          )
    }
}