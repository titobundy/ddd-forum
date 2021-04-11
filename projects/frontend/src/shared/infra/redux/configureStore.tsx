
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import forum from '../../../modules/forum/redux/reducers';

const reducers = {
  forum
}

export default function configureStore(initialState={}) {
 return createStore(
    combineReducers({
      ...reducers
    }),
    initialState,
    compose(
      applyMiddleware(thunk),
      (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
 );
}