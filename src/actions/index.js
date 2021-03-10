// action:  dispatching an action issending a signal to the store.
export const logIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    }
}

export const getUser = () => {
    return {
        type: 'GET_USER'
    }
}