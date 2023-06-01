// import React, { Component } from 'react';
// import { useEffect, useState } from 'react';
import Form from './Form';
// import ContactAddForm from './Form';
import Filter from './Filter';
import ContactList from './ContactList';
// import { nanoid } from 'nanoid';

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contactsList')) ?? [];
//   });

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     window.localStorage.setItem('contactsList', JSON.stringify(contacts));
//   }, [contacts]);

//   const onSubmitHandler = data => {
//     data.id = nanoid();

//     contacts.some(contact => contact.name === data.name)
//       ? alert(`${data.name} is already in the phonebook`)
//       : setContacts(prevState => [data, ...prevState]);
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };

//   const onFilterInputChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredContactsArray = () => {
//     const filteredContactsArr = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return filteredContactsArr;
//   };

//   return (
//     <div className="wrapper">
//       <h1>Phonebook</h1>

//       <Form onFormSubmit={onSubmitHandler} />
//       {/* <ContactAddForm onSubmit={this.onSubmitHandler} /> */}

//       <h2>Contacts</h2>

//       <Filter onFilterInputChange={onFilterInputChange} value={filter} />

//       <ContactList
//         contacts={filteredContactsArray()}
//         onDeleteBtnClick={deleteContact}
//       />
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="wrapper">
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default App;

// Class component

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   // Local Storage
//   // см 1ое видео (модуль 4) 55ая мин
//   componentDidMount() {
//     const LScontacts = localStorage.getItem('contactsList');
//     const LSparsedContacts = JSON.parse(LScontacts);

//     if (LSparsedContacts) {
//       this.setState({ contacts: LSparsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
//     }
//   }
//   //
//   //

//   //см 19:30 1го видео (про массив)
//   onSubmitHandler = data => {
//     data.id = nanoid();
//     const { contacts } = this.state;

//     contacts.some(contact => contact.name === data.name)
//       ? alert(`${data.name} is already in the phonebook`)
//       : this.setState(({ contacts }) => ({
//           contacts: [data, ...contacts],
//         }));
//   };

//   //см 19:30 1го видео (про массив)
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   onFilterInputChange = event => {
//     this.setState({ filter: event.target.value });
//   };

//   filteredContactsArray = () => {
//     const { contacts, filter } = this.state;
//     const filteredContactsArr = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return filteredContactsArr;
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <div className="wrapper">
//         <h1>Phonebook</h1>

//         <Form onFormSubmit={this.onSubmitHandler} />
//         {/* <ContactAddForm onSubmit={this.onSubmitHandler} /> */}

//         <h2>Contacts</h2>

//         <Filter onFilterInputChange={this.onFilterInputChange} value={filter} />

//         <ContactList
//           contacts={this.filteredContactsArray()}
//           onDeleteBtnClick={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
