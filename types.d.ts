// types for user signup form data
type userSignupFormData = {
  code: string;
  name: string;
  password: string;
  dob: string;
};

signupState = 'code' | 'name' | 'password' | 'dob' | 'reset';
interface SignupAction {
  type: signupState;
  payload: string;
}
