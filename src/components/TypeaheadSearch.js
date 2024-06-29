import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const TypeaheadSearch = ({ categories }) => {
  const flattenCategories = (categories) => {
    let flatList = [];
    categories.forEach((category) => {
      flatList.push(category.name);
      if (category.subcategories) {
        flatList = flatList.concat(flattenCategories(category.subcategories));
      }
    });
    return flatList;
  };

  const flatCategories = flattenCategories(categories);
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      options={flatCategories}
      style={{ width: 300 }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="Search Categories" variant="outlined" />}
    />
  );
};

export default TypeaheadSearch;
