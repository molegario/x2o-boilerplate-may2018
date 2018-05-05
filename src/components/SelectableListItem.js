import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

export default ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p><span>${Number(amount/100).toFixed(2)}</span>-<span>{moment(createdAt).format('MMM Do, YYYY')}</span></p>
    </div>
);
