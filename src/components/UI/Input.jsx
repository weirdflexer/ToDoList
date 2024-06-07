import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <input
            className={classes.inp}
            {...props}
            placeholder='Add a new task'
            type="text"
        >
        </input>
    );
};

export default Input;