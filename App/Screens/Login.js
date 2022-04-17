import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../Constants/colors';
import { reg } from '../Constants/regularEx';
// import colors from '../../constants/colors';
// import MobileIcon from 'react-native-vector-icons/Fontisto';
// import PasswordIcon from 'react-native-vector-icons/EvilIcons';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation, userId}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePass, setHidePass] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const reset = () => {
    setEmailError('');
    setPasswordError('');
  };

  const emailValidator = () => {
    if (email === '') {
      setEmailError('Email field cannot be empty');
    } else if (reg.test(email) != true) {
      setEmailError('Enter valid syntax');
    } else {
      setEmailError('');
    }
  };

  const passwordValidator = () => {
    if (password === '') {
      setPasswordError('Password field cannot be empty');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} />
      <LinearGradient
        style={{
          flex: 0.2,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: 'red',
        }}
        colors={[colors.primary, '#fff']}></LinearGradient>
      <View
        style={{
          flex: 0.7,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              marginTop: -30,
              height:450,
              borderRadius: 25,
              padding: 20,
              margin: 15,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
              backgroundColor: 'white',
            
            }}>
            <View
              style={{
                flex: 0.2,
                margin: 10,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 170,
                  height: 100,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../Assets/logo.png')}
              />
            </View>
            <View
              style={{
                flex: 0.7,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fffafa',
                    paddingHorizontal: 13,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 30,
                    width: '95%',
                    height: 50,
                    alignItems: 'center',
                    marginVertical:10
                  }}>
                  {/* <MobileIcon
                    style={{marginRight: 15, marginLeft: 8}}
                    name="email"
                    size={25}
                    color={colors.primary}
                  /> */}
                  <TextInput
                    style={{
                      fontSize: 16,
                      width: '70%',
                    }}
                    placeholder="Email@gmail.com"
                    onBlur={() => {
                      emailValidator();
                    }}
                    onChangeText={text => {
                      setEmail(text), emailValidator();
                    }}
                    value={email}
                  />
                </View>
                <View style={{alignSelf:"flex-start",marginLeft:30}}>
                    <Text style={{color: 'red', fontSize: 12}}>{emailError}</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    marginTop: 5,
                    flexDirection: 'row',
                    backgroundColor: '#fffafa',
                    paddingHorizontal: 13,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 30,
                    width: '95%',
                    height: 50,
                    alignItems: 'center',
                  }}>
                  {/* <PasswordIcon
                    style={{marginRight: 10}}
                    name="lock"
                    size={40}
                    color={colors.primary}
                  /> */}
                  <TextInput
                    secureTextEntry={hidePass ? false : true}
                    style={{
                      fontSize: 16,
                      width: '70%',
                    }}
                    placeholder="Password"
                    onBlur={() => {
                      passwordValidator();
                    }}
                    onChangeText={text => {
                      setPassword(text), passwordValidator();
                    }}
                    value={password}
                  />
                  {/* <Icon
                    style={{marginLeft: 10}}
                    name={hidePass ? 'eye' : 'eye-slash'}
                    size={15}
                    color="grey"
                    onPress={() => setHidePass(!hidePass)}
                  /> */}
                </View>
              <View style={{alignSelf:"flex-start",marginLeft:30}}>
                <Text style={{color: 'red', fontSize: 12}}>
                  {passwordError}
                </Text>
              </View>
              </View>
              <View style={{margin: 8, marginLeft: 20}}>
                <TouchableOpacity>
                  <Text style={{color: colors.primary}}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20, alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 16,
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    reset(), navigation.navigate('SignUp');
                  }}>
                  <Text style={{color: colors.primary}}>Register Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
