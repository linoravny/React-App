import loginReducer from './loginReducer'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    userData: loginReducer
})

export default allReducers
