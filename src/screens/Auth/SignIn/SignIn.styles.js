import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {TextInput} from 'react-native-paper';

export const InnerContainer = styled.ScrollView`
 flex: 1;
  width: 100%; 
  paddingHorizontal:15;
  paddingTop:10%;
`;
export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TopLeftImage = styled.Image`
  ${'' /* margin-right: 19px; */}
`;

export const AuthHeader = styled.View`
  width: 100%;
  min-height: 80px;
  height: auto;
  margin-bottom: 20px;
  justify-content: center;
`;



export const ButtonContainer = styled.View`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: ${({margin = 30}) => `${margin}px`};
  /* background-color:red; */
`;

export const InnerTextContainer = styled.View`
  flex: 0.8;
`;

export const PickerContainer = styled.View`
  border-bottom-width: 0.4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledTextInput = styled(TextInput)`
  height: 50px;
  width: 95%;
  /* align-self: flex-end; */
`;
export const CountryModalProviderWrapper = styled.View`
  border-bottom-width: 0.4px;
`;
export const TermsOfServiceAndPrivacyPolicies = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: auto;
  margin-bottom: 20px;
  margin-top: 5px;
  /* background-color:blue; */
`;

export const ForgetPasswordContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-top: -20px;
`;

export const NewMemberRegister = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 50px;
`;

export const ContinueSignUp = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 80px;
  /* background-color:blue; */
`;

export const SignUpContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HorizontalLine = styled.Text`
  background-color: ${colors.black.light};
  height: 1px;
  width: 35%;
`;

export const SocialMedia = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

export const SocialIcons = styled.View`
  border-radius: 50px;
  width: 60px;
  height: 60px;
  border-color: ${colors.black.light};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;
