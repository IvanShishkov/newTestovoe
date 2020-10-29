import { SET_PERSON_SHIPS } from './actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_SHIPS:
            return action.ships
        default:
            return state
    }
}
