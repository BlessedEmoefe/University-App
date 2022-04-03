import React from 'react';
import {colors} from '../../infrastructure/theme/colors';
import {StyledButton} from './button.styles';

export const Button = ({btnText, btnAction}) => {
  return (
    <StyledButton
      contentStyle={{paddingVertical: 10}}
      icon="login"
      mode="contained"
      onPress={() => {
        btnAction();
      }}>
      {btnText}
    </StyledButton>
  );
};
