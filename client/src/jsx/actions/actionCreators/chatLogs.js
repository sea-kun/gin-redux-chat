import { GET_CHATLOGS_ERROR, LOAD_CHATLOGS, FETCH_CHATLOGS_SUCCESS } from '../actionTypes/chatLogs'

export const getChatlogsError = status => ({
    type: GET_CHATLOGS_ERROR,
    hasError: status,
})

export const loadChatlogs = status => ({
    type: LOAD_CHATLOGS,
    isLoading: status,
})

export const fetchChatlogsSuccess = chatLogs => ({
    type: FETCH_CHATLOGS_SUCCESS,
    chatLogs,
})

export const fetchChatlogs = url => {
    return dispatch => {
        dispatch(loadChatlogs(true))

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(loadChatlogs(false))
                return response
            })
            .then(response => response.json())
            .then(chatLogs => dispatch(fetchChatlogsSuccess(chatLogs)))
            .catch(() => dispatch(getChatlogsError(true)))
    }
}