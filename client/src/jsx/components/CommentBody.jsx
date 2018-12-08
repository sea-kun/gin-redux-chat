import React from 'react'
import CommentBlock from './CommentBlock'
import commentBody from '../../css/chatLogs/commentBody.css'

class CommentBody extends React.Component {
    componentDidMount() {
        this.props.fetchChatlogs('http://localhost:8080/chatLog/')
    }

    render() {
        if (this.props.hasError) {
            return <p>error</p>
        }
        if (this.props.isLoading) {
            return <p>loading</p>
        }

        return (
            <div className={commentBody.containar}>
                {this.props.chatLogs.map(item => (
                    <CommentBlock
                        key={item.id}
                        user={item.user}
                        comment={item.comment}
                        created_at={item.created_at}
                    />
                ))}
            </div>
        )
    }
}

export default CommentBody