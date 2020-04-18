import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CHANGE_CONTACT } from '../../../actions/types';

const Form = () => {
    const history = useHistory();

    const getContact = () => {
        const itemId = history.location.pathname.split('/')[2];
        const contacts = JSON.parse(localStorage.getItem('data'));
        const contact = contacts.find(item => item.id === Number(itemId));
        return contact;
    };

    const contact = getContact();
    const { firstName, id, lastName, city, country, email, website, phoneNumber } = contact;
    const [inputName, setInputName] = useState(firstName);
    const [inputLastName, setInputLastName] = useState(lastName);
    const [inputCity, setInputCity] = useState(city);
    const [inputCountry, setInputCountry] = useState(country);
    const [inputPhone, setInputPhone] = useState(phoneNumber);
    const [inputEmail, setInputEmail] = useState(email);
    const [inputWebsite, setInputWebsite] = useState(website);

    const onChangeName = (e) => {
        setInputName(e.target.value.trim());
    };

    const onChangeLastName = (e) => {
        setInputLastName(e.target.value.trim());
    };

    const onChangeCity = (e) => {
        setInputCity(e.target.value.trim());
    };

    const onChangeCountry = (e) => {
        setInputCountry(e.target.value.trim());
    };

    const onChangePhone = (e) => {
        setInputPhone(e.target.value.trim());
    };

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value.trim());
    };

    const onChangeWebsite = (e) => {
        setInputWebsite(e.target.value.trim());
    };

    const dispatch = useDispatch();

    const onSubmitContact = () => {
        const newContact = {
            id,
            firstName: inputName,
            lastName: inputLastName,
            city: inputCity,
            country: inputCountry,
            email: inputEmail,
            website: inputWebsite,
            phoneNumber: inputPhone
        };
        dispatch({ type: CHANGE_CONTACT, payload: newContact });
    };

    useEffect(() => {
        getContact();
    }, []);

    return (
        <form className="form">
            {firstName &&
                <div className="form__item" >
                    <label htmlFor="contact-input">First name:</label>
                    <input onChange={onChangeName} id="contact-input" value={inputName} type="text" placeholder="Enter your first name" />
                </div >
            }
            {lastName &&
                <div className="form__item" >
                    <label htmlFor="contact-input">Last name:</label>
                    <input onChange={onChangeLastName} id="contact-input" value={inputLastName} type="text" placeholder="Enter your last name" />
                </div >
            }
            {city &&
                <div className="form__item" >
                    <label htmlFor="contact-input">City:</label>
                    <input onChange={onChangeCity} id="contact-input" value={inputCity} type="text" placeholder="Enter your city" />
                </div >
            }
            {country &&
                <div className="form__item" >
                    <label htmlFor="contact-input">Country:</label>
                    <input onChange={onChangeCountry} id="contact-input" value={inputCountry} type="text" placeholder="Enter your country" />
                </div >
            }
            {phoneNumber &&
                <div className="form__item" >
                    <label htmlFor="contact-input">Phone Number:</label>
                    <input onChange={onChangePhone} id="contact-input" value={inputPhone} type="text" placeholder="Enter your phone number" />
                </div >
            }
            {email &&
                <div className="form__item" >
                    <label htmlFor="contact-input">Email:</label>
                    <input onChange={onChangeEmail} id="contact-input" value={inputEmail} type="text" placeholder="Enter your email" />
                </div >
            }
            {website &&
                <div className="form__item" >
                    <label htmlFor="contact-input">Website:</label>
                    <input onChange={onChangeWebsite} id="contact-input" value={inputWebsite} type="text" placeholder="Enter your website" />
                </div >
            }
            <Link onClick={onSubmitContact} to={'/'} className="form__btn">Save Contact</Link>
        </form>
    );
};

export default Form;