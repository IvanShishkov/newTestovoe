import { combineReducers } from 'redux'
import people from './people/reducer'
import person from './person/'

export default combineReducers({
    people,
    person,
})
