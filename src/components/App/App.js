import React, { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  }

  handleAddContact = (newContact) => this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }))



  handleRemoveContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id)
      }
    })
  }
  
  handleFilterChange = (filter) => this.setState({ filter })
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
    return (<div>
      <h2>Phonebook</h2>
      <ContactForm onAdd={this.handleAddContact}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={this.handleFilterChange} />
      <ContactList contacts={visibleContacts} onRemove={this.handleRemoveContact} />
    </div>
    );
  }
}

export default App;
