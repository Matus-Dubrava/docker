import React from 'react';

export default ({ message, type }) => {
    const postStyle = {
        color: type === 'error' ? 'red' : 'green',
        width: '60%',
        height: '35px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginLeft: '20%',
        top: '10px',
        border: type === 'error' ? '1px solid red' : '1px solid green',
        borderRadius: '5px',
        boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)'
    };

    return (
        <div>
            <h3 style={postStyle}>{message}</h3>
        </div>
    );
};
