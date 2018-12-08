import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import CommentHeader from './CommentHeader'
import CommentBodyContainar from '../containars/CommentBodyContainar'
import CommentFooter from './CommentFooter'

import comment from '../../css/chatLogs/comment.css'

const store = configureStore()

const Comment = () => (
    <div className={comment.containar}>
        <CommentHeader/>
        <Provider store={store}>
            <CommentBodyContainar/>
        </Provider>
        <CommentFooter/>
    </div>
)

export default Comment