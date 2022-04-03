import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {TextInput} from 'react-native-paper';

export const InnerContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-horizontal: 15;
  padding-top: 10%;
`;

export const AuthHeader = styled.View`
  height: auto;
  margin-bottom: 10%;
`;
export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
`;
export const ButtonContainer = styled.View`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: ${({margin = 30}) => `${margin}px`};
  /* background-color:red; */
`;

export const NewMemberRegister = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;

export const ForgetPasswordContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-top: -20px;
`;
