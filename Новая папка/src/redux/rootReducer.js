import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from './reducers/authReducer';
import stepReducer from'./reducers/steps';

export default combineReducers({
    login: authReducer,
    allsteps:stepReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})