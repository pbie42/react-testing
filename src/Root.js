import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
	applyMiddleware(reduxPromise)
	// other store enhancers if any
)

export default ({ children, initialState = {} }) => {
	const store = createStore(reducers, initialState, enhancer)
	return <Provider store={store}>{children}</Provider>
}
