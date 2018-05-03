import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Modal from 'react-modal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//init modal parent ??
Modal.setAppElement('#app');

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//addExpense - water bill
store.dispatch(addExpense({
    description: 'water bill',
    amount: 500,
    note: 'on time this month',
    createdAt: 420
}));
//addexpense - gas bill
store.dispatch(addExpense({
    description: 'gas bill',
    amount: 300,
    note: 'was roomies turn but oh well',
    createdAt: 666
}));
store.dispatch(addExpense({
    description: 'porn bill',
    amount: 310,
    note: 'cut down next month',
    createdAt: 6366
}));
store.dispatch(addExpense({
    description: 'another porn bill',
    amount: 12,
    note: 'cut down next month',
    createdAt: 220
}));
store.dispatch(addExpense({
    description: 'more porn bill',
    amount: 120,
    note: 'cut down next month',
    createdAt: 999
}));
//settextfilter - bill
// store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('porn'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
