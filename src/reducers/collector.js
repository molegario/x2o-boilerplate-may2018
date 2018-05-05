const initialCollectorState = [];
export default (state=initialCollectorState, action) => {
    switch (action.type) {
    case 'ADD_ITEM':
        return [
            ...state, 
            action.expense
        ];
        break;
    case 'REMOVE_ITEM':
        return state.filter(({id})=>id!==action.id);
        break;
    case 'EDIT_ITEM':
        return state.map((itm,idx)=>itm.id===action.id ? {
            ...itm,
            ...action.updates
        } : itm);
    default:
        return state;
    }
};
