import React from 'react'
import Menu from './Menu'
import Comment from './Comment'
import chatLogs from '../../css/chatLogs/chatLogs.css'

const Chatlogs = () => (
    <div className={chatLogs.containar}>
        <Menu/>
        <Comment/>
    </div>
)

export default Chatlogs