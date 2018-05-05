import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <div className="menu">
        <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
    </div>
);