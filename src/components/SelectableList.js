import React from 'react';
import {connect} from 'react-redux';
import getFilteredCollection from '../selectors/collector';
import SelectableListItem from './SelectableListItem';

const SelectableList = ({filteredCollection}) => {
    return (
        <div>
            <h1>Items LIST</h1>
            {filteredCollection.map((itm,idx)=>(
                <SelectableListItem key={itm.id} {...itm} />
            ))}
        </div>
    );
};

const mapStateToProps = ({collector, filters})=>({
    filteredCollection: getFilteredCollection(collector, filters)
});

export default connect(mapStateToProps)(SelectableList);
