import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addContactsWarning = name => toast.warn(`${name} is already in contacts`);

export const redactContactsWarning = () =>
  toast.warn('The same name or number. Please, change something!');

export const redactContactsSuccess = () => toast.success('Contact edited!');

export const serverError = message => toast.error(message);

export const Toastify = () => {
  return <ToastContainer autoClose={3000} />;
};