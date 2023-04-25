const authenticateUser = event => {
    const { cookies } = event;

    const userToken = cookies.get("auth");

    // validate UserToken here
    
    return true;
}

export { authenticateUser }