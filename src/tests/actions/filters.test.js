import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';

describe('tests for setTextFilter', ()=>{
    const text = 'TEST TEXT XXXX---YYYY';

    test('Should create text filter update request from given text', ()=>{
        const action = setTextFilter(text);
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text
        });
    });

    test('Should create an empty filter text update request', ()=>{
        const action = setTextFilter();
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: undefined
        });
    });
});

describe('tests for sortByDate, sortByAmount', ()=>{
    test('Should send a sort by date request', ()=>{
        expect(sortByDate()).toEqual({
            type: 'SORT_BY_DATE'
        });
    });

    test('Should send a sort by amount request', ()=>{
        expect(sortByAmount()).toEqual({
            type: 'SORT_BY_AMOUNT'
        });
    });
});

describe('tests for setStartDate, setEndDate', ()=>{
    const date = 1500;
    test('Should send a set start date request with given date', ()=>{
        expect(setStartDate(date)).toEqual({
            type: 'SET_START_DATE',
            date
        });
    });
    test('Should send a set end date request with given date', ()=>{
        expect(setEndDate(date)).toEqual({
            type: 'SET_END_DATE',
            date
        });
    });
});