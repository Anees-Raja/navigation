import { NavigationActions } from 'react-navigation'; // 1.0.0-beta.27
import MatchStackNavigator from '../config';

//Point to a screen inside the TabNavigator!!
const INITIAL_STATE = MatchStackNavigator.router.getStateForAction(NavigationActions.init());

export default MatchStackReducer = (state = INITIAL_STATE, action) => {
    const nextState = MatchStackNavigator.router.getStateForAction(action, state);

    return nextState || state;
};