const setCookie = (cookies, name, value) => {
    cookies.set(name, value, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: import.meta.env.PROD,
        maxAge: 60 * 60 * 24 * 30
    });
}

const deleteCookie = (cookies, name) => {
    if(cookies.get(name)){
        cookies.delete(name, { path: '/' });
    }
    return !cookies.get(name);
}

export { setCookie, deleteCookie };