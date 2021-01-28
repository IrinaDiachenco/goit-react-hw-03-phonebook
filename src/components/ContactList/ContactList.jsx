import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li key={id}>
            {name}: {phone} <button id={id} onClick={() => onRemove(id)}>delete</button>
        </li>
    )
};

const ContactList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contacts => <ContactListItem {...contacts} onRemove={onRemove} />)}
        </ul>
    )
};

ContactListItem.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        onRemove: PropTypes.func.isRequired,
};

export default ContactList;