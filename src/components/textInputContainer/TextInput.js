import React, {useState} from 'react';
import {theme} from '../../infrastructure/theme';
import { colors } from '../../infrastructure/theme/colors';
import {
  TextInputContainerWrap,
  TextInputStyled,
  StyledTextInput,
} from './Textinput.styles';

const TextInputContainer = ({
  borderColor,
  elevation,
  searchStores,
  label,
  secureTextEntry,
}) => {
  const [value, setValue] = useState('');

  // update value with values typed into the search bar component
  const searchHandler = searchValue => {
    setValue(searchValue);
    searchStores(searchValue);
  };

  return (
    <TextInputStyled borderColor={borderColor} elevation={elevation}>
      <StyledTextInput
        value={value}
        mode="outlined"
        label={label}
        outlineColor={colors.primary}
        activeOutlineColor={colors.primary}
        placeholderTextColor={theme.colors.black.light}
        onChangeText={value => setValue(value)}
        secureTextEntry={secureTextEntry}
        autoFocus
        name="text"
        // dense
      />
    </TextInputStyled>
  );
};

export default TextInputContainer;