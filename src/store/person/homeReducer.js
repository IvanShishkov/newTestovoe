import { SET_PERSON_HOME } from './actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_HOME:
            return action.home
        default:
            return state
    }
}
