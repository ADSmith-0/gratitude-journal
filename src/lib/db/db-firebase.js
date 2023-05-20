import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    updatePassword
} from 'firebase/auth';

/**
 * Sign up a new user with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} firebase response
 */
const signup = async (email, password) => (await createUserWithEmailAndPassword(auth, email, password));

/**
 * Log user in with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} firebase response
 */
const login = async (email, password) => (await signInWithEmailAndPassword(auth, email, password));

/**
 * Function for user to delete their account
 * @returns {Promise} firebase response
 */
const deleteSelf = async () => {
    const user = auth.currentUser;
    return (await deleteUser(user))
}

/**
 * Function for user to change their password
 * @param {string} password
 * @returns {Promise} firebase response
 */
const changePassword = async (password) => {
    const user = auth.currentUser;
    return (await updatePassword(user, password));
}

export { signup, login, deleteSelf, changePassword }