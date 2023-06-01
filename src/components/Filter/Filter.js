// import PropTypes from "prop-types";
import css from "./Filter.module.css";
//

//
// Импортируем хук
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Импортируем объект значений фильтра
// import { statusFilter } from "redux/constants";
// import { getFilter } from "redux/selectors";

// Импортируем генератор экшена
// import { setFilter } from "redux/actions"; //before
import { setFilter } from "redux/filterSlice"; //after

// { onFilterInputChange, filter } //были пропсы

const Filter = () => { 
    // Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // const filter = useSelector(getFilter);

    // Вызываем генератор экшена и передаём значение фильтра
    // Отправляем результат - экшен изменения фильтра
    const onFilterInputChange = (event) => {
        dispatch(setFilter(event.currentTarget.value))
    };

    return (
        <>
            <label className={css.filter__label}>
                Find contacts by name
                <input
                    // value={filter}
                    className={css.filter__input}
                    type="text"
                    name="filter"
                    onChange={onFilterInputChange}
                />
            </label>
        </>
    )
}

// Filter.propTypes = {
//     onFilterInputChange: PropTypes.func.isRequired,
//     filter: PropTypes.string,
// }

export default Filter;