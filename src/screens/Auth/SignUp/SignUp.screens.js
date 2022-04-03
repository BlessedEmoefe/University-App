import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Logo from '../../../assets/Australia.jpg';
// import Google from '../../assets/google.png';
// import Shape from '../../assets/yellow.png';

import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text as StyledText} from '../../../components/typography/text.component';
import {Button} from '../../../components/button/button.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import TextInputContainer from '../../../components/textInputContainer/TextInput';
import {
  InnerContainer,
  AuthHeader,
  InputContainer,
  ButtonContainer,
  ForgetPasswordContainer,
  NewMemberRegister,
  InnerTextContainer,
  ContinueSignUp,
  SignUpContainer,
  StyledTextInput,
} from './SignUp.styles';

import {colors} from '../../../infrastructure/theme/colors';

export const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [revealPassword, setRevealPassword] = useState(true);

  return (
    <SafeArea showStatusBar={false}>
      <InnerContainer>
        <AuthHeader>
          <StyledText variant="h4">Welcome,</StyledText>
          <StyledText
            variant="smallTitle"
            style={{color: colors.headerShade.regular}}
            fgfgg>
            Sign Up to Get Started
          </StyledText>
        </AuthHeader>
        <InputContainer>
          <TextInputContainer
            label="Username"
            value={username}
            onChangeText={setUsername}
            leftIcon="account-outline"
            icon
            wrapInContainer={true}
          />
          <Spacer size="large" position="top" />
          <TextInputContainer
            label="Email"
            value={username}
            onChangeText={setUsername}
            leftIcon="account-outline"
            icon
            wrapInContainer={true}
          />
        
          <Spacer size="large" position="top" />
          <TextInputContainer
            style={{color: colors.iconColor}}
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            wrapInContainer={true}
          />
        </InputContainer>
        <Spacer size="large" position="top" />

        <ButtonContainer>
          <Button
            btnText="SignUp"
            btnAction={() => {
              navigation.navigate('Home');
            }}
          />
        </ButtonContainer>
        <NewMemberRegister>
          <StyledText variant="hint">Already a Member?</StyledText>
          <Spacer size="small" position="left" />
          <StyledText
            variant="link"
            onPress={() => navigation.navigate('SignIn')}>
            SignIn
          </StyledText>
        </NewMemberRegister>
        {/* <ForgetPasswordContainer>
          <StyledText
            variant="link"
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </StyledText>
        </ForgetPasswordContainer> */}
      </InnerContainer>
    </SafeArea>
  );
};
