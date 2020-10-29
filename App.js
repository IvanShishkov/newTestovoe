import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { MyTab } from './src/navigation/MyTab'
import reducer from './src/store/'
import { getPeople } from './src/store/people/actions'

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(getPeople())

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTab />
            </NavigationContainer>
        </Provider>
    )
}
