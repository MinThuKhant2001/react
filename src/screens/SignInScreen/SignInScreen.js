import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
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
  }
  return (
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
        onPress={onPressed}
      />
    </View>
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