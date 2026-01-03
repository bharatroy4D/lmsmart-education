import React from 'react';

const SectionTitle = ({title, textSize}) => {
    return (
        <div>
            <h1 className={`lg:text-3xl font-bold text-gray-800 ${textSize}`}>{title}</h1>
            
        </div>
    );
};

export default SectionTitle;