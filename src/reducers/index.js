import loginReducer from './loginReducer'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLoggedIn: loginReducer
})

export default allReducers
