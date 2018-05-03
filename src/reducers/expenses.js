const expensesReducerDefaultState = [];
export default (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_EXPENSE':
        return [
            ...state, 
            action.expense
        ];
        break;
    case 'REMOVE_EXPENSE':
        return state.filter(({id})=>id!==action.id);
        break;
    case 'EDIT_EXPENSE':
        return state.map((itm,idx)=>itm.id===action.id ? {
            ...itm,
            ...action.updates
        } : itm);
    default:
        return state;
    }
};
