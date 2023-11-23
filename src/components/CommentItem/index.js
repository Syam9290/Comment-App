// Write your code here

import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {item, delCmnt, likeCmnt} = props
  const {name, id, isLiked, comment, bgColor, date} = item

  console.log(date)

  const postedTime = formatDistanceToNow(date)

  const onClickDel = () => {
    delCmnt(id)
  }

  const onclickLike = () => {
    likeCmnt(id)
  }

  const islikedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikedClass = isLiked ? 'likedBlue' : ''

  return (
    <li className="listContainer">
      <div className="cmntDetailsSection">
        <div className={`personIcon iconText ${bgColor}`}>{name[0]}</div>
        <div className="cmnt-text-container">
          <div className="title-section">
            <h4 className="title"> {name}</h4>
            <p className="time"> {postedTime} ago</p>
          </div>
          <p className="cmnt">{comment} </p>
        </div>
      </div>
      <div className="delSection">
        <div className="likeContainer">
          <button type="button" className="btn" onClick={onclickLike}>
            <img src={islikedImg} className="likeImg" alt="like" />
          </button>
          <p className={`likeImg ${isLikedClass}`}>Like</p>
        </div>
        <button type="button" className="btn" onClick={onClickDel}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="likeImg"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
