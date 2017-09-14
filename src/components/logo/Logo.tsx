import * as React from 'react';

const logo = require('./logo.png');
export const Logo = () => {
    return (
        <div className='Logo'>
            <img src={logo} alt='Iscalfive Logo'/>
        </div>
    );
};
