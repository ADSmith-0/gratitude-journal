import { getAppAuth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
const firebaseRequest = (request, callback = (response) => (response)) => (
    request
    .then(response => callback(response))
    .catch(error => {
        console.error(error);
        throw _textFromError(error);
    })
)

/**
 * Sign up a new user with email and password combination
 * @param {string} email 
 * @param {string} password 
 * @param {function} callback 
 * @returns {Promise} firebase response
 */
const signup = (email, password, callback) => (
    firebaseRequest(
        createUserWithEmailAndPassword(getAppAuth(), email, password),
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
        signInWithEmailAndPassword(getAppAuth(), email, password),
        callback
    )
)

export { signup, login }