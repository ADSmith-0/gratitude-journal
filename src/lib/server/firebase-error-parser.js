const errorsMap = new Map();
errorsMap.set("auth/requires-recent-login", "You need to have signed in recently to do this");
errorsMap.set("auth/email-already-in-use", "Email is already in use")
errorsMap.set("auth/user-not-found", "Email or password incorrect");
errorsMap.set("auth/wrong-password", "Email or password incorrect");

const getError = (errorCode) => {
    if(errorsMap.has(errorCode)){
        return errorsMap.get(errorCode);
    }
    return errorCode;
}

export { getError }