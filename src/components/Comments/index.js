import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const iconColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      bgColor: iconColor,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  delCmnt = id => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  likeCmnt = id => {
    console.log(id)

    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {comment, name, commentList} = this.state

    console.log(commentList)

    return (
      <div className="bgContainer">
        <h1>Comments</h1>
        <div className="commentsSection">
          <div>
            <p>Say Something about 4.0 Technologies</p>
            <form onSubmit={this.onSubmitComment}>
              <input
                type="text"
                className="cmntBox"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <br />
              <textarea
                cols="49"
                rows="5"
                className="textAreaBox"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <br />
              <button type="submit" className="addBtn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="h-line" />
        <div className="cmntCount">
          <div className="cmntCountBg">{commentList.length}</div>
          <p>Comments</p>
        </div>
        <ul className="cmntContainer">
          {commentList.map(eachItem => (
            <CommentItem
              item={eachItem}
              delCmnt={this.delCmnt}
              likeCmnt={this.likeCmnt}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
