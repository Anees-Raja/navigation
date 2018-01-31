import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'; // 5.0.6
import { addNavigationHelpers } from 'react-navigation'; // 1.0.0-beta.27
import 'redux'; // 3.7.2

import getStore from './src/store';
import LoginNavigator from './src/config';

class AppWithoutNavState extends Component {
  render() {
    return (
      <LoginNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.NavigationReducer,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  NavigationReducer: state.NavigationReducer,
});

const AppWithNavState = connect(mapStateToProps)(AppWithoutNavState);

export default class App extends Component {
  render() {
    return (
      <Provider store={getStore()}>
        <AppWithNavState />
      </Provider>
    );
  }
}