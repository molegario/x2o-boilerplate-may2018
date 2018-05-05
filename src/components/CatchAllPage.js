import React from 'react';
import {Link} from 'react-router-dom';

const CatchallPage = () => (
    <div>
        <p>404 HERE</p>
        <p><Link to="/">Go Home!!!</Link></p>
    </div>
);

export default CatchallPage;