import React from 'react';

const   AppHeader = ({liked, all}) => (
    <div>
        <h1>Sizov Boris</h1>
        <h2>{all} записей, из них понравилось {liked}</h2>
    </div>
);
export default AppHeader;