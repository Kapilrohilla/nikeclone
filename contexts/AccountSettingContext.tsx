import {createContext} from 'react';

const AccountSettingContext: React.Context<null> = createContext(null);

type AccountSetupContextProviderProp = {
  children: React.ReactNode;
};
export default function AccountSettingContextProvider({children}: AccountSetupContextProviderProp) {
  return <AccountSettingContext.Provider value={null}>{children}</AccountSettingContext.Provider>;
}
