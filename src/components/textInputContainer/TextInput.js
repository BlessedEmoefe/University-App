import React, {useState} from 'react';
import {theme} from '../../infrastructure/theme';
import {
  TextInputContainerWrap,
  TextInputStyled,
  StyledTextInput,
} from './Textinput.styles';

const TextInputContainer = ({
  borderColor,
  elevation,
  searchStores,
  placeholder = 'Search stores by name',
}) => {
  const [value, setValue] = useState(null);

  // update value with values typed into the search bar component
  const searchHandler = searchValue => {
    setValue(searchValue);
    searchStores(searchValue);
  };

  return (
      <TextInputStyled borderColor={borderColor} elevation={elevation}>
        <StyledTextInput
          value={value}
          placeholderTextColor={theme.colors.black.light}
      
          onChangeText={value => searchHandler(value)}
          autoFocus
          name="text"
          placeholder={placeholder}
        />
      </TextInputStyled>
  );
};

export default TextInputContainer;
