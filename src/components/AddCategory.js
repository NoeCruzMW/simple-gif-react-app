import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [data, setData] = useState({ inputValue: "", errorMessage: "" });

  const handleInputChange = (e) =>
    setData({ ...data, inputValue: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (data.inputValue.trim().length > 3) {
      setCategories((cats) => [data.inputValue,...cats]);
      setData({ errorMessage: "", inputValue: "" });
    } else {
      setData({
        ...data,
        errorMessage: "Category name must have more than 3 chars",
      });
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="input-gif"
        placeholder="Enter a new category"
        onChange={handleInputChange}
        value={data.inputValue}
      />
      <small className="errorMessage">{data.errorMessage}</small>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
