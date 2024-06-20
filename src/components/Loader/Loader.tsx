import './styles.scss';

import React from 'react';

interface ILoader {
    primaryColor?: 'red' | 'white';
}

export const Loader: React.FC<ILoader> = ({ primaryColor }: ILoader) => {
    return (
        <div className='loader-container' data-bg-color={primaryColor ? primaryColor : 'red'}>
            <span className='loader'></span>
        </div>
    );
};
