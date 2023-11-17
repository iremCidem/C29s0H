import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  name: Yup.string().required('Name and Surname is required').trim(),
  email: Yup.string().required('E-mail is required').email('Enter a valid e-mail address').trim(),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      'Password must be alphanumeric (must contain at least one letter and one number)'
    ),
});
