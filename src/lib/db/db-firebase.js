import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    deleteUser,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
    updateEmail,
    updatePassword
} from 'firebase/auth';

/**
 * Function to take error code and message and parse it to readable text
 * @param {FirebaseError} error 
 * @returns A readable error code
 */
const _textFromError = error => {
    const errorCode = error.code;
    const readableErrorCode = errorCode.split("/")[1].replace(/-/g, " ");
    return readableErrorCode;
}

/**
 * Wrapper to handle firebase requests
 * @param {Firebase request} request 
 * @returns {Promise} firebase response
 */
const firebaseRequest = async (request) => {
    try {
        const response = await request;
        return response;
    }catch(error){
        throw _textFromError(error);
    }
}

/**
 * Reauthorise the user to perform certain actions, e.g. delete their account, change their password etc.
 * @param {UserCredential} credential 
 * @returns 
 */
const reauth = async (credential) => {
    const user = auth.currentUser;
    const credentials = await reauthenticateWithCredential(user, credential);
    return credentials;
}

/**
 * Sign up a new user with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} firebase response
 */
const signup = (email, password) => (
    firebaseRequest(
        createUserWithEmailAndPassword(auth, email, password)
    )
)

/**
 * Log user in with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} firebase response
 */
const login = (email, password) => (
    firebaseRequest(
        signInWithEmailAndPassword(auth, email, password)
    )
)

/**
 * Function for user to delete their account
 * @returns {Promise} firebase response
 */
const deleteSelf = () => {
    const user = auth.currentUser;

    return firebaseRequest(
        deleteUser(user)
    )
}

/**
 * Function for user to change their email address
 * @param {string} email
 * @returns {Promise} firebase response
 */
const changeEmail = email => {
    const user = auth.currentUser;

    return firebaseRequest(
        updateEmail(user, email)
    )
}

/**
 * Function for user to change their password
 * @param {string} password
 * @param {function} callback 
 * @returns {Promise} firebase response
 */
const changePassword = (password, callback) => {
    const user = auth.currentUser;

    return firebaseRequest(
        updatePassword(user, password),
        callback
    )
}

export { signup, login, reauth, deleteSelf, changeEmail, changePassword }