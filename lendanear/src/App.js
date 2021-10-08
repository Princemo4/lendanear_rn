import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppContainer from './AppContainer';
import { setI18nConfig } from './core/localization/IMLocalization';

const store = configureStore();

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
    setI18nConfig();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer screenProps={{ }} />
      </Provider>
    );
  }
}
