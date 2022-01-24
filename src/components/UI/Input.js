import React from "react";

import classes from './Input.module.css'

// using ref from outside function
// make sure you import React from react
// and wrap your Component function with React.forwardRef
// and set the 'ref' to the ref props
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref}/>
        </div>
    );
});

export default Input