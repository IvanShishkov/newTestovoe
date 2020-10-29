export const SET_PERSON = 'SET_PERSON'
export const SET_PERSON_PROFILE = 'SET_PERSON_PROFILE'
export const SET_PERSON_HOME = 'SET_PERSON_HOME'
export const SET_PERSON_SHIPS = 'SET_PERSON_SHIPS'

export function setPerson(id) {
    return {
        type: SET_PERSON,
        id,
    }
}

export function setPersonProfile(profile) {
    return {
        type: SET_PERSON_PROFILE,
        profile,
    }
}

export function setPersonHome(home) {
    return {
        type: SET_PERSON_HOME,
        home,
    }
}

export function setPersonShips(ships) {
    return {
        type: SET_PERSON_SHIPS,
        ships,
    }
}

export function getPersonProfile(id) {
    return (dispatch) =>
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((data) => data.json())
            .then((profile) => {
                dispatch(setPersonProfile(profile))
                dispatch(getPersonHome(profile.homeworld))
                dispatch(getPersonShips(profile.starships))
            })
}

export function getPersonHome(homeURL) {
    return (dispatch) =>
        fetch(homeURL)
            .then((data) => data.json())
            .then((home) => dispatch(setPersonHome(home)))
}

export function getPersonShips(shipsURLS) {
    return (dispatch) =>
        Promise.all(
            shipsURLS.map((shipsURLS) =>
                fetch(shipsURLS).then((res) => res.json())
            )
        ).then((ships) => dispatch(setPersonShips(ships)))
}
