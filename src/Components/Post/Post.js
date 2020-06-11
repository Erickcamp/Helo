import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            // title: '',
            // img: '',
            // content: '',
            // username: '',
            // profile_pic: '',
            loading: true,
            post: {}
        }
    }

    componentDidMount() {
      axios
      .get(`/api/posts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
            // title: res.data,
            // img: res.data,
            // content: res.data,
            // username: res.data,
            // profile_pic: res.data,
            loading: false,
            post: res.data
        })
      })
      .catch((err) => console.log(err))
    }

    render(){
        const {title, img, content, username, profile_pic, loading} = this.state.post

        return (
            <div className='Post content_box'>
              {!loading
                ?
                <div>
                  <div className='post_header'>
                    <h2 className='title'>{title}</h2>
                    <div className='author_box'>
                      <p>by {username}</p>
                      <img src={profile_pic} alt='user' />
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