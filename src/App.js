import React, { Component } from 'react';

import Phonebook from './components/Phonebook';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, newContact] });
  };

  handlerUniqName = name => {
    const { contacts } = this.state;
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Phonebook title="Phonebook">
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckforUniqName={this.handlerUniqName}
        />
        <Contacts
          title="Contacts"
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Phonebook>
    );
  }
}

export default App;
