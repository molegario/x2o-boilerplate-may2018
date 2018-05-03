import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

describe('tests for removeExpense', ()=>{

    const action = removeExpense({id: 12});
    const noParamsAction = removeExpense();

    test('Should setup a remove request by passing an object with a defined id property.', ()=>{
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 12
        });
    });

    test('Should return a remove request with an id set to undefined when no args are passed.', ()=>{
        expect(noParamsAction).toEqual({
            type: 'REMOVE_EXPENSE',
            id: undefined
        });
    });

});

describe('tests for addExpense', ()=>{

    const expenseData = {
        description: 'XXXX -test- OOO',
        note: 'XX -- test -- XX',
        amount: 1110,
        createdAt: 22220
    };

    const action = addExpense(expenseData);
    const noParamsAction = addExpense();

    test('Should set up an add request with the data given', ()=>{
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
    });

});

describe('tests for editExpense', ()=>{
    const updateData = {
        description: 'XXX',
        note: 'YYYYY',
        amount: 123,
        createdAt: 5656
    };
    const action = editExpense(12, updateData);
    const noArgsAction = editExpense();

    test('Should create the edit properties request given an id and an update object', ()=>{
        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id: 12,
            updates: {
                ...updateData
            }
        });
    });

    test('Should create an edit properties request with undefined id and updates when passed no args', ()=>{
        expect(noArgsAction).toEqual({
            type: 'EDIT_EXPENSE',
            id: undefined,
            updates: undefined
        });
    });
});