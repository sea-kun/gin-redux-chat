import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = init => {
    return createStore(
        rootReducer,
        init,
        applyMiddleware(thunk)
    )
}

export default configureStore