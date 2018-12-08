import React from  'react'
import commentBlock from '../../css/chatLogs/commentBlock.css'

const CommentBlock = props => (
    <div className={commentBlock.area}>
        <div>
            <span className={commentBlock.user}>{props.user}</span>
            <span className={commentBlock.time}>{props.created_at}</span>
        </div>
        <div>{props.comment}</div>
    </div>
)

export default CommentBlock