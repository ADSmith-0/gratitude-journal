import { fail, redirect } from '@sveltejs/kit';
import { login, signup } from '$lib/db/db-firebase';
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

        if (!email || !password) return fail(400, "Email or Password undefined");

        try {
            const userCredential = await login(email, password);
            const user = await userCredential.user;

            // Set access token as cookie
            cookies.set('accessToken', user.accessToken, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                // TODO set up env variables for secure!
                secure: false,
                maxAge: 60 * 60 * 24 * 30
            });

            throw redirect(303, '/account/login');
        }catch(error){
            const errorMsg = getError(error.code);
            return fail(400, { error: errorMsg });
        }
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