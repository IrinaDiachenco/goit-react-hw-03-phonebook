import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
//import ContactList from '../ContactList';

class ContactForm extends Component {
    state = {
        name: "",
        phone: "",
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
        ],
    };

    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;

        const isValidateForm = this.validateForm()

        if (!isValidateForm) return
        
        onAdd({ id: uuidv4(), name, phone })
        this.resetForm()
    };

    validateForm = () => {
        const { name, phone } = this.state;
        if (!name || !phone) {
            alert('Some filed is empty')
            return false
        }

        return this.onCheckUnique(name)
    }

    onCheckUnique = (name) => {
        const { contacts } = this.state
    
        const isExistContact = !!contacts.find((contact) => contact.name === name)
        isExistContact && alert('Contact is already exist')
        return !isExistContact
    }

    resetForm = () => this.setState({ name: '', phone: '' });

    render() {
        const { name, phone } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm}/>
                <input type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange={this.handleChangeForm} />
                <button type='submit'>Add Contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
        name: PropTypes.string,
    phone: PropTypes.number,
        onCheckUnique: PropTypes.func,
};

export default ContactForm;