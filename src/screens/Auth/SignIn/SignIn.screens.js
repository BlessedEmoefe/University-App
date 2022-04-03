import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Logo from '../../../assets/Australia.jpg';
// import Google from '../../assets/google.png';
// import Shape from '../../assets/yellow.png';

import {SafeArea} from '../../../components/utility/safe-area.component';
import {Text as StyledText} from '../../../components/typography/text.component';
import {RoundedButton} from '../../../components/button/button.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Loader} from '../../../components/loader/loader.component';
import TextInputContainer from '../../../components/textInputContainer/TextInput';
import {
  TopLeftImage,
  Icon,
  LogoContainer,
  AuthHeader,
  InnerContainer,
  InputContainer,
  ButtonContainer,
  InnerTextContainer,
  ForgetPasswordContainer,
  NewMemberRegister,
  ContinueSignUp,
  SignUpContainer,
  StyledTextInput,
  HorizontalLine,
  SocialMedia,
  SocialIcons,
} from './SignIn.styles';

import {colors} from '../../../infrastructure/theme/colors';

export const SignIn = ({navigation}) => {
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
            Sign in to continue
          </StyledText>
        </AuthHeader>

        <InputContainer>
          <TextInputContainer
            label="Username/Email"
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
            rightIcon="eye-outline"
            //rightIconOnPress={() => setRevealPassword()}
            leftIcon="lock-outline"
            wrapInContainer={true}
            secureTextEntry={revealPassword}
          />
        </InputContainer>

        {/* <ForgetPasswordContainer>
          <StyledText
            variant="link"
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </StyledText>
        </ForgetPasswordContainer> */}

        {/* <ButtonContainer>
        
            <RoundedButton
              mode="contained"
              variant="wide"
              contentStyle={{height: '100%'}}
              labelStyle={{fontSize: 18, fontWeight: 'bold'}}
              onPress={() => {
                console.log('Signing in');
                //call the signIn method to set items in the token
                handleSignIn();

                //navigation.navigate("SignUp");
              }}
              uppercase={false}>
              Sign In
            </RoundedButton>
          )}
        </ButtonContainer> */}

        {/* <NewMemberRegister>
          <StyledText variant="hint">New Member?</StyledText>
          <Spacer size="small" position="left" />
          <StyledText
            variant="link"
            onPress={() => navigation.navigate('SignUp')}>
            Register
          </StyledText>
        </NewMemberRegister> */}
        <Spacer size="large" p />

        {/* <ContinueSignUp>
          <StyledText variant="hint">Or</StyledText>
          <SignUpContainer>
            <HorizontalLine />
            <Spacer size="large" position="left" />
            <StyledText variant="hint">Sign in with</StyledText>
            <Spacer size="large" position="right" />
            <HorizontalLine />
          </SignUpContainer>
        </ContinueSignUp> */}
        <Spacer size="large" position="top" />
        {/* <SocialMedia>
          <SocialIcons>
            <Facebook name="sc-facebook" size={40} color={colors.blue.strong} />
          </SocialIcons>
          <SocialIcons>
            <Icon source={Google} />
          </SocialIcons>
        </SocialMedia> */}
      </InnerContainer>
    </SafeArea>
  );
};
