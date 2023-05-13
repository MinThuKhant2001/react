import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const { username, setUsername } = useState('')
  const { password, setPassword } = useState('')
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Sign in")
  };
  const onForgotPasswordPressed = () =>{
    console.warn("onForgotPasswordPressed")
  };
  const onSignInFacebook = ()  => {
    console.warn("facebook")
  };
  const onSignInGoogle =() =>{
    console.warn("Google")
  };
  const onSignInApple = () =>{
    console.warn("Apple")
  };
  const onSignUp = () => {

  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        text="Sign In"
        onPress={onSignInPressed}
      />

      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type = "TERTIARY"
      />

<CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebook}
        bgColor={"#e7eaf4"}
        fgColor={"#4765a9"}
      />

<CustomButton
        text="Sign In With Google"
        onPress={onSignInGoogle}
        bgColor={"#fae9ea"}
        fgColor={"#dd4d44"}
      />

<CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor={"#e3e3e3"}
        fgColor={"#363636"}
      />

<CustomButton
        text="Don't have an account? Create account"
        onPress={onSignUp}
        type = "TERTIARY"
      />
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25
  },
  logo: {
    width: "70%",
    maxWidth: 100,
    maxHeight: 100,
    // borderRadius : '20px'
    borderRadius: 30,

  }
})

export default SignInScreen