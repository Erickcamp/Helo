import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            // title: '',
            // img: '',
            // content: '',
            // author: '',
            // authorPicture: '',
            loading: true,
            post: {}
        }
    }

    componentDidMount() {
      axios
      .get(`/api/post/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          post: res.data,
          loading: false
        })
      })
      .catch((err) => console.log(err))
    }

    render(){
        const {title, img, content, username, profile_pic, loading} = this.state.post

        return (
            <div className='Post content_box'>
              {!loading && title
                ?
                <div>
                  <div className='post_header'>
                    <h2 className='title'>{title}</h2>
                    <div className='author_box'>
                      <p>by {username}</p>
                      <img src={profile_pic} alt='author' />
                    </div>
                  </div>
                  <div className='post_content_box'>
                    {/* <div className='post_img' style={{ backgroundImage: `url('${img}') ` }} alt='post' ></div> */}
                    <p>{content}</p>
                  </div>
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