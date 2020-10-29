import { SET_PEOPLE } from './actions'

const initialState = {
    allPeople: [],
    loading: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return { ...state, allPeople: action.people, loading: false }
        default:
            return state
    }
}
