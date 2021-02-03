import React from 'react';
import './app-header.scss';

const   AppHeader = ({liked, all}) => (
    <header className="header">
        <h1 className="header__nick">Sizov Boris</h1>
        <h2 className="header__info">{all} записей, из них понравилось {liked}</h2>
    </header>
);
export default AppHeader;