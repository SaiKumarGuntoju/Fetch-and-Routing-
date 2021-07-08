import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responses = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await responses.json()
    const updateData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      content: data.content,
      id: data.id,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogDetails: updateData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails} = this.state
    const {title, avatarUrl, content, author, imageUrl} = blogDetails
    return (
      <div>
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-info">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
