import React from 'react';

// eslint-disable-next-line react/prop-types
const BaseLabel = ({id, classname, children}) => {
    return (
        <label className={`block mb-2 text-sm font-semibold text-gray-700 ${classname}`}
        htmlFor={id}
        >
            {children}
        </label>
    );
};

export default BaseLabel;