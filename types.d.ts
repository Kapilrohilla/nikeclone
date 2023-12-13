// types for user signup form data
type userSignupFormData = {
  code: string;
  firstName: string;
  lastName: string;
  password: string;
  dob: string;
};
enum signupState {
  code = 'code',
  firstName = 'firstName',
  lastName = 'lastName',
  password = 'password',
  dob = 'dob',
}
interface SignupAction {
  type: signupState;
  payload: string;
}
