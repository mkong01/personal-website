import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
    // checking if there's a button style, if there's no button style, 
    // then it will automatically go to the first index in const STYLES

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    //same thing but checking button size

    return (
        <Link to='/sign-up' className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      );
    };