import React from 'react';

function DeleteButton({ id, onDelete }) {
    const buttonStyles = {
        button: {
            color: '#000000', 
            borderRadius: '5px', 
            padding: '10px 20px', 
            cursor: 'pointer', 
            fontSize: '15px', 
            fontWeight: 'bold', 
        },
    };

    return (
        <button style={buttonStyles.button} onClick={() => onDelete(id)}>
            X
        </button>
    );
}

export default DeleteButton