import expenses from '../fixtures/expenses';
import getFilteredExpenses from '../../selectors/expenses';

describe('tests for text filtering feature', ()=>{
    const text='xxx';

    test('Should filter list bases on text given', ()=>{
        const action = getFilteredExpenses(expenses, {
            text,
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        });
        expect(action).toEqual([
            expenses[1],
            expenses[0],
            expenses[2]
        ]);
    });
});