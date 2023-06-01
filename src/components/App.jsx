import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';


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




