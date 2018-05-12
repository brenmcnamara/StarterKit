/* @flow */

import AppContainer from './components/AppContainer.react';
import React from 'react';
import ReactDOM from 'react-dom';

import nullthrows from 'nullthrows';

window.onload = function() {
  ReactDOM.render(
    <AppContainer />,
    nullthrows(document.getElementById('root')),
  );
};
