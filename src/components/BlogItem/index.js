import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {data} = this.props
    const {id, imageUrl, topic, title, author, avatarUrl} = data
    return (
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <li className="list-container">
          <img className="list-image" alt="imag" src={imageUrl} />

          <div className="list-text-container">
            <p>{topic}</p>
            <p>{title}</p>
            <div className="author-container">
              <img className="avatar-logo" alt="avatar" src={avatarUrl} />
              <p>{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
