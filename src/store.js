import { createStore } from 'redux'; // 3.7.2

import MainReducer from './reducers';


function getStore() {

    
    let store = createStore(
        MainReducer,
    );

    return store;
}

export default getStore;