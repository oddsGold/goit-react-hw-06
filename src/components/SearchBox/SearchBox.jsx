import React from "react";
import search from "./SearchBox.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectNameFilter} from "../../redux/selectors.js";
import {changeFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectNameFilter);

    return(
        <div className={search["handleSearch"]}>
            <p>Find contacts by name</p>
            <input
                type="text"
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
            <p className={search["res-filter-name"]}>{name}</p>
        </div>
    )
}

export default SearchBox;