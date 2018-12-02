import React from 'react'

class ChatlogsList extends React.Component {
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

        console.log(this.props.chatLogs)
        return (
            <ul>
                {this.props.chatLogs.map(item => (
                    <li key={item.id}>
                        {item.comment}
                    </li>
                ))}
            </ul>
        )
    }
}

export default ChatlogsList