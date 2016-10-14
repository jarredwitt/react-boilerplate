import { createStore, applyMiddleware } from 'redux';

import rootReducer from 'reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
