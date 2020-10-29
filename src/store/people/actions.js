export const SET_PEOPLE = 'SET_PEOPLE'

export function getPeople() {
    return (dispatch) => {
        fetch('https://swapi.dev/api/people/')
            .then((data) => data.json())
            .then((data) => data.results)
            .then((people) => dispatch(setPeople(people)))
    }
}

export function setPeople(people) {
    return {
        type: SET_PEOPLE,
        people,
    }
}
