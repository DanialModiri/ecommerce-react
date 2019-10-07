import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import phone from './phone';

export default combineReducers({
    form: formReducer,
    phones: phone
})