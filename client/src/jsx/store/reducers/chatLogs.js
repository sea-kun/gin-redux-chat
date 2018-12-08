import { GET_CHATLOGS_ERROR, LOAD_CHATLOGS, FETCH_CHATLOGS_SUCCESS } from '../../actions/actionTypes/chatLogs'

export const getChatlogsError = (state = false, action) => {
    switch (action.type) {
        case GET_CHATLOGS_ERROR:
            return action.hasError
        default:
            return state
    }
}

export const loadChatlogs = (state = false, action) => {
    switch (action.type) {
        case LOAD_CHATLOGS:
            return action.isLoading
        default:
            return state
    }
}

export const chatLogs = (state = [], action) => {
    switch (action.type) {
        case FETCH_CHATLOGS_SUCCESS:
            return action.chatLogs
        default:
            return state
    }
}