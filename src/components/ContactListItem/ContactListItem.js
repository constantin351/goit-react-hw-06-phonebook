import PropTypes from "prop-types";
import css from './ContactListItem.module.css';
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ contact }) => { 
  const dispatch = useDispatch();
  
  // Вызываем генератор экшена и передаём идентификатор контакта
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
      <div className={css.item}>
          <p className={css.item__name}>{contact.name}: </p>
          <p className={css.item__number}>{contact.number}</p>
          <button
              className={css.item__btn}
              type="button"
              onClick={handleDelete}
          >
              Delete
          </button>
      </div>
  )
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
          }),
};

export default ContactListItem;


// function ContactListItem({ id, name, number, onDeleteBtnClick, contactId }) { 
//     return (
//         <li key={id} className={css.item}>
//             <p className={css.item__name}>{name}: </p>
//             <p className={css.item__number}>{number}</p>
//             <button
//                 className={css.item__btn}
//                 type="button"
//                 onClick={() => onDeleteBtnClick(contactId)} // 1й вариант (см ContactList)
//                 // onClick={onDeleteBtnClick} // 2й вариант (см ContactList)
//             >
//                 Delete
//             </button>
//         </li>
//     )
// }

