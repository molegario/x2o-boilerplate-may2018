import uuid from 'uuid';

//ADD_ITEM
export const addItem = (
    {
        description='', 
        note='', 
        amount=0, 
        createdAt=0
    }={}
) => (
    {
        type: 'ADD_ITEM',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

//REMOVE_ITEM
export const removeItem = (
    {
        id=undefined
    }={}
) => (
    {
        type: 'REMOVE_ITEM',
        id
    }
);

//EDIT_ITEM
export const editItem = (
    id, updates) => (
    {
        type: 'EDIT_ITEM',
        id,
        updates
    }
);
