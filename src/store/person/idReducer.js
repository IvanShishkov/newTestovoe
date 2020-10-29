import { SET_PERSON } from './actions'

const initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON:
            return action.id
        default:
            return state
    }
}
