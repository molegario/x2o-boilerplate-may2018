import {createStore, combineReducers} from 'redux';
import collectorReducer from '../reducers/collector';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            collector: collectorReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;    
};