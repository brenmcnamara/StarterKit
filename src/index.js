/* @flow */

import * as React from 'react';
import AppContainer from './components/AppContainer.react';
import ReactDOM from 'react-dom';

window.onload = () =>
  ReactDOM.render(<AppContainer />, document.getElementById('app'));
