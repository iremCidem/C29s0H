import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string().required('E-mail is required').trim(),
  password: Yup.string().required('Password is required'),
});
