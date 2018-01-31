import { combineReducers } from 'redux'; // 3.7.2

import NavigationReducer from './NavigationReducer';
import MatchStackReducer from './MatchStackReducer';

const MainReducer = combineReducers({
    NavigationReducer,
    MatchStackReducer,
});

export default MainReducer;