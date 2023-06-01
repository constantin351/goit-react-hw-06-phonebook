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

const Filter = () => { 
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

export default Filter;