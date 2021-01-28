import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
//import ContactList from '../ContactList';

class ContactForm extends Component {
      state = {
    name: "",
    phone: "",
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
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some filed is empty')
            return false
        }

        return onCheckUnique(name)
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