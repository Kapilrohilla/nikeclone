import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AuthTopBar from '../../components/AuthTopBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import {useContext, useReducer, useRef, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {SignupAction, userSignupFormData} from '../../types';
import {SignupContext} from '../../contexts/signupContext';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const today = new Date().toString();

const formInitialData: userSignupFormData = {
  code: '',
  name: '',
  password: '',
  dob: today,
};

export default function SignupForm({navigation}: any) {
  const {email} = useContext(SignupContext);
  const [formState, formDispatch] = useReducer(reducer, formInitialData);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const isTermConditionAccpeted = useRef(false);
  const [loading, setLoading] = useState(false);
  // const userCollection = firestore().collection('users');

  const removeHistoryFromNavigationStack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'registerSigninSuccess'}],
      }),
    );
  };
  const submitForm = () => {
    if (isTermConditionAccpeted.current === false || formState === formInitialData) {
      return;
    } else {
      if (Number(formState.code) === 1111) {
        setLoading(true);
        // userCollection
        //   .add({
        //     email: email,
        //     password: formState.password,
        //     dob: formState.dob,
        //     name: formState.name,
        //   })
        //   .then(snapshot => {
        auth()
          .createUserWithEmailAndPassword(email!, formState.password)
          .then(r => {
            r.user.updateProfile({
              displayName: formState.name,
            });
            formDispatch({type: 'reset', payload: ''});
            const uid = auth().currentUser?.uid;
            console.log('uid----------------');
            console.log(uid);
            console.log('token----------------');
            try {
              AsyncStorage.setItem('loggedInUID', uid!);
              removeHistoryFromNavigationStack();
            } catch (err: unknown) {
              console.log('Failed to save uid');
            }
            console.log('user created success');
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            switch (error.code) {
              case 'auth/email-already-in-use': {
                const string = `Error: Email address ${email} already in use.`;
                console.log(string);
                Alert.alert(string);
                break;
              }
              case 'auth/invalid-email': {
                const string = `Error: Email address ${email} is invalid.`;
                console.log(string);
                Alert.alert(string);
                break;
              }
              case 'auth/operation-not-allowed': {
                const string = `Error: during sign up.`;
                console.log(string);
                Alert.alert(string);
                break;
              }
              case 'auth/weak-password': {
                const string =
                  'Error: Password is not strong enough. Add additional characters including special characters and numbers.';
                console.log(string);
                Alert.alert(string);
                break;
              }
              default:
                console.log(error.message);
                break;
            }
          });
        // .catch(err => {
        //   console.log('Error: it occurred while calling auth().createUserWithEmailAndPassword()');
        //   console.log(err);
        // });
        //   console.log(snapshot.firestore.doc);
        //   console.log('user added successfully');
        //   navigation.navigate('registerSigninSuccess');
        //   formDispatch({
        //     type: 'reset',
        //     payload: '',
        //   });
        // })
        // .catch(() => {
        //   console.log('Error: Failed to add user in users collection');
        // });
      } else {
        Alert.alert('Error: Wrong Code');
      }
    }
  };
  return (
    <ScrollView style={styles.signupContainer}>
      <AuthTopBar />
      <View style={styles.formContainer}>
        <Image source={require('../../assets/logo_dark.png')} alt="" resizeMode="contain" />
        <Text style={styles.intro}>Now let's make you a Nike members.</Text>
        <Text style={styles.emailChosed}>
          We have send code to {'\n'}
          {email}
          {'  '}
          <Text
            onPress={() => navigation.goBack()}
            style={{
              fontWeight: '600',
              textDecorationLine: 'underline',
              color: 'black',
            }}>
            Edit
          </Text>
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>CODE :</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Code"
            inputMode={'numeric'}
            value={formState.code}
            onChangeText={e =>
              formDispatch({
                type: 'code',
                payload: e,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Full Name :</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="John Doe"
            value={formState.name}
            onChangeText={e =>
              formDispatch({
                type: 'name',
                payload: e,
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password :</Text>
          <View
            style={
              (styles.inputBox,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#bababa',
                paddingRight: 20,
                borderRadius: 6,
              })
            }>
            <TextInput
              placeholder="John Doe"
              secureTextEntry={!showPassword}
              style={{
                color: '#000',
                flex: 1,
                paddingLeft: 20,
              }}
              value={formState.password}
              onChangeText={e => {
                formDispatch({
                  type: 'password',
                  payload: e,
                });
              }}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={20}
                style={{marginRight: 20}}
                color={'black'}
              />
            </Pressable>
          </View>
          <Text
            style={{
              color: '#767676',
              fontSize: 12,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Icon name="done" color="#767676" size={14} />
            Minimum of 8 character
          </Text>
          <Text
            style={{
              color: '#767676',
              fontSize: 12,
            }}>
            <Icon name="close" color="#767676" size={14} />
            Uppercase, lettercase and one number
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Date of Birth :</Text>
            <View
              style={[
                styles.inputBox,
                {
                  paddingVertical: 15,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  color: 'black',
                }}
                onPress={() => setOpen(true)}>
                {/* {formState.dob !== today ? formState.dob : 'Choose Date'} */}
                {formState.dob}
              </Text>
              <Pressable onPress={() => setOpen(true)}>
                <Icon name="calendar-month" color={'#000'} size={20} />
              </Pressable>
              <DatePicker
                modal
                open={open}
                date={new Date(formState.dob)}
                onConfirm={date => {
                  setOpen(false);
                  formDispatch({
                    type: 'dob',
                    payload: date.toString(),
                  });
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <Text
              style={{
                color: '#767676',
                paddingLeft: 10,
                fontSize: 12,
              }}>
              Get a nike reward on your Birthday.
            </Text>
            <View
              style={[
                styles.checkboxContainer,
                {
                  marginVertical: 24,
                },
              ]}>
              <BouncyCheckbox isChecked={false} />
              <Text style={styles.conditions}>
                Sign up for emails to get updates from Nike on products, offers and your Member
                benifits.
              </Text>
            </View>
            <View
              style={[
                styles.checkboxContainer,
                {
                  marginBottom: 24,
                },
              ]}>
              <BouncyCheckbox
                isChecked={false}
                onPress={() => {
                  isTermConditionAccpeted.current = true;
                }}
              />
              <Text style={styles.conditions}>
                I agree to Nike{' '}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                  }}>
                  Privacy Policy
                </Text>{' '}
                and
                {'\n'}
                <Text
                  style={{
                    textDecorationLine: 'underline',
                  }}>
                  Term and conditions
                </Text>
                .
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.createAccountBtn}
            onPress={submitForm}
            disabled={loading && true}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                style={{
                  color: '#fff',
                }}>
                Create Account
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  createAccountBtn: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
  },
  nextBtn: {
    backgroundColor: '#000',
    marginHorizontal: 26,
    top: 100,
    paddingVertical: 16,
    paddingHorizontal: 51,
    borderRadius: 30,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  conditions: {
    color: '#000',
    fontWeight: '400',
    letterSpacing: -0.4,
    lineHeight: 24,
  },
  inputTitle: {
    color: 'black',
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textInput: {
    color: '#767676',
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    marginTop: 20,
    gap: 5,
  },
  inputContainerText: {
    color: 'black',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#BABABA',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    color: '#000',
  },
  signupContainer: {
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 25,
  },
  intro: {
    fontSize: 28,
    fontWeight: '400',
    color: 'black',
    marginVertical: 20,
  },
  emailChosed: {
    color: 'black',
    lineHeight: 25,
    fontSize: 16,
    fontWeight: '400',
  },
});

function reducer(state: userSignupFormData, action: SignupAction) {
  const {type, payload} = action;
  switch (type) {
    case 'code':
      return {
        ...state,
        code: payload,
      };
    case 'name':
      return {
        ...state,
        name: payload,
      };
    case 'password':
      return {
        ...state,
        password: payload,
      };
    case 'dob':
      return {
        ...state,
        dob: payload,
      };
    case 'reset': {
      return formInitialData;
    }
    default:
      return state;
  }
}
