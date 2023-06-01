import ContactListItem from "components/ContactListItem";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";
//
import { useSelector } from "react-redux";
// import { statusFilter } from "redux/constants";
import { getContacts, getFilter } from "redux/selectors"; 
 
// function ContactList({ contacts, onDeleteBtnClick }) {
//     return (
//         <ul className={css.list}>
//             {contacts.map(contact => (
//                 <ContactListItem
//                     key={contact.id}
//                     name={contact.name}
//                     number={contact.number}
//                     onDeleteBtnClick={onDeleteBtnClick} // 1й вариант (см ContactListItem)
//                     // onDeleteBtnClick={() => onDeleteBtnClick(contact.id)}  // 2й вариант (см ContactListItem)
//                     contactId={contact.id}
//                 />
//             ))
//             }
//         </ul>
//     )
// };


///

const filteredContactsArray = (contacts, filter) => {
    console.log('contacts', contacts)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

const ContactList = () => { 
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = filteredContactsArray(contacts, filter);

    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={css.item}>
                    <ContactListItem contact={contact} />
                </li>
            ))               
            }
        </ul>
    )
};




ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteBtnClick: PropTypes.func,
    
};


export default ContactList;