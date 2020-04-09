import React from 'react';

const Input = () => {
    return (
        <div className="form__item">
            <label htmlFor="contact-input">First Name:</label>
            <input id="contact-input" type="text" placeholder="Vanessa" />
        </div>
    );
};

export default Input;