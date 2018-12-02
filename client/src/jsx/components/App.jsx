import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import ChatlogsContainar from '../containars/ChatlogsContainar'

const store = configureStore()

const App = () => (
    <Provider store={store}>
        <ChatlogsContainar />
    </Provider>
)

export default App