/* @flow */

import * as React from 'react';
import App from './App.react';
import Store from '../store';

import {Provider} from 'react-redux';

export type Props = {};

export default class AppContainer extends React.Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <App />
      </Provider>
    );
  }
}
