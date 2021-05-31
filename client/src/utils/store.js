import { createStore } from 'redux';
import reducer from './reducers'
//creates store from reducer.js file using the default store
const store = createStore(reducer);
export default store;