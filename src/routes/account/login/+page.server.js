import { fail, redirect } from '@sveltejs/kit';
import { login, signup } from '$lib/db/db-firebase';
import { setCookie } from '$lib/server/cookie.js';
import { getError } from '$lib/server/firebase-error-parser.js';

export async function load({ cookies }) {
    const accessToken = cookies.get('accessToken');

    if (accessToken) {
        throw redirect(303, "/account/details");
    }
}

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) return fail(400, { error: "Email or Password undefined" });

        try {
            const userCredential = await login(email, password);
            const user = await userCredential.user;
            setCookie(cookies, 'accessToken', user.accessToken);
        }catch(error){
            const errorMsg = getError(error.code);
            return fail(400, { error: errorMsg });
        }

        if(!cookies.get('accessToken')){
            return fail(400, { error: "Cookie has not been set" });
        }

        throw redirect(303, '/account/details');
    },
    signup: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) return fail(400, { email, error: "Email or password in incorrect format" });

        try {
            await signup(email, password);
            return { success: "Account created" }
        }catch(error){
            const errorMsg = getError(error.code);
            return fail(400, { error: errorMsg });
        }
    }
}