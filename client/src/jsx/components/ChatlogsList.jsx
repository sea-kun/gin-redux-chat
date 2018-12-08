import React from 'react'
import styles from '../../css/chatLogs.css'
import { Button } from 'reactstrap'

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
            <React.Fragment>
                <ul>
                    {this.props.chatLogs.map(item => (
                        <li className={styles.hoge} key={item.id}>
                            {item.comment}
                        </li>
                    ))}
                </ul>
                <Button color="primary">Primary</Button>
            </React.Fragment>
        )
    }
}

export default ChatlogsList