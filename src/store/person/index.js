import { combineReducers } from 'redux'
import id from './idReducer'
import profile from './profileReducer'
import home from './homeReducer'
import ships from './shipsReducer'

export default combineReducers({
    id,
    profile,
    home,
    ships,
})
