import styled from 'styled-components/native';
import {colors} from '../../infrastructure/theme/colors';
import {TextInput} from 'react-native-paper';


export const TextInputStyled = styled.View`
  width: 100%;
  height: 50;
  flex-direction: row;
  align-items: center;
`;
export const StyledTextInput = styled(TextInput)`
  width: 100%;
  fontsize: 18;
  color: ${colors.black.strong};
  height: 100%;
`;
