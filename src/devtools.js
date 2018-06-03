import window from 'global/window';
import { compose } from 'redux';
import * as Actions from './actions';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators: Object.values(Actions).filter((f) => f.name !== 'updateState')
    }) : compose;

export default composeEnhancers;