/* @flow */

import * as React from 'react';
import Store from '../store';

import { Provider } from 'react-redux';

export type Props = {};

export default class AppContainer extends React.Component<*> {
  render() {
    return (
      <Provider store={Store}>
        <div>Hello World</div>
      </Provider>
    );
  }
}
