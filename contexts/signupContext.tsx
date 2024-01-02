import {createContext, useState} from 'react';

type SignUpContextProp = {
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
};

const contextInitialValue: SignUpContextProp = {};
export const SignupContext = createContext(contextInitialValue);

type SignupContextProviderProp = {
  children: React.ReactNode;
};

export const SignupContextProvider = ({children}: SignupContextProviderProp) => {
  const [email, setEmail] = useState('');
  const values = {
    email: email,
    setEmail: setEmail,
  };
  return <SignupContext.Provider value={values}>{children}</SignupContext.Provider>;
};
