import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Modal from 'react-modal';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getFilteredCollection from './selectors/collector';
import {addItem} from './actions/collector';
import {setStartDate, setEndDate} from './actions/filters';

//init modal parent ??
Modal.setAppElement('#app');

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(state);
    const filteredCollection = getFilteredCollection(state.collector, state.filters);
    console.log(filteredCollection);
});

//post init actions
store.dispatch(addItem({
    description: 'water bill',
    amount: 50000,
    note: 'on time this month',
    createdAt: 420
}));
store.dispatch(addItem({
    description: 'gas bill',
    amount: 150000,
    note: 'on time this month',
    createdAt: -420
}));
store.dispatch(addItem({
    description: 'power bill',
    amount: 5000,
    note: 'on time this month',
    createdAt: 420000
}));
store.dispatch(setStartDate());
store.dispatch(setEndDate());
//post init actions

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
