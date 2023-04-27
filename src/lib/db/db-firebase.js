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
 * @param {function} callback
 * @returns {Promise} firebase response
 */
const firebaseRequest = async (request, callback = (response) => (response)) => {
    try {
        const response = await request;
        callback(response);
        return response;
    }catch(error){
        throw _textFromError(error);
    }
}

/**
 * Reauthorise the user to perform certain actions, e.g. delete their account, change their password etc.
 * @param {UserCredential} credential 
 * @param {function} callback 
 * @returns 
 */
const reauth = (credential, callback) => {
    const user = auth.currentUser;

    return reauthenticateWithCredential(user, credential)
    .then(credentials => callback(credentials))
    .catch(error => {
        console.error(error);
        throw _textFromError(error);
    })
}

/**
 * Sign up a new user with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @param {function} callback 
 * @returns {Promise} firebase response
 */
const signup = (email, password, callback) => (
    firebaseRequest(
        createUserWithEmailAndPassword(auth, email, password),
        callback
    )
)

/**
 * Log user in with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @param {function} callback  to be called after the response has been received
 * @returns {Promise} firebase response
 */
const login = (email, password, callback) => (
    firebaseRequest(
        signInWithEmailAndPassword(auth, email, password),
        callback
    )
)

/**
 * Function for user to delete their account
 * @param {Function} callback 
 * @returns {Promise} firebase response
 */
const deleteSelf = callback => {
    const user = auth.currentUser;

    return firebaseRequest(
        deleteUser(user),
        callback
    )
}

/**
 * Function for user to change their email address
 * @param {string} email
 * @param {function} callback 
 * @returns {Promise} firebase response
 */
const changeEmail = (email, callback) => {
    const user = auth.currentUser;

    return firebaseRequest(
        updateEmail(user, email),
        callback
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