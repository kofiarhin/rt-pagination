import "./search.styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilteredData,
  setTemplates,
  getData,
} from "../../redux/actions/data.actions";

// search
const Search = () => {
  const dispatch = useDispatch();
  const { currentTemplates, templates, ...rest } = useSelector(
    (state) => state.dataReducer
  );

  let [searchField, setSearchField] = useState("");

  const onHandleChange = (e) => {
    if (e.target.value === "All") {
      dispatch(getData());
    } else {
      const filteredData = currentTemplates.filter((item) =>
        item.category.includes(e.target.value)
      );
      dispatch(setFilteredData(filteredData));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = templates.filter((data) =>
      data.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (filteredData.length > 0) {
      dispatch(setTemplates(filteredData));
      setSearchField = "";
    }
  };

  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-wrapper">
          <input
            type="Search"
            placeholder="search"
            onChange={(e) => handleInputChange(e)}
          />
          <div className="form-control">
            <label htmlFor="">Sort by</label>
            <select name="" id="" onChange={(e) => onHandleChange(e)}>
              <option value="All">All</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="E-commerce">E-commerce</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
