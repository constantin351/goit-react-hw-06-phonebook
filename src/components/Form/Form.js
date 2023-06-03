import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import css from "./Form.module.css";

const Form = () => { 
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const contactName = form.elements.name.value;
        const contactNumber = form.elements.number.value;
        
        contacts.some(contact => contact.name === contactName)
            ? alert(`${contactName} is already in the phonebook`)
            : dispatch(addContact(contactName, contactNumber));
        
        form.reset();
    };


     return (
            <form onSubmit={handleSubmit} className={css.form}>
                <label className={css.form__label}>
                    Name
                    <input
                        // value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // onChange={handleInputChange}
                        className={css.form__input}
                        required
                    />
                </label>

                <label className={css.form__label}>
                    Number
                    <input
                        // value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // onChange={handleInputChange}
                        className={css.form__input}
                        required
                        />
                </label>

                <button type="submit" className={css.form__btn}>Add contact</button>
            </form>
        )
};

export default Form;


// function Form({onFormSubmit}) { 
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
        
//         switch (name) { 
//             case "name":
//                 setName(value);
//                 break;
//             case "number":
//                 setNumber(value);
//                 break;
//             default:
//                 return;
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onFormSubmit({name, number});
//         reset();
//     };

//      // reset формы
//     const reset = () => {
//         setName('');
//         setNumber('');
//     };

//     return (
//             <form onSubmit={handleSubmit} className={css.form}>
//                 <label className={css.form__label}>
//                     Name
//                     <input
//                         value={name}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         onChange={handleInputChange}
//                         className={css.form__input}
//                         required
//                     />
//                 </label>

//                 <label className={css.form__label}>
//                     Number
//                     <input
//                         value={number}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         onChange={handleInputChange}
//                         className={css.form__input}
//                         required
//                         />
//                 </label>

//                 <button type="submit" className={css.form__btn}>Add contact</button>
//             </form>
//         )
// }



// class Component
// class Form extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleInputChange = (event) => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//      // reset формы
//     reset = () => {
//         this.setState({name: '', number: ''})
//     };
    

//     render() {
//         const { name, number } = this.state;

//         return (
//             <form onSubmit={this.handleSubmit} className={css.form}>
//                 <label className={css.form__label}>
//                     Name
//                     <input
//                         value={name}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         onChange={this.handleInputChange}
//                         className={css.form__input}
//                         required
//                     />
//                 </label>

//                 <label className={css.form__label}>
//                     Number
//                     <input
//                         value={number}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         onChange={this.handleInputChange}
//                         className={css.form__input}
//                         required
//                         />
//                 </label>

//                 <button type="submit" className={css.form__btn}>Add contact</button>
//             </form>
//         )
//     }
// };

// export default Form;






// FORMIK библиотека //
// const phoneRegExp = '\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}';

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.string().required("Phone number is required").min(7).max(10),
//         // .matches(phoneRegExp, "Invalid phone"),
// })

// const initialValues = {
//     name: '',
//     number: '',
// }

// const ErrorText = styled.p`
//     color: red;
// `;

// const FormError = ({ name }) => {
//     return(
//         <ErrorMessage
//             name={name}
//             render={message => <ErrorText>{message}</ErrorText>}
//         />
//     )
// };

// class ContactAddForm extends Component {
//     handleSubmit = (values, { resetForm }) => {
//         console.log('first', values);
//         this.props.onSubmit(values);
//         resetForm();
//     }
    
//     render() {
//         return (
//             <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
//                 <Form className={css.form}>
//                     <label className={css.form__label}>
//                         Name
//                         <Field
//                             // value={name}
//                             type="text"
//                             name="name"
//                             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             // onChange={this.handleInputChange}
//                             className={css.form__input}
//                             required
//                         />
//                         <FormError name="name" component="div" />
//                     </label>

//                     <label className={css.form__label}>
//                         Number
//                         <Field
//                             // value={number}
//                             type="tel"
//                             name="number"
//                             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             // onChange={this.handleInputChange}
//                             className={css.form__input}
//                             required
//                         />
//                         <FormError name="number" component="div" />
//                     </label>

//                     <button type="submit" className={css.form__btn}>Add contact</button>
//                 </Form>
//             </Formik>
//         )
//     }
// }
    
// export default ContactAddForm;