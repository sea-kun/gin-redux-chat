import { combineReducers } from 'redux'
import { getChatlogsError, loadChatlogs, chatLogs } from './chatLogs'

export default combineReducers({
    getChatlogsError,
    loadChatlogs,
    chatLogs
})