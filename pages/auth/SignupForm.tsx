import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import AuthTopBar from '../../components/AuthTopBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import {useReducer, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const userFormInitialData: userSignupFormData = {
  code: '',
  firstName: '',
  lastName: '',
  password: '',
  dob: '',
};

export default function SignupForm() {
  const email = 'kapilrohilla2002@gmail.com';
  const [fromState, formDispatch] = useReducer(reducer, userFormInitialData);
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);
  return (
    <ScrollView style={styles.signupContainer}>
      <AuthTopBar />
      <View style={styles.formContainer}>
        <Image
          source={require('../../assets/logo_dark.png')}
          alt=""
          resizeMode="contain"
        />
        <Text style={styles.intro}>Now let's make you a Nike members.</Text>
        <Text style={styles.emailChosed}>
          We have send code to {'\n'}
          {email}
          {'  '}
          <Text
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
          <TextInput style={styles.inputBox} placeholder="Code" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Full Name :</Text>
          <TextInput style={styles.inputBox} placeholder="John Doe" />
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
                paddingHorizontal: 20,
                borderRadius: 6,
              })
            }>
            <TextInput placeholder="John Doe" secureTextEntry={!showPassword} />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={20}
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
          <Text style={{color: '#767676', fontSize: 12}}>
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
              <Text style={{color: 'black'}}>{'Choose Date'}</Text>
              <Pressable onPress={() => setOpen(true)}>
                <Icon name="calendar-month" color={'#000'} size={20} />
              </Pressable>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <Text style={{color: '#767676', paddingLeft: 10, fontSize: 12}}>
              Get a nike reward on your Birthday.
            </Text>
            <View style={[styles.checkboxContainer, {marginVertical: 24}]}>
              <BouncyCheckbox isChecked={false} />
              <Text style={styles.conditions}>
                Sign up for emails to get updates from Nike on products, offers
                and your Member benifits.
              </Text>
            </View>
            <View style={[styles.checkboxContainer, {marginBottom: 24}]}>
              <BouncyCheckbox isChecked={false} onPress={() => {}} />
              <Text style={styles.conditions}>
                I agree to Nike{' '}
                <Text style={{textDecorationLine: 'underline'}}>
                  Privacy Policy
                </Text>{' '}
                and{'\n'}
                <Text style={{textDecorationLine: 'underline'}}>
                  Term and conditions
                </Text>
                .
              </Text>
            </View>
          </View>
          <Pressable style={styles.createAccountBtn}>
            <Text style={{color: '#fff'}}>Create Account</Text>
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
  inputTitle: {color: 'black', fontWeight: '600'},
  checkboxContainer: {flexDirection: 'row', alignItems: 'flex-start'},
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
    case 'firstName':
      return {
        ...state,
        firstName: payload,
      };
    case 'lastName':
      return {
        ...state,
        lastName: payload,
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
  }
  return state;
}
