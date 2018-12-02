import React from 'react'
import { connect } from 'react-redux'
import { fetchChatlogs } from '../actions/actionCreators/chatLogs'
import ChatlogsList from '../components/ChatlogsList'

const mapStateToProps = state => ({
    chatLogs: state.chatLogs,
    hasError: state.getChatlogsError,
    isLoading: state.loadChatlogs
})

const mapDispatchToProps = dispatch => ({
    fetchChatlogs: (url) => dispatch(fetchChatlogs(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatlogsList)