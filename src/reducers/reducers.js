import { combineReducers } from 'redux';
import { loading, error } from './modal';


const app = combineReducers({
    loading,
    error,
})

export default app;
