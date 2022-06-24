import React, { useState } from 'react';




const Button = ({changeQuotes, color}) => {


    return (
        <div className='button-style'>
            <button style={{backgroundColor:color}} onClick={changeQuotes}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Button;