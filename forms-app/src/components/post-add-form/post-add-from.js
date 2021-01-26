import React, {Component} from 'react';

const   PostAddForm = ({onAdd}) => (
    <div>
        <input type="text" placeholder="О чем вы думаете сейчас?"/>
        <button
            type="submit"
            onClick={() => onAdd("Heloo")}>
            Добавить</button>
    </div>
);
export default PostAddForm;