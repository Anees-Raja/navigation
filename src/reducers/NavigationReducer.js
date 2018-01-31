import { NavigationActions } from 'react-navigation'; // 1.0.0-beta.27
import LoginNavigator from '../config';

//Point to a screen inside the TabNavigator!!
const INITIAL_STATE = LoginNavigator.router.getStateForAction(NavigationActions.init());

export default NavigationReducer = (state = INITIAL_STATE, action) => {
    const nextState = LoginNavigator.router.getStateForAction(action, state);

    return nextState || state;
};